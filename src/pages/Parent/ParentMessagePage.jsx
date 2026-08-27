import { useState } from "react";
import styled from "styled-components";
import {
  Check,
  MessageCircleHeart,
  Sparkles,
} from "lucide-react";

import FormSection from "../../components/FormSection/FormSection";
import ChildSelect from "../../components/Child/ChildSelect";
import TextInput from "../../components/Input/TextInput";
import CommonButton from "../../components/Button/CommonButton";
import ToneSelector from "../../components/Filter/ToneSelector";
import IconBox from "../../components/Box/IconBox";

function ParentMessagePage() {
  const [selectedChild, setSelectedChild] = useState("");
  const [tone, setTone] = useState("friendly");
  const [message, setMessage] = useState("");

  const children = [
    { id: 1, name: "김하윤", className: "휴니반", age: "만 4세" },
    { id: 2, name: "박지호", className: "엔지반", age: "만 2세" },
    { id: 3, name: "이서윤", className: "휴니반", age: "만 5세" },
    { id: 4, name: "최도윤", className: "소니언반", age: "만 1세" },
  ];

  const selectedChildInfo = children.find(
    (child) => child.id === Number(selectedChild)
  );

  const todayRecords = [
    {
      id: 1,
      label: "체온",
      value: "37.6℃",
    },
    {
      id: 2,
      label: "증상",
      value: "간헐적인 기침",
    },
    {
      id: 3,
      label: "식사",
      value: "점심 정상 섭취",
    },
    {
      id: 4,
      label: "낮잠",
      value: "정상",
    },
  ];

  const handleGenerate = () => {
    if (!selectedChildInfo) {
      alert("아동을 선택해주세요.");
      return;
    }

    const childName = selectedChildInfo.name.slice(1);

    if (tone === "simple") {
      setMessage(
        `안녕하세요, ${childName} 보호자님. 오늘 체온은 37.6℃였으며 간헐적인 기침이 관찰되었습니다. 점심 식사와 낮잠은 평소와 같이 잘 진행되었습니다. 가정에서도 상태를 살펴봐 주세요.`
      );

      return;
    }

    if (tone === "detail") {
      setMessage(
        `안녕하세요, ${childName} 보호자님. 오늘 ${selectedChildInfo.name}의 건강 상태를 전달드립니다. 체온은 37.6℃로 기록되었으며 활동 중 간헐적으로 기침하는 모습이 관찰되었습니다. 점심 식사는 정상적으로 섭취하였고 낮잠도 편안하게 잤습니다. 현재 특별한 이상 반응은 없으나 가정에서도 기침이나 체온 변화를 한 번 더 살펴봐 주시면 감사하겠습니다.`
      );

      return;
    }

    setMessage(
      `안녕하세요, ${childName} 보호자님 :) 오늘 ${selectedChildInfo.name}는 점심도 잘 먹고 낮잠도 편안하게 잤어요. 다만 활동 중 간헐적으로 기침하는 모습이 보여 전달드립니다. 체온은 37.6℃로 기록되었어요. 가정에서도 한 번 살펴봐 주세요.`
    );
  };

  const handleSend = () => {
    if (!message.trim()) {
      alert("메시지를 작성해주세요.");
      return;
    }

    console.log({
      childId: selectedChild,
      tone,
      message,
    });

    alert("보호자 메시지가 저장되었습니다.");
  };

  return (
    <Container>
      <IntroCard>
        <IconBox background="#FCECF0" color="#D87988">
          <MessageCircleHeart size={23} />
        </IconBox>

        <div>
          <IntroTitle>보호자에게 오늘의 상태를 알려주세요</IntroTitle>
          <IntroText>
            오늘 기록한 건강 정보를 바탕으로 메시지를 작성할 수 있어요.
          </IntroText>
        </div>
      </IntroCard>

      <FormSection
        step="1"
        title="아동 선택"
        description="메시지를 작성할 아동을 선택해주세요."
      >
        <ChildSelect
          childrenList={children}
          value={selectedChild}
          onChange={setSelectedChild}
        />
      </FormSection>

      <FormSection
        step="2"
        title="오늘의 기록"
        description="메시지에 반영될 건강 정보를 확인해주세요."
      >
        <RecordList>
          {todayRecords.map((record) => (
            <RecordItem key={record.id}>
              <CheckBox>
                <Check size={13} />
              </CheckBox>

              <RecordLabel>{record.label}</RecordLabel>
              <RecordValue>{record.value}</RecordValue>
            </RecordItem>
          ))}
        </RecordList>
      </FormSection>

      <FormSection
        step="3"
        title="메시지 스타일"
        description="보호자에게 전달할 말투를 선택해주세요."
      >
        <ToneSelector
          value={tone}
          onChange={setTone}
        />
      </FormSection>

      <AiGenerateButton
        type="button"
        onClick={handleGenerate}
      >
        <Sparkles size={18} />
        AI 메시지 만들기
      </AiGenerateButton>

      <FormSection
        step="4"
        title="메시지 작성"
        description="생성된 메시지를 자유롭게 수정할 수 있어요."
      >
        <TextInput
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="보호자에게 전달할 내용을 작성해주세요."
          maxLength={1000}
        />

        <TextCount>{message.length} / 1000</TextCount>
      </FormSection>

      <CommonButton onClick={handleSend}>
        보호자 메시지 저장하기
      </CommonButton>
    </Container>
  );
}

export default ParentMessagePage;

const Container = styled.div`
  width: 100%;
  max-width: 560px;

  margin: 0 auto;
  padding: 22px 18px 35px;
`;

const IntroCard = styled.div`
  display: flex;
  align-items: center;

  gap: 13px;

  padding: 18px;

  border: 1px solid #f1dfe3;
  border-radius: 20px;

  background: #fdf4f6;
`;

const IntroTitle = styled.h2`
  color: #765b62;

  font-size: 14px;
  font-weight: 700;
`;

const IntroText = styled.p`
  margin-top: 4px;

  color: #9a858a;

  font-size: 10px;

  line-height: 1.5;
`;

const RecordList = styled.div`
  display: flex;
  flex-direction: column;

  gap: 9px;
`;

const RecordItem = styled.div`
  min-height: 45px;

  padding: 10px 12px;

  display: flex;
  align-items: center;

  gap: 9px;

  border-radius: 13px;

  background: #fafcfb;
`;

const CheckBox = styled.div`
  width: 22px;
  height: 22px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 7px;

  background: #e7f5eb;
  color: #63b77d;
`;

const RecordLabel = styled.span`
  width: 40px;

  color: #9aa39d;

  font-size: 10px;
`;

const RecordValue = styled.span`
  color: #59645d;

  font-size: 11px;
  font-weight: 600;
`;

const AiGenerateButton = styled.button`
  width: 100%;
  height: 50px;

  margin-top: 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 7px;

  border: 1px solid #d9ede0;
  border-radius: 16px;

  background: #edf8f0;
  color: #60ad77;

  font-size: 12px;
  font-weight: 700;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: #e5f5e9;
  }
`;

const TextCount = styled.p`
  margin-top: 7px;

  color: #a0aaa4;

  font-size: 9px;

  text-align: right;
`;