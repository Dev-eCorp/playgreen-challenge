import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { StyledContainer, ThemeToggleButton } from "../styles/styles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import BottomNavigation from "../components/BottomNavigation";

import HistoryPage from "../components/HistoryPage";

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [showHistory, setShowHistory] = useState(false);
  const [activeIcon, setActiveIcon] = useState(0);

  useEffect(() => {
    const token = Cookies.get("auth");
    if (!token) {
      router.replace("/");
    } else {
      setIsLoading(false);
    }
  }, [router]);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <StyledContainer>
          {!showHistory && (
            <ThemeToggleButton
              onClick={() => setIsLightTheme(!isLightTheme)}
              isLightTheme={isLightTheme}
            />
          )}
          {showHistory && (
            <>
              <HistoryPage
                setShowHistory={setShowHistory}
                setActiveIcon={setActiveIcon}
                isLightTheme={isLightTheme}
              />
            </>
          )}
          <BottomNavigation
            isLightTheme={isLightTheme}
            onClockIconClick={() => {
              setShowHistory(true);
              setActiveIcon(1);
            }}
            onHomeIconClick={() => {
              setShowHistory(false);
              setActiveIcon(0);
            }}
            activeIcon={activeIcon}
          />
        </StyledContainer>
      )}
    </ThemeProvider>
  );
}
