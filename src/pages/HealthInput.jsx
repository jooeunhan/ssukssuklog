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

const FormCard = styled.div`
  background: #fff;
  padding: 28px;
  border-radius: 24px;
  border: 2px solid #ffe8cc;
  box-shadow: 0 10px 24px rgba(255, 170, 120, 0.15);
  max-width: 760px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 800;
  color: #5c4033;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  border: 2px solid #ffd8a8;
  border-radius: 16px;
  font-size: 15px;
  outline: none;

  &:focus {
    border-color: #ff9f68;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 14px 16px;
  border: 2px solid #ffd8a8;
  border-radius: 16px;
  font-size: 15px;
  resize: none;
  outline: none;

  &:focus {
    border-color: #ff9f68;
  }
`;

const CheckList = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const CheckItem = styled.label`
  background: #fff8f0;
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid #ffd8a8;
  cursor: pointer;
`;

const Button = styled.button`
  border: none;
  background: #ff9f68;
  color: white;
  padding: 14px 24px;
  border-radius: 18px;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;

  &:hover {
    background: #ff7b54;
  }
`;

function HealthInput() {
  return (
    <Page>
      <Title>건강 상태 입력</Title>
      <SubTitle>체온, 증상, 메모를 기록해요 🌡️</SubTitle>

      <FormCard>
        <FormGroup>
          <Label>아동 이름</Label>
          <Input placeholder="예: 김하율" />
        </FormGroup>

        <FormGroup>
          <Label>체온</Label>
          <Input type="number" step="0.1" placeholder="예: 37.5" />
        </FormGroup>

        <FormGroup>
          <Label>증상 체크</Label>
          <CheckList>
            <CheckItem>
              <input type="checkbox" /> 기침
            </CheckItem>
            <CheckItem>
              <input type="checkbox" /> 콧물
            </CheckItem>
            <CheckItem>
              <input type="checkbox" /> 발열
            </CheckItem>
            <CheckItem>
              <input type="checkbox" /> 복통
            </CheckItem>
            <CheckItem>
              <input type="checkbox" /> 식욕 저하
            </CheckItem>
          </CheckList>
        </FormGroup>

        <FormGroup>
          <Label>메모 작성</Label>
          <TextArea placeholder="예: 점심 이후 얼굴이 붉고 기침을 자주 함" />
        </FormGroup>

        <Button>건강 기록 저장</Button>
      </FormCard>
    </Page>
  );
}

export default HealthInput;