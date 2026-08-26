import { useState } from "react";
import styled from "styled-components";

import {
  Sprout,
  UserRound,
  Lock,
} from "lucide-react";

import CommonButton from "../../components/Button/CommonButton";

function LoginPage() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log({
      userId,
      password,
    });
  };

  return (
    <Container>
      <BackgroundCircle $top="8%" $left="8%" $size="150px" $color="#E9F7EF" />
      <BackgroundCircle
        $bottom="10%"
        $right="8%"
        $size="190px"
        $color="#FFF3D6"
      />

      <LoginBox>
        <LogoArea>
          <Logo><Sprout size={30}/></Logo>

          <Title>쑥쑥로그</Title>

          <Description>
            아이들의 하루를 건강하게
            <br />
            기록하고 살펴봐요
          </Description>
        </LogoArea>

        <Card>
          <Form onSubmit={handleLogin}>
            <InputArea>
              <Label>아이디</Label>

              <InputBox>
                <InputIcon><UserRound size={18}/></InputIcon>

                <Input
                  type="text"
                  placeholder="아이디를 입력해주세요"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
              </InputBox>
            </InputArea>

            <InputArea>
              <Label>비밀번호</Label>

              <InputBox>
                <InputIcon><Lock size={18} /></InputIcon>

                <Input
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputBox>
            </InputArea>

            <LoginButton type="submit">로그인</LoginButton>
          </Form>
        </Card>

        <BottomText>
          쑥쑥로그와 함께 아이들의 건강한 하루를 기록해요.
        </BottomText>
      </LoginBox>
    </Container>
  );
}

export default LoginPage;

const Container = styled.div`
  position: relative;

  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 40px 20px;

  background: #f8fbf8;

  overflow: hidden;
`;

const LoginBox = styled.div`
  position: relative;
  z-index: 1;

  width: 100%;
  max-width: 420px;
`;

const LogoArea = styled.div`
  margin-bottom: 28px;

  text-align: center;
`;

const Logo = styled.div`
  width: 76px;
  height: 76px;

  margin: 0 auto 14px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 26px;

  background: #e2f5e9;

  font-size: 38px;

  box-shadow: 0 8px 20px rgba(84, 145, 109, 0.12);
`;

const Title = styled.h1`
  color: #5ca978;

  font-size: 30px;
  font-weight: 800;

  letter-spacing: -1px;
`;

const Description = styled.p`
  margin-top: 10px;

  color: #849089;

  font-size: 14px;
  font-weight: 500;

  line-height: 1.6;
`;

const Card = styled.div`
  padding: 30px;

  background: #ffffff;

  border-radius: 26px;

  box-shadow: 0 12px 35px rgba(69, 102, 81, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 20px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
`;

const Label = styled.label`
  padding-left: 3px;

  color: #606b65;

  font-size: 13px;
  font-weight: 600;
`;

const InputBox = styled.div`
  height: 54px;

  display: flex;
  align-items: center;

  padding: 0 16px;

  background: #fafcfb;

  border: 1.5px solid #e6ece8;
  border-radius: 15px;

  transition: 0.2s;

  &:focus-within {
    background: #ffffff;

    border-color: #73c391;

    box-shadow: 0 0 0 4px rgba(115, 195, 145, 0.1);
  }
`;

const InputIcon = styled.span`
  margin-right: 11px;

  font-size: 16px;
`;

const Input = styled.input`
  width: 100%;

  border: none;
  outline: none;

  background: transparent;

  color: #46504a;

  font-size: 14px;

  &::placeholder {
    color: #b0b9b4;
  }
`;

const LoginButton = styled(CommonButton)`
  width: 100%;
  height: 54px;

  margin-top: 4px;
`;

const BottomText = styled.p`
  margin-top: 10px;

  color: #a1aaa5;

  font-size: 11px;

  text-align: center;
`;

const BackgroundCircle = styled.div`
  position: absolute;

  top: ${({ $top }) => $top || "auto"};
  left: ${({ $left }) => $left || "auto"};
  right: ${({ $right }) => $right || "auto"};
  bottom: ${({ $bottom }) => $bottom || "auto"};

  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};

  border-radius: 50%;

  background: ${({ $color }) => $color};
`;