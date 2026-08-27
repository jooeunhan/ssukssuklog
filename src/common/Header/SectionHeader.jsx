import styled from "styled-components";
import { ChevronRight } from "lucide-react";

function SectionHeader({ title, showMore = false, onMoreClick }) {
  return (
    <Container>
      <Title>{title}</Title>

      {showMore && (
        <MoreButton onClick={onMoreClick}>
          전체 보기
          <ChevronRight size={15} />
        </MoreButton>
      )}
    </Container>
  );
}

export default SectionHeader;

const Container = styled.div`
  margin-bottom: 14px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  color: #46504a;

  font-size: 17px;
  font-weight: 700;
`;

const MoreButton = styled.button`
  display: flex;
  align-items: center;

  gap: 2px;

  border: none;

  background: transparent;
  color: #98a19c;

  font-size: 12px;

  cursor: pointer;
`;