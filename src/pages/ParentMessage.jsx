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

const Card = styled.div`
  background: #fff;
  padding: 26px;
  border-radius: 24px;
  border: 2px solid #ffe8cc;
  box-shadow: 0 10px 24px rgba(255, 170, 120, 0.15);
  max-width: 780px;
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  margin: 0 0 16px;
  color: #ff7b54;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 110px;
  padding: 14px 16px;
  border: 2px solid #ffd8a8;
  border-radius: 16px;
  resize: none;
  font-size: 15px;
  outline: none;

  &:focus {
    border-color: #ff9f68;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 14px;
`;

const Button = styled.button`
  border: none;
  background: ${({ $secondary }) => ($secondary ? "#ffe8cc" : "#ff9f68")};
  color: ${({ $secondary }) => ($secondary ? "#5c4033" : "white")};
  padding: 13px 20px;
  border-radius: 16px;
  font-weight: 800;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`;

const MessageBox = styled.div`
  background: #fff8f0;
  padding: 18px;
  border-radius: 18px;
  line-height: 1.7;
`;

function ParentMessage() {
  return (
    <Page>
      <Title>보호자 알림 / 메시지</Title>
      <SubTitle>AI 문구를 생성하고 교사가 검토 후 전송해요 💌</SubTitle>

      <Card>
        <CardTitle>상황 입력</CardTitle>
        <TextArea placeholder="예: 김하율 아동이 점심 이후 얼굴이 붉고 기침을 자주 했습니다." />
        <ButtonGroup>
          <Button>AI 문구 생성</Button>
          <Button $secondary>초기화</Button>
        </ButtonGroup>
      </Card>

      <Card>
        <CardTitle>보호자 전송 문구</CardTitle>
        <MessageBox>
          안녕하세요. 오늘 김하율 아동이 점심 이후 얼굴이 조금 붉고
          기침을 하는 모습이 관찰되어 안내드립니다. 가정에서도 컨디션을
          한 번 더 확인 부탁드립니다.
        </MessageBox>
        <ButtonGroup>
          <Button>보호자에게 전송</Button>
          <Button $secondary>수정하기</Button>
        </ButtonGroup>
      </Card>
    </Page>
  );
}

export default ParentMessage;