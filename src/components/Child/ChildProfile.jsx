import styled from "styled-components";

function ChildProfile({
  name,
  className,
  age,
  size = "normal",
}) {
  return (
    <Container>
      <Profile $size={size}>
        {name?.slice(0, 1)}
      </Profile>

      <Info>
        <Name>{name}</Name>

        <Detail>
          {className}
          {age && ` · ${age}`}
        </Detail>
      </Info>
    </Container>
  );
}

export default ChildProfile;

const Container = styled.div`
  display: flex;
  align-items: center;

  gap: 11px;
`;

const Profile = styled.div`
  width: ${({ $size }) =>
    $size === "large" ? "52px" : "42px"};

  height: ${({ $size }) =>
    $size === "large" ? "52px" : "42px"};

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #e5f4e9;
  color: #66ae7b;

  font-size: ${({ $size }) =>
    $size === "large" ? "16px" : "13px"};

  font-weight: 700;
`;

const Info = styled.div``;

const Name = styled.p`
  color: #4d5851;

  font-size: 13px;
  font-weight: 700;
`;

const Detail = styled.p`
  margin-top: 3px;

  color: #99a39d;

  font-size: 10px;
`;