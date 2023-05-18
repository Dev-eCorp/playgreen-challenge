import React, { useState, useEffect, FC } from "react";
import {
  IconsContainer,
  CloseIconContainer,
  LoveIconContainer,
} from "../../styles/styles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../styles/theme";
import { LoveIcon, CloseIcon } from "../icons";
import { useSaveData } from "@/hooks";
import { dbData } from "@/interfaces/types";

type Props = {
  isLightTheme: boolean;
  onSwipeRight: () => void;
  onSwipeLeft: () => void;
  currentSport: dbData;
};

const HomePage: FC<Props> = ({
  isLightTheme,
  onSwipeRight,
  onSwipeLeft,
  currentSport,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const saveData = useSaveData();

  const handleClick = async (reaction: "like" | "dislike") => {
    const sportDataToSave = { ...currentSport, reaction }; // Usar currentSport en lugar de sportData

    try {
      await saveData(sportDataToSave);
    } catch (error) {
      console.error("An error occurred while saving data: ", error);
    }
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <IconsContainer>
          <CloseIconContainer
            isLightTheme={isLightTheme}
            onClick={() => {
              onSwipeLeft();
              handleClick("dislike");
            }}
          >
            <CloseIcon color={isLightTheme} isHomePage={true} />
          </CloseIconContainer>
          <LoveIconContainer
            onClick={() => {
              onSwipeRight();
              handleClick("like");
            }}
          >
            <LoveIcon color={false} />
          </LoveIconContainer>
        </IconsContainer>
      )}
    </ThemeProvider>
  );
};

export default HomePage;
