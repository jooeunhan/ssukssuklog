import { useState } from "react";
import styled from "styled-components";
import {
  Check,
  Sparkles,
  Thermometer,
  HeartPulse,
} from "lucide-react";

import FormSection from "../../components/FormSection/FormSection";
import CommonButton from "../../components/Button/CommonButton";
import ChildSelect from "../../components/Child/ChildSelect";
import IconBox from "../../components/Box/IconBox";
import TextInput from "../../components/Input/TextInput";
import TimeInput from "../../components/Input/TimeInput";

function HealthInputPage() {
  const [selectedChild, setSelectedChild] = useState("");
  const [recordTime, setRecordTime] = useState("");
  const [temperature, setTemperature] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [note, setNote] = useState("");

  const children = [
    { id: 1, name: "김하윤", className: "휴니반", age: "만 4세" },
    { id: 2, name: "박지호", className: "엔지반", age: "만 2세" },
    { id: 3, name: "이서윤", className: "휴니반", age: "만 5세" },
    { id: 4, name: "최도윤", className: "소니언반", age: "만 1세" },
  ];

  const symptoms = [
    "콧물",
    "기침",
    "발열",
    "구토",
    "설사",
    "발진",
    "식욕 저하",
    "활동량 감소",
  ];

  const handleSymptom = (symptom) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((item) => item !== symptom)
        : [...prev, symptom]
    );
  };

  const handleSubmit = () => {
    if (!selectedChild) {
      alert("아동을 선택해주세요.");
      return;
    }

    if (!recordTime) {
      alert("시간을 입력해주세요.");
      return;
    }

    if (!temperature) {
      alert("체온을 입력해주세요.");
      return;
    }

    console.log({
      childId: selectedChild,
      recordTime,
      temperature,
      symptoms: selectedSymptoms,
      note,
    });
  };

  return (
    <Container>
      <IntroCard>
        <IconBox background="#E8F6EC" color="#63B77D">
          <HeartPulse size={24} />
        </IconBox>

        <div>
          <IntroTitle>오늘 아이의 상태는 어떤가요?</IntroTitle>
          <IntroText>
            관찰한 건강 정보를 차근차근 기록해주세요.
          </IntroText>
        </div>
      </IntroCard>

      <FormSection
        step="1"
        title="아동 선택"
        description="건강 정보를 기록할 아이를 선택해주세요."
      >
        <ChildSelect
          childrenList={children}
          value={selectedChild}
          onChange={setSelectedChild}
        />
      </FormSection>

      <FormSection
        step="2"
        title="기록 시간"
        description="체온이나 증상을 관찰한 시간을 입력해주세요."
      >
        <TimeInput
          value={recordTime}
          onChange={setRecordTime}
        />
      </FormSection>

      <FormSection
        step="3"
        title="체온 기록"
        description="현재 측정한 체온을 입력해주세요."
      >
        <TemperatureBox>
          <Thermometer size={25} />

          <TemperatureInput
            type="number"
            step="0.1"
            placeholder="36.5"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
          />

          <span>℃</span>
        </TemperatureBox>
      </FormSection>

      <FormSection
        step="4"
        title="관찰된 증상"
        description="해당하는 증상을 모두 선택해주세요."
      >
        <SymptomGrid>
          {symptoms.map((symptom) => (
            <SymptomButton
              key={symptom}
              $selected={selectedSymptoms.includes(symptom)}
              onClick={() => handleSymptom(symptom)}
            >
              {selectedSymptoms.includes(symptom) && (
                <Check size={14} />
              )}

              {symptom}
            </SymptomButton>
          ))}
        </SymptomGrid>
      </FormSection>

      <FormSection
        step="5"
        title="관찰 내용"
        description="선생님이 관찰한 내용을 자유롭게 작성해주세요."
      >
        <TextInput
          placeholder="예) 점심 식사 후 평소보다 활동량이 줄었고 간헐적으로 기침하는 모습이 관찰되었습니다."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          maxLength={500}
        />
      </FormSection>

      <AiCard>
        <Sparkles size={20} />

        <div>
          <AiTitle>AI 건강 기록 정리</AiTitle>
          <AiText>
            입력한 내용을 바탕으로 관찰 기록을 정리해요.
          </AiText>
        </div>

        <AiButton>정리하기</AiButton>
      </AiCard>

      <CommonButton onClick={handleSubmit}>
        건강 정보 기록하기
      </CommonButton>
    </Container>
  );
}

export default HealthInputPage;

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

  border: 1px solid #dceee2;
  border-radius: 20px;

  background: #f0f8f2;
`;

const IntroTitle = styled.h2`
  color: #4f6958;

  font-size: 15px;
  font-weight: 700;
`;

const IntroText = styled.p`
  margin-top: 4px;

  color: #84968a;

  font-size: 11px;
`;

const TemperatureBox = styled.div`
  height: 75px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  border: 1px solid #e3eae5;
  border-radius: 18px;

  background: #fafcfb;

  color: #76bc8a;
`;

const TemperatureInput = styled.input`
  width: 110px;

  border: none;
  outline: none;

  background: transparent;

  color: #46514b;

  font-size: 30px;
  font-weight: 700;

  text-align: right;
`;

const SymptomGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 10px;
`;

const SymptomButton = styled.button`
  height: 45px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 5px;

  border: 1px solid
    ${({ $selected }) => ($selected ? "#73C391" : "#E5EBE7")};

  border-radius: 14px;

  background: ${({ $selected }) =>
    $selected ? "#ECF8F0" : "#FFFFFF"};

  color: ${({ $selected }) =>
    $selected ? "#5EAF78" : "#77817B"};

  font-size: 12px;
  font-weight: 600;

  cursor: pointer;
`;

const AiCard = styled.div`
  margin: 18px 0;
  padding: 17px;

  display: flex;
  align-items: center;

  gap: 12px;

  border: 1px solid #dceee2;
  border-radius: 18px;

  background: #f1f9f3;

  color: #69b680;
`;

const AiTitle = styled.p`
  color: #55705e;

  font-size: 12px;
  font-weight: 700;
`;

const AiText = styled.p`
  margin-top: 3px;

  color: #87958b;

  font-size: 10px;
`;

const AiButton = styled.button`
  margin-left: auto;

  padding: 8px 11px;

  border: none;
  border-radius: 10px;

  background: #73c391;
  color: #ffffff;

  font-size: 10px;
  font-weight: 700;

  cursor: pointer;
`;