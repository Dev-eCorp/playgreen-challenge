import React, { FC } from "react";

type Props = {
  color: boolean;
};

const LeftArrowIcon: FC<Props> = ({ color }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_272)">
        <path
          d="M25.3125 15H4.6875"
          stroke={color ? "#232232" : "#FFFFFF"}
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.125 6.5625L4.6875 15L13.125 23.4375"
          stroke={color ? "#232232" : "#FFFFFF"}
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

export default LeftArrowIcon;
