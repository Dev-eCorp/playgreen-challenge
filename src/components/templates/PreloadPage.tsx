import React, { FC } from "react";
import { ClimbingBoxLoader, RingLoader } from "react-spinners";
import styled from "styled-components";
import { lightTheme, darkTheme } from "../../styles/theme";

const LoaderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface PreloadPageProps {
  isLightTheme: boolean;
}

const PreloadPage: FC<PreloadPageProps> = ({ isLightTheme }) => {
  const theme = isLightTheme ? lightTheme : darkTheme;

  return (
    <LoaderWrapper style={{ backgroundColor: theme.body }}>
      <RingLoader color={theme.text} loading={true} size={150} />
    </LoaderWrapper>
  );
};

export default PreloadPage;
