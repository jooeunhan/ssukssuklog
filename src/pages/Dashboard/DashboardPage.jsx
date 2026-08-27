import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  HeartPulse,
  Baby,
  Pill,
  MessageCircleHeart,
  ClipboardPlus,
  Thermometer,
  Sparkles,
  ChevronRight,
} from "lucide-react";

import IconBox from "../../components/Box/IconBox";
import SectionHeader from "../../common/Header/SectionHeader";
import StatusBadge from "../../components/Card/StatusBadge";

function DashboardPage() {
  const navigate = useNavigate();

  return (
    <Container>

      <Content>
        <SummaryCard>
          <SummaryTop>
            <div>
              <SummaryLabel>오늘의 건강 현황</SummaryLabel>
              <SummaryTitle>
                오늘 아이들은 이렇게 지내고 있어요
              </SummaryTitle>
            </div>

            <IconBox>
              <HeartPulse size={24} />
            </IconBox>
          </SummaryTop>

          <StatusGrid>
            <StatusItem>
              <StatusNumber $color="#63B77D">15</StatusNumber>
              <StatusText>좋아요</StatusText>
            </StatusItem>

            <Divider />

            <StatusItem>
              <StatusNumber $color="#D7A83E">3</StatusNumber>
              <StatusText>관찰 필요</StatusText>
            </StatusItem>

            <Divider />

            <StatusItem>
              <StatusNumber $color="#E06F6F">1</StatusNumber>
              <StatusText>확인 필요</StatusText>
            </StatusItem>
          </StatusGrid>
        </SummaryCard>

        <Section>
          <SectionHeader title="빠른 메뉴" />

          <MenuGrid>
            <MenuCard>
              <IconBox background="#E8F6EC" color="#63B77D">
                <ClipboardPlus size={24} />
              </IconBox>

              <MenuTitle>건강 정보 입력</MenuTitle>
              <MenuDescription>
                체온과 오늘의 상태를 기록해요
              </MenuDescription>
            </MenuCard>

            <MenuCard onClick={() => navigate("/children")}>
              <IconBox background="#EEF3FF" color="#708FD0">
                <Baby size={24} />
              </IconBox>

              <MenuTitle>아동 목록</MenuTitle>
              <MenuDescription>
                아이들의 건강 상태를 확인해요
              </MenuDescription>
            </MenuCard>

            <MenuCard>
              <IconBox background="#FFF2DF" color="#D79B48">
                <Pill size={24} />
              </IconBox>

              <MenuTitle>투약 관리</MenuTitle>
              <MenuDescription>
                오늘 예정된 투약을 확인해요
              </MenuDescription>
            </MenuCard>

            <MenuCard>
              <IconBox background="#FCECEF" color="#D97787">
                <MessageCircleHeart size={24} />
              </IconBox>

              <MenuTitle>보호자 메시지</MenuTitle>
              <MenuDescription>
                오늘 기록으로 메시지를 만들어요
              </MenuDescription>
            </MenuCard>
          </MenuGrid>
        </Section>

        <Section>
          <SectionHeader title="오늘 확인해주세요" showMore />

          <AlertCard>
            <ProfileCircle $background="#FBE7EA">하</ProfileCircle>

            <AlertContent>
              <AlertTop>
                <ChildName>김하윤</ChildName>
                <StatusBadge type="danger">확인 필요</StatusBadge>
              </AlertTop>

              <ChildInfo>휴니반 · 만 4세</ChildInfo>

              <AlertReason>
                <Thermometer size={15} />
                오후 체온이 38.1℃로 기록되었어요.
              </AlertReason>
            </AlertContent>

            <ChevronRight size={19} color="#AAB3AE" />
          </AlertCard>

          <AlertCard>
            <ProfileCircle $background="#EAF3FF">지</ProfileCircle>

            <AlertContent>
              <AlertTop>
                <ChildName>박지호</ChildName>
                <StatusBadge type="watch">관찰 필요</StatusBadge>
              </AlertTop>

              <ChildInfo>엔지반 · 만 2세</ChildInfo>

              <AlertReason>
                <HeartPulse size={15} />
                오전부터 기침이 반복되어 기록되었어요.
              </AlertReason>
            </AlertContent>

            <ChevronRight size={19} color="#AAB3AE" />
          </AlertCard>
        </Section>

        <ReportCard>
          <IconBox>
            <Sparkles size={22} />
          </IconBox>

          <ReportText>
            <ReportTitle>오늘의 건강 리포트</ReportTitle>
            <ReportDescription>
              AI가 오늘 아이들의 건강 기록을 한눈에 정리했어요.
            </ReportDescription>
          </ReportText>

          <ChevronRight size={20} color="#78B38C" />
        </ReportCard>
      </Content>
    </Container>
  );
}

