import { useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #fff8f0, #ffe8cc);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 440px;
  background: rgba(255, 255, 255, 0.9);
  padding: 56px 44px;
  border-radius: 36px;
  text-align: center;
  box-shadow: 0 24px 60px rgba(255, 145, 77, 0.1);
`;

const Logo = styled.h1`
  font-size: 44px;
  margin: 0 0 12px;
  color: #ff914d;
`;

const Sub = styled.p`
  color: #7b6f68;
  margin-bottom: 40px;
`;

const Btn = styled.button`
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 18px;
  margin-bottom: 14px;
  font-size: 16px;
  font-weight: 800;
  background: ${({ $sub }) => ($sub ? "#fff3e6" : "#ffad66")};
  color: ${({ $sub }) => ($sub ? "#ff914d" : "white")};
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 18px rgba(255, 145, 77, 0.02);
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(92, 64, 51, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  width: 460px;
  background: white;
  padding: 34px;
  border-radius: 30px;
  box-shadow: 0 24px 60px rgba(92, 64, 51, 0.05);
`;

const ModalTitle = styled.h2`
  margin: 0 0 8px;
  color: #5c4033;
`;

const ModalSub = styled.p`
  margin: 0 0 26px;
  color: #8a7a70;
  font-size: 14px;
`;

const Input = styled.input`
  width: 93%;
  padding: 15px 16px;
  margin-bottom: 14px;
  border-radius: 16px;
  border: 1.5px solid #f0d6bf;
  outline: none;
  font-size: 14px;

  &:focus {
    border-color: #ffad66;
    box-shadow: 0 0 0 4px rgba(255, 173, 102, 0.05);
  }
`;

const Row = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
`;

const SmallBtn = styled(Btn)`
  margin-bottom: 0;
`;

function Start({ setPage }) {
  const [modal, setModal] = useState(null);

  const [business, setBusiness] = useState("");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const loginCheck = () => {
    if (business === "123" && id === "admin" && pw === "1234") {
      setPage("dashboard");
    } else {
      alert("정보가 올바르지 않습니다.");
    }
  };

  return (
    <Wrap>
      <Box>
        <Logo>🌱 쑥쑥로그</Logo>
        <Sub>어린이집 교사용 아동 건강 관리 서비스</Sub>

        <Btn onClick={() => setModal("login")}>로그인</Btn>
        <Btn $sub onClick={() => setModal("signup")}>회원가입</Btn>
      </Box>

      {modal && (
        <Overlay onClick={() => setModal(null)}>
          <ModalBox onClick={(e) => e.stopPropagation()}>
            {modal === "login" ? (
              <>
                <ModalTitle>로그인</ModalTitle>
                <ModalSub>교사용 계정으로 로그인해주세요.</ModalSub>

                <Input
                  placeholder="사업자등록번호"
                  value={business}
                  onChange={(e) => setBusiness(e.target.value)}
                />
                <Input
                  placeholder="아이디"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
                <Input
                  type="password"
                  placeholder="비밀번호"
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                />

                <Row>
                  <SmallBtn onClick={loginCheck}>로그인</SmallBtn>
                  <SmallBtn $sub onClick={() => setModal(null)}>닫기</SmallBtn>
                </Row>
              </>
            ) : (
              <>
                <ModalTitle>회원가입</ModalTitle>
                <ModalSub>교사 계정을 생성해주세요.</ModalSub>

                <Input placeholder="사업자등록번호" />
                <Input placeholder="아이디" />
                <Input type="password" placeholder="비밀번호" />
                <Input placeholder="교사 이름" />
                <Input placeholder="어린이집 이름" />

                <Row>
                  <SmallBtn>가입하기</SmallBtn>
                  <SmallBtn $sub onClick={() => setModal(null)}>닫기</SmallBtn>
                </Row>
              </>
            )}
          </ModalBox>
        </Overlay>
      )}
    </Wrap>
  );
}

export default Start;