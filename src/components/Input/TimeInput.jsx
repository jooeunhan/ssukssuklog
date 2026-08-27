import { useState } from "react";
import styled from "styled-components";

import {
    Clock3,
    ChevronDown,
    Check,
} from "lucide-react";

function TimeInput({ value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);

    const [hour, minute] = value
        ? value.split(":")
        : ["", ""];

    const hours = Array.from(
        { length: 24 },
        (_, i) => String(i).padStart(2, "0")
    );

    const minutes = ["00", "10", "20", "30", "40", "50"];

    const handleHour = (selectedHour) => {
        onChange(`${selectedHour}:${minute || "00"}`);
    };

    const handleMinute = (selectedMinute) => {
        onChange(`${hour || "00"}:${selectedMinute}`);
    };

    const handleComplete = () => {
        if (!hour || !minute) {
            alert("시간과 분을 모두 선택해주세요.");
            return;
        }

        setIsOpen(false);
    };

    return (
        <Wrapper>
            <TimeButton
                type="button"
                $open={isOpen}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <Left>
                    <ClockBox>
                        <Clock3 size={18} />
                    </ClockBox>

                    {value ? (
                        <SelectedTime>
                            <Period>
                                {Number(hour) < 12 ? "오전" : "오후"}
                            </Period>

                            <TimeText>
                                {Number(hour) > 12
                                    ? String(Number(hour) - 12).padStart(2, "0")
                                    : hour === "00"
                                        ? "12"
                                        : hour}
                                :{minute}
                            </TimeText>
                        </SelectedTime>
                    ) : (
                        <Placeholder>관찰 시간을 선택해주세요</Placeholder>
                    )}
                </Left>

                <Chevron $open={isOpen}>
                    <ChevronDown size={18} />
                </Chevron>
            </TimeButton>

            {isOpen && (
                <Dropdown>
                    <DropdownHeader>
                        <div>
                            <DropdownLabel>기록 시간</DropdownLabel>
                            <DropdownTitle>
                                관찰한 시간을 선택해주세요
                            </DropdownTitle>
                        </div>

                        {value && (
                            <CurrentValue>
                                {hour}:{minute}
                            </CurrentValue>
                        )}
                    </DropdownHeader>

                    <PickerArea>
                        <PickerColumn>
                            <PickerLabel>시</PickerLabel>

                            <ScrollArea>
                                {hours.map((item) => (
                                    <TimeOption
                                        type="button"
                                        key={item}
                                        $selected={hour === item}
                                        onClick={() => handleHour(item)}
                                    >
                                        {item}

                                        {hour === item && (
                                            <Check size={13} />
                                        )}
                                    </TimeOption>
                                ))}
                            </ScrollArea>
                        </PickerColumn>

                        <Colon>:</Colon>

                        <PickerColumn>
                            <PickerLabel>분</PickerLabel>

                            <ScrollArea>
                                {minutes.map((item) => (
                                    <TimeOption
                                        type="button"
                                        key={item}
                                        $selected={minute === item}
                                        onClick={() => handleMinute(item)}
                                    >
                                        {item}

                                        {minute === item && (
                                            <Check size={13} />
                                        )}
                                    </TimeOption>
                                ))}
                            </ScrollArea>
                        </PickerColumn>
                    </PickerArea>

                    <CompleteButton
                        type="button"
                        onClick={handleComplete}
                    >
                        선택 완료
                    </CompleteButton>
                </Dropdown>
            )}
        </Wrapper>
    );
}

export default TimeInput;

const Wrapper = styled.div`
  position: relative;

  width: 100%;
`;

const TimeButton = styled.button`
  width: 100%;
  height: 58px;

  padding: 0 14px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid
    ${({ $open }) => ($open ? "#83C99A" : "#E4EAE6")};

  border-radius: 16px;

  background: #ffffff;

  box-shadow: ${({ $open }) =>
        $open
            ? "0 0 0 4px rgba(115, 195, 145, 0.08)"
            : "0 3px 12px rgba(81, 103, 91, 0.04)"};

  cursor: pointer;

  transition: 0.2s;
`;

const Left = styled.div`
  display: flex;
  align-items: center;

  gap: 11px;
`;

const ClockBox = styled.div`
  width: 36px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px;

  background: #edf8f0;
  color: #69b680;
`;

const Placeholder = styled.span`
  color: #a0aaa4;

  font-size: 12px;
`;

const SelectedTime = styled.div`
  display: flex;
  align-items: baseline;

  gap: 7px;
`;

const Period = styled.span`
  color: #7a8980;

  font-size: 11px;
  font-weight: 600;
`;

const TimeText = styled.strong`
  color: #48534d;

  font-size: 17px;
  font-weight: 700;

  letter-spacing: 0.3px;
`;

const Chevron = styled.div`
  display: flex;

  color: #99a49d;

  transform: rotate(
    ${({ $open }) => ($open ? "180deg" : "0deg")}
  );

  transition: 0.2s;
`;

const Dropdown = styled.div`
  position: absolute;

  top: calc(100% + 8px);
  left: 0;

  width: 100%;

  padding: 16px;

  border: 1px solid #e3eae5;
  border-radius: 18px;

  background: #ffffff;

  box-shadow: 0 14px 35px rgba(73, 100, 84, 0.13);

  z-index: 50;
`;

const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 15px;
`;

const DropdownLabel = styled.p`
  margin-bottom: 3px;

  color: #6fba86;

  font-size: 9px;
  font-weight: 700;
`;

const DropdownTitle = styled.p`
  color: #4e5953;

  font-size: 12px;
  font-weight: 700;
`;

const CurrentValue = styled.div`
  padding: 6px 10px;

  border-radius: 9px;

  background: #edf8f0;
  color: #63af79;

  font-size: 12px;
  font-weight: 700;
`;

const PickerArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 20px 1fr;

  align-items: center;

  gap: 8px;
`;

const PickerColumn = styled.div``;

const PickerLabel = styled.p`
  margin-bottom: 7px;

  color: #a0aaa4;

  font-size: 9px;
  font-weight: 600;

  text-align: center;
`;

const ScrollArea = styled.div`
  height: 150px;

  padding: 5px;

  overflow-y: auto;

  border-radius: 13px;

  background: #f8faf9;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const TimeOption = styled.button`
  width: 100%;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 5px;

  border: none;
  border-radius: 10px;

  background: ${({ $selected }) =>
        $selected ? "#E8F6EC" : "transparent"};

  color: ${({ $selected }) =>
        $selected ? "#5CAD75" : "#737E77"};

  font-size: 12px;
  font-weight: ${({ $selected }) =>
        $selected ? "700" : "500"};

  cursor: pointer;

  &:hover {
    background: #eef7f1;
  }
`;

const Colon = styled.span`
  margin-top: 17px;

  color: #8d9991;

  font-size: 20px;
  font-weight: 700;

  text-align: center;
`;

const CompleteButton = styled.button`
  width: 100%;
  height: 40px;

  margin-top: 14px;

  border: none;
  border-radius: 12px;

  background: #73c391;
  color: #ffffff;

  font-size: 11px;
  font-weight: 700;

  cursor: pointer;

  &:hover {
    background: #67b984;
  }
`;