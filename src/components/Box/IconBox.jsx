import styled from "styled-components";

function IconBox({
  children,
  background = "#E8F6EC",
  color = "#63B77D",
  size = 46,
}) {
  return (
    <Box $background={background} $color={color} $size={size}>
      {children}
    </Box>
  );
}

export default IconBox;

const Box = styled.div`
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};

  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 15px;

  background: ${({ $background }) => $background};
  color: ${({ $color }) => $color};
`;