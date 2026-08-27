import styled from "styled-components";
import {
  Thermometer,
  HeartPulse,
  FileText,
} from "lucide-react";

function HealthTimelineItem({
  time,
  temperature,
  symptoms = [],
  note,
}) {
  return (
    <Container>
      <TimeArea>
        <Time>{time}</Time>
        <Line />
      </TimeArea>

      <Card>
        {temperature && (
          <Row>
            <IconBox $background="#FCEDEF" $color="#D97A85">
              <Thermometer size={16} />
            </IconBox>

            <div>
              <Label>체온</Label>
              <Value>{temperature}℃</Value>
            </div>
          </Row>
        )}

        {symptoms.length > 0 && (
          <Row>
            <IconBox $background="#FFF4DF" $color="#D69A47">
              <HeartPulse size={16} />
            </IconBox>

            <div>
              <Label>관찰 증상</Label>

              <SymptomArea>
                {symptoms.map((symptom) => (
                  <Symptom key={symptom}>
                    {symptom}
                  </Symptom>
                ))}
              </SymptomArea>
            </div>
          </Row>
        )}

        {note && (
          <Row>
            <IconBox $background="#EAF4FF" $color="#6E91CB">
              <FileText size={16} />
            </IconBox>

            <div>
              <Label>관찰 기록</Label>
              <Note>{note}</Note>
            </div>
          </Row>
        )}
      </Card>
    </Container>
  );
}

export default HealthTimelineItem;

const Container = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;

  gap: 10px;
`;

const TimeArea = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Time = styled.span`
  padding-top: 5px;

  color: #76817b;

  font-size: 10px;
  font-weight: 700;
`;

const Line = styled.div`
  width: 1px;
  flex: 1;

  margin-top: 8px;

  background: #e2e9e4;
`;

const Card = styled.div`
  margin-bottom: 12px;
  padding: 15px;

  display: flex;
  flex-direction: column;

  gap: 13px;

  border-radius: 17px;

  background: #ffffff;

  box-shadow: 0 4px 15px rgba(77, 100, 87, 0.05);
`;

const Row = styled.div`
  display: flex;
  align-items: flex-start;

  gap: 10px;
`;

const IconBox = styled.div`
  width: 32px;
  height: 32px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;

  background: ${({ $background }) => $background};
  color: ${({ $color }) => $color};
`;

const Label = styled.p`
  color: #9ba39e;

  font-size: 9px;
`;

const Value = styled.p`
  margin-top: 2px;

  color: #4e5953;

  font-size: 13px;
  font-weight: 700;
`;

const SymptomArea = styled.div`
  margin-top: 5px;

  display: flex;
  flex-wrap: wrap;

  gap: 5px;
`;

const Symptom = styled.span`
  padding: 4px 7px;

  border-radius: 8px;

  background: #fff6e7;

  color: #c98f3d;

  font-size: 9px;
  font-weight: 600;
`;

const Note = styled.p`
  margin-top: 4px;

  color: #606b64;

  font-size: 10px;

  line-height: 1.6;
`;