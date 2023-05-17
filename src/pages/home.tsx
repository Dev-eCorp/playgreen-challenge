import React, { useState, useEffect } from "react";
import { StyledContainer, ThemeToggleButton } from "../styles/styles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import BottomNavigation from "../components/BottomNavigation";
import HistoryCard from "../components/HistoryCard";
import { LoveIcon, CloseIcon } from "../components/icons";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLightTheme, setIsLightTheme] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <StyledContainer>
          <ThemeToggleButton
            onClick={() => setIsLightTheme(!isLightTheme)}
            isLightTheme={isLightTheme}
          />
          <HistoryCard
            isLightTheme={isLightTheme}
            sportImg="https://upload.wikimedia.org/wikipedia/commons/a/ad/Football_in_Bloomington%2C_Indiana%2C_1996.jpg"
            sportTitle="Football"
            Icon={LoveIcon}
            color={isLightTheme}
          />
          <HistoryCard
            isLightTheme={isLightTheme}
            sportImg="https://upload.wikimedia.org/wikipedia/commons/a/ad/Football_in_Bloomington%2C_Indiana%2C_1996.jpg"
            sportTitle="Football"
            Icon={CloseIcon}
            color={true}
          />
          <BottomNavigation isLightTheme={isLightTheme} />
        </StyledContainer>
      )}
    </ThemeProvider>
  );
}
