import styled from "styled-components";

const ThemeToggleButton = styled.button<{ isLightTheme: boolean }>`
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

  @media (max-height: 580px) {
    width: 42px;
    height: 42px;
    top: 1.2em;
    left: 1.2em;
  }
`;

export default ThemeToggleButton;
