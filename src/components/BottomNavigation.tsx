import React, { useState, FC } from "react";
import { BottomNav, BottomNavItem } from "../styles/styles";
import { HomeIcon, OutIcon, ClockIcon } from "./icons/index";

type Props = {
  isLightTheme: boolean;
};

type NavItem = {
  icon: React.FC<{ isActive: boolean }>;
  id: number;
};

const navItems: NavItem[] = [
  { icon: HomeIcon, id: 0 },
  { icon: OutIcon, id: 1 },
  { icon: ClockIcon, id: 2 },
];

const BottomNavigation: FC<Props> = ({ isLightTheme }) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <BottomNav isLightTheme={isLightTheme}>
      {navItems.map(({ icon: Icon, id }) => (
        <BottomNavItem
          key={id}
          isActive={activeItem === id}
          onClick={() => setActiveItem(id)}
        >
          <Icon isActive={activeItem === id} />
        </BottomNavItem>
      ))}
    </BottomNav>
  );
};

export default BottomNavigation;
