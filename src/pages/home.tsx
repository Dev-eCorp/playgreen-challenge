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
import { useSpring, animated } from "react-spring";

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [showHistory, setShowHistory] = useState(false);
  const [activeIcon, setActiveIcon] = useState(0);
  const [sportsData, setSportsData] = useState<Sport[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState<HTMLImageElement[]>(
    []
  );

  useEffect(() => {
    if (sportsData.length > 0) {
      const images = sportsData.map((sport) => {
        const img = new Image();
        img.src = sport.imagenHome;
        return img;
      });
      setPreloadedImages(images);
    }
  }, [sportsData]);

  const swipe = (direction: string) => {
    setImageStyles({
      transform: `translateX(${direction === "right" ? 600 : -600}px)`,
    });
    setTimeout(() => {
      setImageStyles({ transform: "translateX(0px)" });
      setCurrentImageIndex(
        (currentImageIndex) => (currentImageIndex + 1) % sportsData.length
      );
    }, 200);
  };

  const [imageStyles, setImageStyles] = useSpring(() => ({
    transform: "translateX(0px)",
  }));

  const onSwipeRight = () => {
    swipe("right");
  };

  const onSwipeLeft = () => {
    swipe("left");
  };

  useEffect(() => {
    fetch("/api/sports")
      .then((response) => response.json())
      .then((data) => {
        setSportsData(data);
        const images = data.map((item: any) => {
          const img = new Image();
          img.src = item.imagenHome;
          return img;
        });
        setPreloadedImages(images);
      })
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
                <div
                  style={{
                    position: "relative",
                    width: "100vw",
                    height: "500px",
                  }}
                >
                  <animated.div style={imageStyles}>
                    <HomePageImage
                      src={preloadedImages[currentImageIndex]?.src || ""}
                      alt={sportsData[currentImageIndex]?.title || ""}
                    />
                  </animated.div>
                </div>
              )}
              <HomePage
                isLightTheme={isLightTheme}
                onSwipeRight={onSwipeRight}
                onSwipeLeft={onSwipeLeft}
                currentSport={sportsData[currentImageIndex]}
              />
            </>
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
