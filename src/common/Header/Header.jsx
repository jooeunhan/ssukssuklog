import styled from "styled-components";

function Header({ title, subtitle = true }) {
  return (
    <Container>
      <div>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </div>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  width: 100%;
  height: 92px;

  padding: 24px 22px 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #ffffff;
`;

const Title = styled.h1`
  color: #3f4944;

  font-size: 21px;
  font-weight: 700;

  letter-spacing: -0.5px;
`;

const Subtitle = styled.p`
  margin-top: 5px;

  color: #96a099;

  font-size: 13px;
`;
