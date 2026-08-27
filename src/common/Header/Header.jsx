import styled from "styled-components";
import { Bell } from "lucide-react";

function Header({ title, subtitle, showNotification = true }) {
  return (
    <Container>
      <div>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </div>

      {showNotification && (
        <NotificationButton>
          <Bell size={21} />
          <NotificationDot />
        </NotificationButton>
      )}
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

const NotificationButton = styled.button`
  position: relative;

  width: 43px;
  height: 43px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 14px;

  background: #f1f7f3;
  color: #617067;

  cursor: pointer;
`;

const NotificationDot = styled.span`
  position: absolute;

  top: 9px;
  right: 9px;

  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: #ed7e7e;

  border: 2px solid #f1f7f3;
`;