export default DashboardPage;

const Container = styled.div`
  min-height: 100vh;

  padding-bottom: 90px;

  background: #f7faf8;
`;

const Content = styled.main`
  width: 100%;
  max-width: 560px;

  margin: 0 auto;
  padding: 22px 18px 30px;
`;

const SummaryCard = styled.section`
  padding: 22px;

  border-radius: 24px;

  background: #ffffff;

  box-shadow: 0 8px 25px rgba(74, 102, 86, 0.07);
`;

const SummaryTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const SummaryLabel = styled.p`
  margin-bottom: 5px;

  color: #70b789;

  font-size: 12px;
  font-weight: 700;
`;

const SummaryTitle = styled.h2`
  color: #46514b;

  font-size: 17px;
  font-weight: 700;
`;

const StatusGrid = styled.div`
  margin-top: 24px;

  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;

  align-items: center;
`;

const StatusItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatusNumber = styled.strong`
  color: ${({ $color }) => $color};

  font-size: 25px;
  font-weight: 800;
`;

const StatusText = styled.span`
  margin-top: 4px;

  color: #859089;

  font-size: 12px;
  font-weight: 600;
`;

const Divider = styled.div`
  width: 1px;
  height: 34px;

  background: #edf1ee;
`;

const Section = styled.section`
  margin-top: 28px;
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 12px;
`;

const MenuCard = styled.div`
  min-height: 145px;
  padding: 18px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 9px;

  border-radius: 20px;
  background: #ffffff;

  text-align: left;

  box-shadow: 0 6px 18px rgba(80, 103, 91, 0.06);

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const MenuTitle = styled.h3`
  margin-top: 4px;

  color: #4a5550;

  font-size: 14px;
  font-weight: 700;
`;

const MenuDescription = styled.p`
  color: #9aa39e;

  font-size: 11px;

  line-height: 1.5;
`;

const AlertCard = styled.div`
  width: 100%;

  margin-bottom: 11px;
  padding: 17px;

  display: flex;
  align-items: center;
  gap: 13px;

  border-radius: 18px;
  background: #ffffff;

  box-shadow: 0 5px 17px rgba(83, 105, 93, 0.05);

  text-align: left;

  cursor: pointer;
`;

const ProfileCircle = styled.div`
  width: 47px;
  height: 47px;

  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  background: ${({ $background }) => $background};

  color: #6a756f;

  font-size: 15px;
  font-weight: 700;
`;

const AlertContent = styled.div`
  flex: 1;
`;

const AlertTop = styled.div`
  display: flex;
  align-items: center;

  gap: 7px;
`;

const ChildName = styled.span`
  color: #46504b;

  font-size: 14px;
  font-weight: 700;
`;

const ChildInfo = styled.p`
  margin-top: 3px;

  color: #9ba49f;

  font-size: 11px;
`;

const AlertReason = styled.p`
  margin-top: 8px;

  display: flex;
  align-items: center;

  gap: 5px;

  color: #6e7973;

  font-size: 11px;
`;

const ReportCard = styled.div`
  width: 100%;

  margin-top: 28px;
  padding: 18px;

  display: flex;
  align-items: center;
  gap: 13px;

  border: 1px solid #dbeee1;
  border-radius: 20px;

  background: #eff8f2;

  text-align: left;

  cursor: pointer;
`;

const ReportText = styled.div`
  flex: 1;
`;

const ReportTitle = styled.h3`
  color: #52735e;

  font-size: 14px;
  font-weight: 700;
`;

const ReportDescription = styled.p`
  margin-top: 4px;

  color: #7e9585;

  font-size: 10px;

  line-height: 1.5;
`;