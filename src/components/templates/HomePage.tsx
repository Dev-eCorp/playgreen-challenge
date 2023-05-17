import React, { useState, useEffect, FC } from "react";
import {
  IconsContainer,
  CloseIconContainer,
  LoveIconContainer,
} from "../../styles/styles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../styles/theme";
import { LoveIcon, CloseIcon } from "../icons";

type Props = {
  isLightTheme: boolean;
  onSwipeRight: () => void;
  onSwipeLeft: () => void;
};

const HomePage: FC<Props> = ({ isLightTheme, onSwipeRight, onSwipeLeft }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <IconsContainer>
          <CloseIconContainer isLightTheme={isLightTheme} onClick={onSwipeLeft}>
            <CloseIcon color={isLightTheme} isHomePage={true} />
          </CloseIconContainer>
          <LoveIconContainer onClick={onSwipeRight}>
            <LoveIcon color={false} />
          </LoveIconContainer>
        </IconsContainer>
      )}
    </ThemeProvider>
  );
};

export default HomePage;
