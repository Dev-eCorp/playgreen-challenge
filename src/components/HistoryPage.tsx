import React, { useState, useEffect, FC } from "react";
import {
  StyledContainer,
  StyledTitle,
  StyledText,
  StyledTextDate,
} from "../styles/styles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import HistoryCard from "../components/HistoryCard";
import { LoveIcon, CloseIcon, LeftArrowIcon } from "../components/icons";

type Props = {
  setShowHistory: (show: boolean) => void;
  setActiveIcon: (iconId: number) => void;
  isLightTheme: boolean;
};

const HistoryPage: FC<Props> = ({
  setShowHistory,
  setActiveIcon,
  isLightTheme,
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </StyledText>
          <StyledTextDate>17 december</StyledTextDate>

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
        </StyledContainer>
      )}
    </ThemeProvider>
  );
};

export default HistoryPage;
