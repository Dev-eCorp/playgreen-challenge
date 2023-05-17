import React, { FC, useContext } from "react";
import { ThemeContext } from "styled-components";

type Props = {
  isActive: boolean;
};

const OutIcon: FC<Props> = ({ isActive }) => {
  const theme = useContext(ThemeContext);

  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.7083 4.29167L14.2396 5.76042L16.9271 8.45833H6.33334V10.5417H16.9271L14.2396 13.2292L15.7083 14.7083L20.9167 9.5L15.7083 4.29167ZM2.16668 2.20833H10.5V0.125H2.16668C1.02084 0.125 0.0833435 1.0625 0.0833435 2.20833V16.7917C0.0833435 17.9375 1.02084 18.875 2.16668 18.875H10.5V16.7917H2.16668V2.20833Z"
        fill={isActive ? theme?.bottomNavIconColor : "#777777"}
      />
    </svg>
  );
};

export default OutIcon;
