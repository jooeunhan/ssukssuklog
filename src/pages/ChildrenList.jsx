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

const ClassBox = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 24px;
  margin-bottom: 20px;
  border: 2px solid #ffe8cc;
  box-shadow: 0 10px 24px rgba(255, 170, 120, 0.15);
`;

const ClassTitle = styled.h2`
  margin: 0 0 16px;
  color: #ff7b54;
`;

const ChildGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
`;

const ChildCard = styled.div`
  background: #fff8f0;
  padding: 18px;
  border-radius: 18px;
  border: 1px solid #ffd8a8;
`;

const Name = styled.h3`
  margin: 0 0 8px;
`;

const Status = styled.span`
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  background: ${({ $type }) => ($type === "주의" ? "#ffe3e3" : "#d3f9d8")};
  color: ${({ $type }) => ($type === "주의" ? "#e03131" : "#2b8a3e")};
  font-size: 13px;
  font-weight: 700;
`;

function ChildrenList() {
  return (
    <Page>
      <Title>아동 목록 / 반별 조회</Title>
      <SubTitle>반별로 아이들의 상태를 확인할 수 있어요 👧👦</SubTitle>

      <ClassBox>
        <ClassTitle>햇님반</ClassTitle>
        <ChildGrid>
          <ChildCard>
            <Name>김하율</Name>
            <Status $type="주의">주의</Status>
          </ChildCard>
          <ChildCard>
            <Name>이서준</Name>
            <Status>정상</Status>
          </ChildCard>
          <ChildCard>
            <Name>박지아</Name>
            <Status $type="주의">주의</Status>
          </ChildCard>
        </ChildGrid>
      </ClassBox>

      <ClassBox>
        <ClassTitle>달님반</ClassTitle>
        <ChildGrid>
          <ChildCard>
            <Name>최도윤</Name>
            <Status $type="주의">확인 필요</Status>
          </ChildCard>
          <ChildCard>
            <Name>정아린</Name>
            <Status>정상</Status>
          </ChildCard>
          <ChildCard>
            <Name>오민준</Name>
            <Status>정상</Status>
          </ChildCard>
        </ChildGrid>
      </ClassBox>
    </Page>
  );
}

export default ChildrenList;