import styled from "styled-components";

export const StyledContainer = styled.div`
  font-family: "DM Sans";
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 30px;
  padding-right: 30px;
  letter-spacing: 1px;
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
