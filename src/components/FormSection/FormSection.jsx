import styled from "styled-components";

function FormSection({ step, title, description, children }) {
  return (
    <Container>
      <Header>
        {step && <Step>{step}</Step>}

        <div>
          <Title>{title}</Title>

          {description && (
            <Description>{description}</Description>
          )}
        </div>
      </Header>

      {children}
    </Container>
  );
}

export default FormSection;

const Container = styled.section`
  margin-top: 18px;
  padding: 21px;

  border-radius: 21px;

  background: #ffffff;

  box-shadow: 0 5px 18px rgba(79, 103, 89, 0.05);
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;

  gap: 11px;

  margin-bottom: 18px;
`;

const Step = styled.div`
  width: 27px;
  height: 27px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 9px;

  background: #e7f5eb;
  color: #65b57d;

  font-size: 12px;
  font-weight: 800;
`;

const Title = styled.h3`
  color: #4a544f;

  font-size: 14px;
  font-weight: 700;
`;

const Description = styled.p`
  margin-top: 4px;

  color: #9aa39e;

  font-size: 10px;
`;