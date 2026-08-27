import styled from "styled-components";

function TextInput({
  value,
  onChange,
  placeholder,
  maxLength,
  rows,
}) {
  return (
    <Textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      rows={rows}
    />
  );
}

export default TextInput;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 120px;

  padding: 14px;

  border: 1px solid #e4eae6;
  border-radius: 15px;

  outline: none;
  resize: none;

  background: #fafcfb;

  color: #59645d;

  font-size: 12px;
  line-height: 1.6;

  transition: 0.2s;

  &::placeholder {
    color: #aab3ad;
  }

  &:focus {
    border-color: #73c391;

    box-shadow: 0 0 0 4px rgba(115, 195, 145, 0.08);

    background: #ffffff;
  }
`;