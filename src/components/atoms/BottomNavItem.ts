import styled from "styled-components";

const BottomNavItem = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 60px;
  border-radius: 18px;
  background: ${(props) =>
    props.isActive ? props.theme.bottomNavBackgroundIconColor : "transparent"};
`;

export default BottomNavItem;
