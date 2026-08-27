import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  House,
  Baby,
  ClipboardPlus,
  Pill,
  Bell,
} from "lucide-react";

function BottomNavigation({ active = "home" }) {
  const navigate = useNavigate();

  return (
    <Container>
      <NavItem $active={active === "home"}
        onClick={() => navigate("/")}>
        <House size={21} />
        <span>홈</span>
      </NavItem>

      <NavItem $active={active === "children"}
        onClick={() => navigate("/children")}
      >
        <Baby size={21} />
        <span>아이</span>
      </NavItem>

      <CenterItem>
        <RecordButton>
          <ClipboardPlus size={24} />
        </RecordButton>
        <span>기록</span>
      </CenterItem>

      <NavItem $active={active === "medication"}>
        <Pill size={21} />
        <span>투약</span>
      </NavItem>

      <NavItem $active={active === "notification"}>
        <Bell size={21} />
        <span>알림</span>
      </NavItem>
    </Container>
  );
}

export default BottomNavigation;

const Container = styled.nav`
  position: fixed;

  left: 50%;
  bottom: 0;

  transform: translateX(-50%);

  width: 100%;
  max-width: 560px;
  height: 74px;

  display: grid;
  grid-template-columns: repeat(5, 1fr);

  align-items: center;

  padding: 5px 10px 7px;

  background: #ffffff;

  border-top: 1px solid #edf1ee;

  z-index: 100;
`;

const NavItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 4px;

  border: none;

  background: transparent;

  color: ${({ $active }) => ($active ? "#63B77D" : "#A0AAA4")};

  font-size: 10px;
  font-weight: 600;

  cursor: pointer;
`;

const CenterItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 3px;

  color: #7c8781;

  font-size: 10px;
  font-weight: 600;
`;

const RecordButton = styled.button`
  width: 48px;
  height: 48px;

  margin-top: -24px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 16px;

  background: #73c391;
  color: #ffffff;

  box-shadow: 0 6px 15px rgba(99, 183, 125, 0.25);

  cursor: pointer;
`;