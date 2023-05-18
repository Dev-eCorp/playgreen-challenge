import React, { FC } from "react";
import {
  CardHistoryContainer,
  ImageContainer,
  SportTitle,
  IconContainer,
  ImageOverlay,
} from "../../styles/styles";
import Image from "next/image";

type IconProps = {
  color: boolean;
};

type Props = {
  isLightTheme: boolean;
  sportImg: string;
  sportTitle: string;
  Icon: FC<IconProps>;
  color: boolean;
};

const HistoryCard: FC<Props> = ({
  isLightTheme,
  sportImg,
  sportTitle,
  Icon,
  color,
}) => {
  return (
    <CardHistoryContainer isLightTheme={isLightTheme}>
      <SportTitle>{sportTitle}</SportTitle>
      <ImageContainer>
        <ImageOverlay />
        <Image src={sportImg} alt={sportTitle} layout="fill" />
      </ImageContainer>
      <IconContainer>
        <Icon color={color} />
      </IconContainer>
    </CardHistoryContainer>
  );
};

export default HistoryCard;
