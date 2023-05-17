import React, { FC, useContext } from "react";
import { ThemeContext } from "styled-components";
import { isActive } from "../../interfaces/types";

const HomeIcon: FC<isActive> = ({ isActive }) => {
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
        d="M18.3637 8.12707L18.3636 8.12697L10.5505 1.02391C10.2635 0.761112 9.88849 0.615354 9.49936 0.615372C9.11024 0.61539 8.73524 0.761183 8.44829 1.02401L0.63636 8.12697C0.475451 8.27355 0.34687 8.45206 0.258823 8.65112C0.170776 8.85018 0.125199 9.0654 0.125 9.28306V18.3125C0.125474 18.7268 0.290246 19.1239 0.583169 19.4168C0.876092 19.7098 1.27324 19.8745 1.6875 19.875H17.3125C17.7268 19.8745 18.1239 19.7098 18.4168 19.4168C18.7098 19.1239 18.8745 18.7268 18.875 18.3125V9.28311C18.8748 9.06547 18.8292 8.85026 18.7412 8.65121C18.6532 8.45216 18.5246 8.27365 18.3637 8.12707Z"
        fill={isActive ? theme?.bottomNavIconColor : "#777777"}
      />
    </svg>
  );
};

export default HomeIcon;
