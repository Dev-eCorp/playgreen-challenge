import styled from "styled-components";

const StyledTextDate = styled.p`
  font-family: "Epilogue";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => props.theme.text};
  opacity: 0.8;
  text-align: center;
`;

export default StyledTextDate;
