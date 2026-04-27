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
  grid-template-columns: 1fr 1fr;
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

const RequestBox = styled.div`
  background: #fff8f0;
  padding: 18px;
  border-radius: 18px;
  margin-bottom: 14px;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  border: 2px solid #ffd8a8;
  border-radius: 16px;
  margin-bottom: 12px;
  outline: none;

  &:focus {
    border-color: #ff9f68;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 14px 16px;
  border: 2px solid #ffd8a8;
  border-radius: 16px;
  resize: none;
  outline: none;

  &:focus {
    border-color: #ff9f68;
  }
`;

const Button = styled.button`
  border: none;
  background: #ff9f68;
  color: white;
  padding: 13px 20px;
  border-radius: 16px;
  font-weight: 800;
  cursor: pointer;
  margin-top: 12px;

  &:hover {
    background: #ff7b54;
  }
`;

const CheckLabel = styled.label`
  display: block;
  background: #e6fcf5;
  padding: 16px;
  border-radius: 16px;
  font-weight: 800;
  color: #087f5b;
`;

function MedicationManage() {
  return (
    <Page>
      <Title>복약 요청 / 확인 관리</Title>
      <SubTitle>보호자 요청을 확인하고 투약 여부를 기록해요 💊</SubTitle>

      <Grid>
        <Card>
          <CardTitle>보호자 복약 요청</CardTitle>
          <RequestBox>
            <strong>김하율</strong>
            <p>점심 식후 감기약 1회 복용 요청</p>
          </RequestBox>
          <RequestBox>
            <strong>최도윤</strong>
            <p>간식 후 알레르기 약 복용 요청</p>
          </RequestBox>
        </Card>

        <Card>
          <CardTitle>복약 정보 기록</CardTitle>
          <Input placeholder="아동 이름" />
          <Input placeholder="약 이름" />
          <Input placeholder="복약 시간" />
          <TextArea placeholder="주의사항을 입력하세요" />
          <Button>복약 정보 저장</Button>
        </Card>

        <Card>
          <CardTitle>투약 여부 체크</CardTitle>
          <CheckLabel>
            <input type="checkbox" /> 김하율 투약 완료
          </CheckLabel>
        </Card>
      </Grid>
    </Page>
  );
}

export default MedicationManage;