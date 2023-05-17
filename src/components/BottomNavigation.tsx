import React, { useState, FC } from "react";
import { useRouter } from "next/router";
import { BottomNav, BottomNavItem } from "../styles/styles";
import { HomeIcon, OutIcon, ClockIcon } from "./icons/index";
import useLogout from "../hooks/useLogout";

type Props = {
  isLightTheme: boolean;
};

type NavItem = {
  icon: React.FC<{ isActive: boolean }>;
  id: number;
  onClick?: () => void;
};

const BottomNavigation: FC<Props> = ({ isLightTheme }) => {
  const [activeItem, setActiveItem] = useState(0);
  const logout = useLogout();

  const navItems: NavItem[] = [
    { icon: HomeIcon, id: 0 },
    { icon: ClockIcon, id: 1 },
    { icon: OutIcon, id: 2, onClick: logout },
  ];

  return (
    <BottomNav isLightTheme={isLightTheme}>
      {navItems.map(({ icon: Icon, id, onClick }) => (
        <BottomNavItem
          key={id}
          isActive={activeItem === id}
          onClick={() => {
            setActiveItem(id);
            if (onClick) onClick();
          }}
        >
          <Icon isActive={activeItem === id} />
        </BottomNavItem>
      ))}
    </BottomNav>
  );
};

export default BottomNavigation;
