import styled from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: 16px;

  background: #73c391;

  color: #ffffff;

  font-size: 15px;
  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: #63b682;
  }
`;

const CommonButton = ({ children, onClick, ...props }) => (
  <Button onClick={onClick} {...props}>
    {children}
  </Button>
);

export default CommonButton;