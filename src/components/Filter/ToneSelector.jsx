import styled from "styled-components";

function ToneSelector({ value, onChange }) {
  const tones = [
    { label: "친근하게", value: "friendly" },
    { label: "간결하게", value: "simple" },
    { label: "자세하게", value: "detail" },
  ];

  return (
    <Container>
      {tones.map((tone) => (
        <ToneButton
          key={tone.value}
          type="button"
          $active={value === tone.value}
          onClick={() => onChange(tone.value)}
        >
          {tone.label}
        </ToneButton>
      ))}
    </Container>
  );
}

export default ToneSelector;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 8px;
`;

const ToneButton = styled.button`
  height: 40px;

  border: 1px solid
    ${({ $active }) => ($active ? "#73c391" : "#e5ebe7")};

  border-radius: 13px;

  background: ${({ $active }) =>
    $active ? "#edf8f0" : "#ffffff"};

  color: ${({ $active }) =>
    $active ? "#5eaf78" : "#89938d"};

  font-size: 11px;
  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;
`;