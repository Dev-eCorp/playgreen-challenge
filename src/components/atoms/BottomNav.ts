import styled from "styled-components";

const BottomNav = styled.div<{ isLightTheme: boolean }>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 90%;
  height: 80px;
  left: auto;
  margin-bottom: 24px;
  border-radius: 24px;
  background-color: ${(props) => props.theme.bottomNavBackground};
`;

export default BottomNav;
