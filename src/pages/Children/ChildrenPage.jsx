import { useState } from "react";
import styled from "styled-components";
import { Search, ChevronRight, Baby } from "lucide-react";

import StatusBadge from "../../components/Card/StatusBadge";

function ChildrenPage() {
  const [selectedClass, setSelectedClass] = useState("전체");
  const [keyword, setKeyword] = useState("");

  const children = [
    {
      id: 1,
      name: "김하윤",
      className: "휴니반",
      age: "만 4세",
      status: "danger",
      statusText: "확인 필요",
      profileColor: "#FBE7EA",
    },
    {
      id: 2,
      name: "박지호",
      className: "엔지반",
      age: "만 2세",
      status: "watch",
      statusText: "관찰 필요",
      profileColor: "#EAF3FF",
    },
    {
      id: 3,
      name: "이서윤",
      className: "휴니반",
      age: "만 5세",
      status: "normal",
      statusText: "좋아요",
      profileColor: "#E9F6EC",
    },
    {
      id: 4,
      name: "최도윤",
      className: "소니언반",
      age: "만 1세",
      status: "normal",
      statusText: "좋아요",
      profileColor: "#FFF1D9",
    },
    {
      id: 5,
      name: "정유나",
      className: "엔지반",
      age: "만 2세",
      status: "normal",
      statusText: "좋아요",
      profileColor: "#F1EAFE",
    },
  ];

  const classList = ["전체", "휴니반", "엔지반", "소니언반"];

  const filteredChildren = children.filter((child) => {
    const classMatch =
      selectedClass === "전체" || child.className === selectedClass;

    const nameMatch = child.name.includes(keyword);

    return classMatch && nameMatch;
  });

  return (
    <Container>
      <TopArea>
        <TitleArea>
          <SmallTitle>우리 반 아이들</SmallTitle>

          <MainTitle>
            총 <Highlight>{children.length}명</Highlight>의 아이가 있어요
          </MainTitle>
        </TitleArea>

        <BabyIconBox>
          <Baby size={25} />
        </BabyIconBox>
      </TopArea>

      <SearchBox>
        <Search size={19} />

        <SearchInput
          type="text"
          placeholder="아이 이름을 검색해주세요"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </SearchBox>

      <ClassFilter>
        {classList.map((className) => (
          <ClassButton
            key={className}
            $active={selectedClass === className}
            onClick={() => setSelectedClass(className)}
          >
            {className}
          </ClassButton>
        ))}
      </ClassFilter>

      <ListHeader>
        <ListTitle>아동 목록</ListTitle>

        <ListCount>{filteredChildren.length}명</ListCount>
      </ListHeader>

      <ChildrenList>
        {filteredChildren.map((child) => (
          <ChildCard key={child.id}>
            <Profile $background={child.profileColor}>
              {child.name.slice(0, 1)}
            </Profile>

            <ChildInfo>
              <NameArea>
                <ChildName>{child.name}</ChildName>

                <StatusBadge type={child.status}>
                  {child.statusText}
                </StatusBadge>
              </NameArea>

              <ChildDetail>
                {child.className} · {child.age}
              </ChildDetail>
            </ChildInfo>

            <ChevronRight size={20} color="#A8B0AB" />
          </ChildCard>
        ))}
      </ChildrenList>

      {filteredChildren.length === 0 && (
        <EmptyArea>
          <EmptyIcon>
            <Baby size={28} />
          </EmptyIcon>

          <EmptyTitle>검색 결과가 없어요</EmptyTitle>
          <EmptyText>다른 이름이나 반을 선택해보세요.</EmptyText>
        </EmptyArea>
      )}
    </Container>
  );
}

export default ChildrenPage;

const Container = styled.div`
  width: 100%;
  max-width: 560px;

  margin: 0 auto;
  padding: 24px 18px 30px;
`;

const TopArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 22px;
`;

const TitleArea = styled.div``;

const SmallTitle = styled.p`
  margin-bottom: 5px;

  color: #7cb58c;

  font-size: 12px;
  font-weight: 700;
`;

const MainTitle = styled.h2`
  color: #46504a;

  font-size: 20px;
  font-weight: 700;

  letter-spacing: -0.4px;
`;

const Highlight = styled.span`
  color: #63b77d;
`;

const BabyIconBox = styled.div`
  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 16px;

  background: #eaf6ee;
  color: #69b680;
`;

const SearchBox = styled.div`
  width: 100%;
  height: 52px;

  display: flex;
  align-items: center;

  gap: 10px;

  padding: 0 16px;

  border: 1px solid #e5ebe7;
  border-radius: 16px;

  background: #ffffff;

  color: #9ca59f;

  box-shadow: 0 4px 14px rgba(75, 98, 85, 0.04);

  &:focus-within {
    border-color: #77c38e;

    box-shadow: 0 0 0 4px rgba(119, 195, 142, 0.09);
  }
`;

const SearchInput = styled.input`
  flex: 1;

  border: none;
  outline: none;

  background: transparent;

  color: #505a54;

  font-size: 13px;

  &::placeholder {
    color: #aab2ad;
  }
`;

const ClassFilter = styled.div`
  margin-top: 18px;

  display: flex;

  gap: 8px;

  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ClassButton = styled.button`
  min-width: fit-content;

  padding: 9px 14px;

  border: none;
  border-radius: 20px;

  background: ${({ $active }) => ($active ? "#73C391" : "#FFFFFF")};
  color: ${({ $active }) => ($active ? "#FFFFFF" : "#89938D")};

  box-shadow: ${({ $active }) =>
    $active ? "0 5px 12px rgba(99, 183, 125, 0.18)" : "none"};

  font-size: 12px;
  font-weight: 600;

  cursor: pointer;
`;

const ListHeader = styled.div`
  margin-top: 28px;
  margin-bottom: 13px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ListTitle = styled.h3`
  color: #4a544f;

  font-size: 16px;
  font-weight: 700;
`;

const ListCount = styled.span`
  color: #99a29c;

  font-size: 12px;
`;

const ChildrenList = styled.div`
  display: flex;
  flex-direction: column;

  gap: 11px;
`;

const ChildCard = styled.div`
  width: 100%;

  padding: 16px;

  display: flex;
  align-items: center;

  gap: 13px;

  border-radius: 18px;

  background: #ffffff;

  box-shadow: 0 5px 17px rgba(83, 105, 93, 0.05);

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    transform: translateY(-1px);

    box-shadow: 0 7px 20px rgba(83, 105, 93, 0.08);
  }
`;

const Profile = styled.div`
  width: 48px;
  height: 48px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: ${({ $background }) => $background};

  color: #66726b;

  font-size: 15px;
  font-weight: 700;
`;

const ChildInfo = styled.div`
  flex: 1;
`;

const NameArea = styled.div`
  display: flex;
  align-items: center;

  gap: 8px;
`;

const ChildName = styled.span`
  color: #46504b;

  font-size: 14px;
  font-weight: 700;
`;

const ChildDetail = styled.p`
  margin-top: 5px;

  color: #9ba39e;

  font-size: 11px;
`;

const EmptyArea = styled.div`
  padding: 65px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`;

const EmptyIcon = styled.div`
  width: 58px;
  height: 58px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 14px;

  border-radius: 20px;

  background: #edf7f0;
  color: #77bd8c;
`;

const EmptyTitle = styled.h3`
  color: #606a64;

  font-size: 14px;
  font-weight: 700;
`;

const EmptyText = styled.p`
  margin-top: 5px;

  color: #a0a9a3;

  font-size: 11px;
`;