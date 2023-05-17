import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import {
  StyledContainer,
  ThemeToggleButton,
  HomePageImage,
} from "../styles/styles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import BottomNavigation from "../components/organisms/BottomNavigation";

import HistoryPage from "../components/templates/HistoryPage";
import HomePage from "../components/templates/HomePage";
import { Sport } from "../interfaces/types";

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [showHistory, setShowHistory] = useState(false);
  const [activeIcon, setActiveIcon] = useState(0);
  const [sportsData, setSportsData] = useState<Sport[]>([]);

  useEffect(() => {
    fetch("https://www.thesportsdb.com/api/v1/json/60130162/all_sports.php")
      .then((response) => response.json())
      .then((data) => setSportsData(data.sports))
      .catch((error) => console.error(error));
  }, []);

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
        <StyledContainer style={{ position: "relative" }}>
          {!showHistory && (
            <>
              <ThemeToggleButton
                onClick={() => setIsLightTheme(!isLightTheme)}
                isLightTheme={isLightTheme}
                style={{ zIndex: 2 }}
              />
              {sportsData.length > 0 && (
                <HomePageImage
                  src={sportsData[0].strSportThumb}
                  alt={sportsData[0].strSport}
                />
              )}
              <HomePage isLightTheme={isLightTheme} />
            </>
          )}
          {showHistory && (
            <>
              <HistoryPage
                setShowHistory={setShowHistory}
                setActiveIcon={setActiveIcon}
                isLightTheme={isLightTheme}
                sportsData={sportsData}
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
