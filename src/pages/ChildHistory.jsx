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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 20px;
`;

const Card = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 24px;
  border: 2px solid #ffe8cc;
  box-shadow: 0 10px 24px rgba(255, 170, 120, 0.15);
`;

const CardTitle = styled.h3`
  margin: 0 0 16px;
  color: #ff7b54;
`;

const GraphBox = styled.div`
  height: 220px;
  background: linear-gradient(180deg, #fff8f0, #ffe8cc);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8a6f5a;
  font-weight: 800;
`;

const Record = styled.div`
  padding: 14px;
  border-radius: 16px;
  background: #fff8f0;
  margin-bottom: 12px;
`;

const AiBox = styled.div`
  background: #e7f5ff;
  padding: 18px;
  border-radius: 18px;
  color: #1864ab;
  font-weight: 700;
`;

function ChildHistory() {
  return (
    <Page>
      <Title>아동 상세 / 히스토리 분석</Title>
      <SubTitle>최근 건강 기록과 AI 분석 결과를 확인해요 📊</SubTitle>

      <Grid>
        <Card>
          <CardTitle>최근 7일 체온 그래프</CardTitle>
          <GraphBox>그래프 표시 영역</GraphBox>
        </Card>

        <Card>
          <CardTitle>AI 분석 결과</CardTitle>
          <AiBox>
            최근 2일간 기침과 미열이 반복되어 관찰이 필요합니다.
            보호자에게 안내 메시지 전송을 권장합니다.
          </AiBox>
        </Card>

        <Card>
          <CardTitle>증상 기록</CardTitle>
          <Record>4월 1일 - 기침, 미열</Record>
          <Record>4월 2일 - 정상</Record>
          <Record>4월 3일 - 콧물</Record>
        </Card>

        <Card>
          <CardTitle>자유 서술 기록</CardTitle>
          <Record>점심 이후 얼굴이 붉고 기침을 자주 함</Record>
          <Record>낮잠 이후 컨디션이 조금 좋아짐</Record>
        </Card>
      </Grid>
    </Page>
  );
}

export default ChildHistory;