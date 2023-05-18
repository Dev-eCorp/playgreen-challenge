import styled from "styled-components";

export const StyledContainer = styled.div`
  font-family: "DM Sans";
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: 1px;
`;

export const StyledContainerHistory = styled.div`
  font-family: "DM Sans";
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  letter-spacing: 1px;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 60px;
  padding: 0px 30px;
  margin-bottom: 100px;
`;

export const StyledButton = styled.button`
  width: 122px;
  height: 66px;
  color: #fff;
  background: linear-gradient(99deg, #236bfe 6.69%, #0d4ed3 80.95%);
  box-shadow: 0px 4px 30px rgba(34, 105, 251, 0.8);
  border: none;
  border-radius: 24px;
  cursor: pointer;
  font-weight: 700;
  font-size: 18px;
`;

export const StyledInput = styled.input`
  width: 330px;
  height: 48px;
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.inputBackground};
  border: 1px solid ${(props) => props.theme.inputBorder};
  border-radius: 18px;
  padding: 14px 20px 10px;
  margin: 10px 0;
  outline: none;
`;

export const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 122.02%;
  margin: 0;
`;

export const StyledText = styled.p`
  font-family: "Epilogue";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 148.02%;
  color: ${(props) => props.theme.text};
  opacity: 0.8;
  text-align: center;
`;

export const StyledTextDate = styled.p`
  font-family: "Epilogue";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => props.theme.text};
  opacity: 0.8;
  text-align: center;
`;

export const StyledLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 122.02%;
  color: ${(props) => props.theme.text};
  text-decoration: none;
  margin-top: 8px;
  margin-bottom: 18px;
`;

// Bottom Navigation

export const ThemeToggleButton = styled.button<{ isLightTheme: boolean }>`
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 12px;
  top: 1.5em;
  left: 1.5em;
  position: absolute;
  cursor: pointer;
  background-color: ${(props) => props.theme.floatinButonBackground};
  background-image: url(${(props) => props.theme.themeImage});
  background-size: fill;
  background-repeat: no-repeat;
  background-position: center;
`;

export const BottomNav = styled.div<{ isLightTheme: boolean }>`
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

export const BottomNavItem = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 60px;
  border-radius: 18px;
  background: ${(props) =>
    props.isActive ? props.theme.bottomNavBackgroundIconColor : "transparent"};
`;

// History

export const CardHistoryContainer = styled.div<{ isLightTheme: boolean }>`
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

export const ImageContainer = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.51);
  z-index: 1;
`;

export const SportTitle = styled.p`
  position: absolute;
  left: 24px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #fefefe;
  z-index: 2;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 77px;
  height: 100%;
  flex: 1;
`;

// Home Page
export const HomePageImage = styled.img`
  width: 100vw;
  height: 600px;
  object-fit: fill;
  position: absolute;
  top: 0;
  left: 0;
  border-bottom-left-radius: 34px;
  border-bottom-right-radius: 34px;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  padding: 20px 0;
  padding-top: 160px;
`;

export const CloseIconContainer = styled.div<{ isLightTheme: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: ${(props) => (props.isLightTheme ? "#FFFFFF" : "#222243")};
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
  border-radius: 50%;
`;

export const LoveIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(125.02deg, #236bfe -17.11%, #063ba8 98.58%);
  box-shadow: 0px 10px 25px rgba(35, 107, 254, 0.2);
`;
