import styled from "styled-components";

function PeriodFilter({ value, onChange }) {
  const periods = [
    { label: "7일", value: "7days" },
    { label: "1개월", value: "1month" },
    { label: "3개월", value: "3months" },
  ];

  return (
    <Container>
      {periods.map((period) => (
        <Button
          key={period.value}
          type="button"
          $active={value === period.value}
          onClick={() => onChange(period.value)}
        >
          {period.label}
        </Button>
      ))}
    </Container>
  );
}

export default PeriodFilter;

const Container = styled.div`
  display: flex;
  gap: 7px;

  padding: 4px;

  border-radius: 14px;

  background: #f1f5f2;
`;

const Button = styled.button`
  flex: 1;

  padding: 8px 12px;

  border: none;
  border-radius: 11px;

  background: ${({ $active }) =>
    $active ? "#ffffff" : "transparent"};

  color: ${({ $active }) =>
    $active ? "#5eaf78" : "#929c96"};

  box-shadow: ${({ $active }) =>
    $active
      ? "0 3px 10px rgba(72, 98, 83, 0.08)"
      : "none"};

  font-size: 11px;
  font-weight: ${({ $active }) =>
    $active ? "700" : "500"};

  cursor: pointer;
`;