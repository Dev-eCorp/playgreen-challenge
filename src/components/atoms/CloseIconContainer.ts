import styled from "styled-components";

const CloseIconContainer = styled.div<{ isLightTheme: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: ${(props) => (props.isLightTheme ? "#FFFFFF" : "#222243")};
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
  border-radius: 50%;
`;

export default CloseIconContainer;
