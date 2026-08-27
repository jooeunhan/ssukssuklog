import { useState } from "react";
import styled from "styled-components";
import { Baby, Check, ChevronDown } from "lucide-react";

function ChildSelect({ childrenList, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedChild = childrenList.find(
    (child) => child.id === Number(value)
  );

  const handleSelect = (child) => {
    onChange(String(child.id));
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <SelectButton
        type="button"
        $open={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <LeftArea>
          <IconBox>
            <Baby size={18} />
          </IconBox>

          {selectedChild ? (
            <SelectedTextArea>
              <SelectedName>{selectedChild.name}</SelectedName>

              <SelectedInfo>
                {selectedChild.className} · {selectedChild.age}
              </SelectedInfo>
            </SelectedTextArea>
          ) : (
            <Placeholder>아동을 선택해주세요</Placeholder>
          )}
        </LeftArea>

        <ChevronIcon $open={isOpen}>
          <ChevronDown size={18} />
        </ChevronIcon>
      </SelectButton>

      {isOpen && (
        <Dropdown>
          {childrenList.map((child) => {
            const selected = Number(value) === child.id;

            return (
              <Option
                type="button"
                key={child.id}
                $selected={selected}
                onClick={() => handleSelect(child)}
              >
                <Profile>{child.name.slice(0, 1)}</Profile>

                <OptionInfo>
                  <OptionName>{child.name}</OptionName>

                  <OptionDetail>
                    {child.className} · {child.age}
                  </OptionDetail>
                </OptionInfo>

                {selected && (
                  <CheckIcon>
                    <Check size={14} />
                  </CheckIcon>
                )}
              </Option>
            );
          })}
        </Dropdown>
      )}
    </Wrapper>
  );
}

export default ChildSelect;

const Wrapper = styled.div`
  position: relative;

  width: 100%;
`;

const SelectButton = styled.button`
  width: 100%;
  min-height: 58px;

  padding: 9px 14px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid
    ${({ $open }) => ($open ? "#83C99A" : "#E4EAE6")};

  border-radius: 16px;

  background: #ffffff;

  box-shadow: ${({ $open }) =>
    $open
      ? "0 0 0 4px rgba(115, 195, 145, 0.09)"
      : "0 3px 12px rgba(81, 103, 91, 0.04)"};

  cursor: pointer;

  transition: 0.2s;
`;

const LeftArea = styled.div`
  display: flex;
  align-items: center;

  gap: 11px;
`;

const IconBox = styled.div`
  width: 36px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  border-radius: 12px;

  background: #edf8f0;
  color: #69b680;
`;

const Placeholder = styled.span`
  color: #a0aaa4;

  font-size: 12px;
  font-weight: 500;
`;

const SelectedTextArea = styled.div`
  text-align: left;
`;

const SelectedName = styled.p`
  color: #4c5751;

  font-size: 13px;
  font-weight: 700;
`;

const SelectedInfo = styled.p`
  margin-top: 3px;

  color: #98a29c;

  font-size: 10px;
`;

const ChevronIcon = styled.div`
  display: flex;

  color: #99a49d;

  transform: rotate(${({ $open }) => ($open ? "180deg" : "0deg")});

  transition: 0.2s;
`;

const Dropdown = styled.div`
  position: absolute;

  top: calc(100% + 8px);
  left: 0;

  width: 100%;

  padding: 7px;

  border: 1px solid #e3eae5;
  border-radius: 17px;

  background: #ffffff;

  box-shadow: 0 12px 30px rgba(73, 100, 84, 0.12);

  z-index: 30;
`;

const Option = styled.button`
  width: 100%;

  padding: 10px 11px;

  display: flex;
  align-items: center;

  gap: 10px;

  border: none;
  border-radius: 12px;

  background: ${({ $selected }) =>
    $selected ? "#F0F8F2" : "#FFFFFF"};

  text-align: left;

  cursor: pointer;

  transition: 0.15s;

  &:hover {
    background: #f5faf6;
  }
`;

const Profile = styled.div`
  width: 35px;
  height: 35px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #e6f4ea;

  color: #69ae7d;

  font-size: 12px;
  font-weight: 700;
`;

const OptionInfo = styled.div`
  flex: 1;
`;

const OptionName = styled.p`
  color: #4e5953;

  font-size: 12px;
  font-weight: 700;
`;

const OptionDetail = styled.p`
  margin-top: 3px;

  color: #99a39d;

  font-size: 10px;
`;

const CheckIcon = styled.div`
  width: 24px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #73c391;
  color: #ffffff;
`;