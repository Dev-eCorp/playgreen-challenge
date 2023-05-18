import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.inputBackground};
  border: 1px solid ${(props) => props.theme.inputBorder};
  border-radius: 18px;
  padding: 14px 20px 10px;
  margin: 10px 0;
  outline: none;
`;

export default StyledInput;
