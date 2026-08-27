import styled from "styled-components";

const statusStyle = {
  normal: {
    background: "#E8F6EC",
    color: "#63B77D",
  },
  watch: {
    background: "#FFF4D9",
    color: "#C99635",
  },
  danger: {
    background: "#FCE9E9",
    color: "#D86F6F",
  },
};

function StatusBadge({ type = "normal", children }) {
  const style = statusStyle[type];

  return (
    <Badge $background={style.background} $color={style.color}>
      {children}
    </Badge>
  );
}

export default StatusBadge;

const Badge = styled.span`
  padding: 4px 8px;

  border-radius: 20px;

  background: ${({ $background }) => $background};
  color: ${({ $color }) => $color};

  font-size: 10px;
  font-weight: 700;
`;