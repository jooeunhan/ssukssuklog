import styled from "styled-components";

function CommonButton({
  children,
  onClick,
  type = "button",
  disabled = false,
}) {
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}

export default CommonButton;

const Button = styled.button`
  width: 100%;
  height: 54px;

  border: none;
  border-radius: 16px;

  background: #73c391;
  color: #ffffff;

  font-size: 14px;
  font-weight: 700;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: #63b682;
  }

  &:disabled {
    background: #d9e5dd;
    color: #ffffff;

    cursor: default;
  }
`;