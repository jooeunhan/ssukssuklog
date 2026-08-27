import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";

import Header from "../common/Header/Header";
import BottomNavigation from "../common/Navigation/BottomNavigation";

function RootLayout() {
  const location = useLocation();

  const pageInfo = {
    "/": {
      title: "안녕하세요, 선생님",
      subtitle: "오늘도 아이들의 건강을 살펴봐요.",
      active: "home",
    },

    "/children": {
      title: "아동 목록",
      subtitle: "아이들의 건강 상태를 확인해요.",
      active: "children",
    },

    "/health-input": {
      title: "건강 정보 입력",
      subtitle: "오늘의 건강 상태를 기록해요.",
      active: "record",
    },

    "/medication": {
      title: "투약 관리",
      subtitle: "오늘 예정된 투약을 확인해요.",
      active: "medication",
    },

    "/notifications": {
      title: "알림",
      subtitle: "확인이 필요한 내용을 살펴봐요.",
      active: "notification",
    },
  };

  const currentPage = pageInfo[location.pathname] || {
    title: "쑥쑥로그",
    subtitle: "",
    active: "",
  };

  return (
    <Container>
      <Header
        title={currentPage.title}
        subtitle={currentPage.subtitle}
      />

      <Main>
        <Outlet />
      </Main>

      <BottomNavigation active={currentPage.active} />
    </Container>
  );
}

export default RootLayout;

const Container = styled.div`
  min-height: 100vh;

  background: #f7faf8;
`;

const Main = styled.main`
  width: 100%;

  padding-bottom: 90px;
`;