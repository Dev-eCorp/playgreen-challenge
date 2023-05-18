import styled from "styled-components";

const CardHistoryContainer = styled.div<{ isLightTheme: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 77px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.historyCardBackground};
  position: relative;
  margin-bottom: 24px;
`;

export default CardHistoryContainer;
