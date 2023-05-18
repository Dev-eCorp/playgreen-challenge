import React, { FC } from "react";
import { BottomNav, BottomNavItem } from "@/components/atoms";
import { HomeIcon, OutIcon, ClockIcon } from "../icons/index";
import { useLogout } from "@/hooks";

type Props = {
  isLightTheme: boolean;
  onClockIconClick: () => void;
  onHomeIconClick: () => void;
  activeIcon: number;
};

type NavItem = {
  icon: FC<{ isActive: boolean }>;
  id: number;
  onClick?: () => void;
};

const BottomNavigation: FC<Props> = ({
  isLightTheme,
  onClockIconClick,
  onHomeIconClick,
  activeIcon,
}) => {
  const logout = useLogout();

  const navItems: NavItem[] = [
    { icon: HomeIcon, id: 0, onClick: onHomeIconClick },
    { icon: ClockIcon, id: 1, onClick: onClockIconClick },
    { icon: OutIcon, id: 2, onClick: logout },
  ];

  return (
    <BottomNav isLightTheme={isLightTheme} style={{ zIndex: 2 }}>
      {navItems.map(({ icon: Icon, id, onClick }) => (
        <BottomNavItem
          key={id}
          isActive={activeIcon === id}
          onClick={() => {
            if (onClick) onClick();
          }}
        >
          <Icon isActive={activeIcon === id} />
        </BottomNavItem>
      ))}
    </BottomNav>
  );
};

export default BottomNavigation;
