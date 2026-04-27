import styled from "styled-components";

const Page = styled.section``;

const Title = styled.h1`
  margin: 0 0 8px;
  font-size: 32px;
  color: #5c4033;
`;

const SubTitle = styled.p`
  margin: 0 0 28px;
  color: #8a6f5a;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-bottom: 28px;
`;

const Card = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 24px;
  box-shadow: 0 10px 24px rgba(255, 170, 120, 0.18);
  border: 2px solid #ffe8cc;
`;

const CardTitle = styled.h3`
  margin: 0 0 12px;
  color: #ff7b54;
`;

const BigText = styled.p`
  margin: 0;
  font-size: 28px;
  font-weight: 800;
  color: #5c4033;
`;

const List = styled.ul`
  padding-left: 20px;
  line-height: 2;
`;

function Dashboard() {
  return (
    <Page>
      <Title>대시보드</Title>
      <SubTitle>오늘 아이들의 건강 상태를 한눈에 확인해요 🧸</SubTitle>

      <CardGrid>
        <Card>
          <CardTitle>전체 아동</CardTitle>
          <BigText>24명</BigText>
        </Card>

        <Card>
          <CardTitle>주의 필요</CardTitle>
          <BigText>3명</BigText>
        </Card>

        <Card>
          <CardTitle>복약 예정</CardTitle>
          <BigText>2건</BigText>
        </Card>
      </CardGrid>

      <Card>
        <CardTitle>최근 이상 징후 알림</CardTitle>
        <List>
          <li>김하율 - 체온 37.8도, 기침 있음</li>
          <li>박지아 - 콧물 증상 기록</li>
          <li>최도윤 - 복통 호소</li>
        </List>
      </Card>
    </Page>
  );
}

export default Dashboard;