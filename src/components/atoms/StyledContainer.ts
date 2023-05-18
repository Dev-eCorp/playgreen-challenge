import styled from "styled-components";

const StyledContainer = styled.div`
  font-family: "DM Sans";
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: 1px;
  padding: 0px 16px;
`;

export default StyledContainer;
