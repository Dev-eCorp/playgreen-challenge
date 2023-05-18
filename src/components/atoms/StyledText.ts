import styled from "styled-components";

const StyledText = styled.p`
  font-family: "Epilogue";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 148.02%;
  color: ${(props) => props.theme.text};
  opacity: 0.8;
  text-align: center;
`;

export default StyledText;
