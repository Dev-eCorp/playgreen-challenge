import React, { useState, useEffect, FC } from "react";
import {
  StyledContainer,
  StyledTitle,
  StyledText,
  StyledTextDate,
} from "../../styles/styles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../styles/theme";
import HistoryCard from "../organisms/HistoryCard";
import { LoveIcon, CloseIcon, LeftArrowIcon } from "../icons";
import { Sport } from "../../interfaces/types";

type Props = {
  setShowHistory: (show: boolean) => void;
  setActiveIcon: (iconId: number) => void;
  isLightTheme: boolean;
  sportsData: Sport[];
};

const HistoryPage: FC<Props> = ({
  setShowHistory,
  setActiveIcon,
  isLightTheme,
  sportsData,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <StyledContainer
          style={{
            alignItems: "flex-start",
            paddingLeft: "0px",
            paddingRight: "0px",
            justifyContent: "flex-start",
            marginTop: "60px",
          }}
        >
          <div
            onClick={() => {
              setShowHistory(false);
              setActiveIcon(0);
            }}
          >
            <LeftArrowIcon color={isLightTheme} />
          </div>
          <StyledTitle style={{ textAlign: "left", marginTop: "24px" }}>
            History
          </StyledTitle>
          <StyledText style={{ textAlign: "left", marginBottom: "0px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit .
          </StyledText>
          <StyledTextDate>17 december</StyledTextDate>

          {sportsData.slice(0, 4).map((sport, index) => (
            <HistoryCard
              key={sport.idSport}
              isLightTheme={isLightTheme}
              sportImg={sport.strSportThumb}
              sportTitle={sport.strSport}
              Icon={index % 2 === 0 ? LoveIcon : CloseIcon}
              color={isLightTheme}
            />
          ))}
        </StyledContainer>
      )}
    </ThemeProvider>
  );
};

export default HistoryPage;
