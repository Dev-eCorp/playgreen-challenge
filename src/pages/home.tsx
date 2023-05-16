import React, { useState, useEffect } from "react";
import { StyledContainer, ThemeToggleButton } from "../styles/styles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import BottomNavigation from "../components/BottomNavigation";

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
          <BottomNavigation isLightTheme={isLightTheme} />
        </StyledContainer>
      )}
    </ThemeProvider>
  );
}
