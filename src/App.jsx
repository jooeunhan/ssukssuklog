import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

import Start from "./pages/Start"
import Dashboard from "./pages/Dashboard";
import ChildrenList from "./pages/ChildrenList";
import HealthInput from "./pages/HealthInput";
import ChildHistory from "./pages/ChildHistory";
import ParentMessage from "./pages/ParentMessage";
import MedicationManage from "./pages/MedicationManage";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #fff8f0;
    font-family: "Pretendard", "Noto Sans KR", sans-serif;
    color: #4b4b4b;
  }

  button,
  input,
  textarea,
  select {
    font-family: inherit;
  }
`;

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Sidebar = styled.aside`
  width: 260px;
  background: #ffd8a8;
  padding: 28px 20px;
  border-right: 4px solid #ffc078;
`;

const Logo = styled.div`
  margin-bottom: 32px;
`;

const LogoIcon = styled.div`
  font-size: 42px;
  margin-bottom: 8px;
`;

const LogoTitle = styled.h2`
  margin: 0;
  color: #5c4033;
  font-size: 24px;
`;

const LogoSub = styled.p`
  margin: 6px 0 0;
  color: #7c5c48;
  font-size: 14px;
`;

const MenuButton = styled.button`
  width: 100%;
  border: none;
  background: ${({ $active }) => ($active ? "#fff" : "rgba(255,255,255,0.45)")};
  color: ${({ $active }) => ($active ? "#ff7b54" : "#5c4033")};
  padding: 14px 16px;
  margin-bottom: 12px;
  border-radius: 18px;
  text-align: left;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: ${({ $active }) =>
    $active ? "0 8px 18px rgba(255, 123, 84, 0.25)" : "none"};

  &:hover {
    background: #fff;
  }
`;

const Content = styled.main`
  flex: 1;
  padding: 36px;
`;

function App() {
  const [page, setPage] = useState("start");

  const menus = [
    { id: "dashboard", label: "🏠 대시보드" },
    { id: "children", label: "👧 아동 목록 / 반별 조회" },
    { id: "healthInput", label: "🌡️ 건강 상태 입력" },
    { id: "history", label: "📊 아동 상세 / 히스토리" },
    { id: "message", label: "💌 보호자 알림 / 메시지" },
    { id: "medication", label: "💊 복약 요청 관리" },
  ];

  const renderPage = () => {
    switch (page) {
      case "dashboard":
        return <Dashboard />;
      case "children":
        return <ChildrenList />;
      case "healthInput":
        return <HealthInput />;
      case "history":
        return <ChildHistory />;
      case "message":
        return <ParentMessage />;
      case "medication":
        return <MedicationManage />;
      default:
        return <Dashboard />;
    }
  };

  if (page === "start") {
    return (
      <>
        <GlobalStyle />
        <Start setPage={setPage} />
      </>
    );
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Sidebar>
          <Logo>
            <LogoIcon>🌱</LogoIcon>
            <LogoTitle>쑥쑥로그</LogoTitle>
            <LogoSub>어린이집 교사용 건강 관리</LogoSub>
          </Logo>

          {menus.map((menu) => (
            <MenuButton
              key={menu.id}
              $active={page === menu.id}
              onClick={() => setPage(menu.id)}
            >
              {menu.label}
            </MenuButton>
          ))}
        </Sidebar>

        <Content>{renderPage()}</Content>
      </Layout>
    </>
  );
}

export default App;