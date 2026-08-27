import { useState } from "react";
import styled from "styled-components";
import {
  Activity,
  CalendarDays,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import ChildProfile from "../../components/Child/ChildProfile";
import PeriodFilter from "../../components/Filter/PeriodFilter";
import HealthTimelineItem from "../../components/Filter/HealthTimelineItem";
import StatusBadge from "../../components/Card/StatusBadge";
import IconBox from "../../components/Box/IconBox";

function HealthHistoryPage() {
  const [period, setPeriod] = useState("7days");

  const child = {
    id: 1,
    name: "김하윤",
    className: "휴니반",
    age: "만 4세",
  };

  const records = [
    {
      id: 1,
      date: "8월 27일",
      records: [
        {
          time: "09:10",
          temperature: 36.6,
          symptoms: [],
          note: "등원 시 특별한 증상 없이 컨디션이 좋았습니다.",
        },
        {
          time: "11:40",
          temperature: 37.2,
          symptoms: ["기침"],
          note: "활동 중 간헐적으로 기침하는 모습이 관찰되었습니다.",
        },
        {
          time: "14:20",
          temperature: 38.1,
          symptoms: ["발열", "활동량 감소"],
          note: "낮잠 이후 체온이 상승하고 평소보다 활동량이 감소했습니다.",
        },
      ],
    },
    {
      id: 2,
      date: "8월 26일",
      records: [
        {
          time: "10:20",
          temperature: 36.7,
          symptoms: [],
          note: "특이사항 없이 정상적인 활동을 보였습니다.",
        },
      ],
    },
  ];

  return (
    <Container>
      <ChildCard>
        <ChildProfile
          name={child.name}
          className={child.className}
          age={child.age}
          size="large"
        />

        <StatusBadge type="watch">
          관찰 필요
        </StatusBadge>
      </ChildCard>

      <PeriodFilter
        value={period}
        onChange={setPeriod}
      />

      <SummaryGrid>
        <SummaryCard>
          <SummaryIcon>
            <Activity size={19} />
          </SummaryIcon>

          <SummaryLabel>최근 체온</SummaryLabel>
          <SummaryValue>38.1℃</SummaryValue>
        </SummaryCard>

        <SummaryCard>
          <SummaryIcon>
            <TrendingUp size={19} />
          </SummaryIcon>

          <SummaryLabel>이번 주 평균</SummaryLabel>
          <SummaryValue>36.9℃</SummaryValue>
        </SummaryCard>
      </SummaryGrid>

      <AiSummary>
        <IconBox
          background="#FFFFFF"
          color="#65B47C"
          size={42}
        >
          <Sparkles size={20} />
        </IconBox>

        <AiContent>
          <AiLabel>AI 건강 요약</AiLabel>

          <AiTitle>
            이번 주 건강 상태를 정리했어요
          </AiTitle>

          <AiText>
            대부분 정상 체온을 유지했지만 오늘 오후
            체온이 38.1℃까지 상승했고 기침과 활동량 감소가
            함께 관찰되었습니다.
          </AiText>
        </AiContent>
      </AiSummary>

      <HistoryHeader>
        <div>
          <HistoryTitle>건강 기록</HistoryTitle>
          <HistoryDescription>
            시간별로 기록된 건강 정보를 확인해요.
          </HistoryDescription>
        </div>

        <CalendarIcon>
          <CalendarDays size={18} />
        </CalendarIcon>
      </HistoryHeader>

      <HistoryArea>
        {records.map((day) => (
          <DaySection key={day.id}>
            <DateLabel>{day.date}</DateLabel>

            {day.records.map((record, index) => (
              <HealthTimelineItem
                key={`${day.id}-${index}`}
                time={record.time}
                temperature={record.temperature}
                symptoms={record.symptoms}
                note={record.note}
              />
            ))}
          </DaySection>
        ))}
      </HistoryArea>
    </Container>
  );
}

export default HealthHistoryPage;

const Container = styled.div`
  width: 100%;
  max-width: 560px;

  margin: 0 auto;
  padding: 22px 18px 35px;
`;

const ChildCard = styled.div`
  margin-bottom: 18px;
  padding: 17px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 19px;

  background: #ffffff;

  box-shadow: 0 5px 17px rgba(83, 105, 93, 0.05);
`;

const SummaryGrid = styled.div`
  margin-top: 18px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 10px;
`;

const SummaryCard = styled.div`
  padding: 16px;

  border-radius: 17px;

  background: #ffffff;

  box-shadow: 0 4px 15px rgba(77, 100, 87, 0.05);
`;

const SummaryIcon = styled.div`
  width: 34px;
  height: 34px;

  margin-bottom: 11px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 11px;

  background: #edf8f0;
  color: #69b580;
`;

const SummaryLabel = styled.p`
  color: #9ba49e;

  font-size: 9px;
`;

const SummaryValue = styled.p`
  margin-top: 3px;

  color: #4b5650;

  font-size: 18px;
  font-weight: 700;
`;

const AiSummary = styled.div`
  margin-top: 18px;
  padding: 17px;

  display: flex;
  align-items: flex-start;

  gap: 12px;

  border: 1px solid #dceee2;
  border-radius: 19px;

  background: #eff8f2;
`;

const AiContent = styled.div`
  flex: 1;
`;

const AiLabel = styled.p`
  color: #69b580;

  font-size: 9px;
  font-weight: 700;
`;

const AiTitle = styled.h3`
  margin-top: 3px;

  color: #52685a;

  font-size: 13px;
  font-weight: 700;
`;

const AiText = styled.p`
  margin-top: 7px;

  color: #74857a;

  font-size: 10px;

  line-height: 1.65;
`;

const HistoryHeader = styled.div`
  margin-top: 28px;
  margin-bottom: 14px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HistoryTitle = styled.h2`
  color: #46504a;

  font-size: 16px;
  font-weight: 700;
`;

const HistoryDescription = styled.p`
  margin-top: 4px;

  color: #9ba39e;

  font-size: 10px;
`;

const CalendarIcon = styled.div`
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px;

  background: #edf7f0;
  color: #6db783;
`;

const HistoryArea = styled.div``;

const DaySection = styled.section`
  margin-bottom: 20px;
`;

const DateLabel = styled.p`
  margin-bottom: 10px;

  color: #66716b;

  font-size: 11px;
  font-weight: 700;
`;