import React, { useState, useEffect, FC, useCallback } from "react";
import {
  StyledContainer,
  StyledTitle,
  StyledText,
  StyledTextDate,
  StyledContainerHistory,
} from "../../styles/styles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../styles/theme";
import HistoryCard from "../organisms/HistoryCard";
import { LoveIcon, CloseIcon, LeftArrowIcon } from "../icons";
import { dbData } from "../../interfaces/types";
import { useGetData } from "@/hooks";

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
  const [sportsData, setSportsData] = useState<dbData[]>([]);
  const getData = useGetData();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      if (data) {
        setSportsData(data);
      } else {
        setSportsData([]);
      }
      setIsLoading(false);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <StyledContainerHistory>
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

          {sportsData.map((sport, index) => (
            <HistoryCard
              key={sport.id}
              isLightTheme={isLightTheme}
              sportImg={sport.imagenHistory}
              sportTitle={sport.title}
              Icon={sport.reaction === "like" ? LoveIcon : CloseIcon}
              color={isLightTheme}
            />
          ))}
        </StyledContainerHistory>
      )}
    </ThemeProvider>
  );
};

export default HistoryPage;
