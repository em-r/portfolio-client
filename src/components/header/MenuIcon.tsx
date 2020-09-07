import React, { useContext } from "react";
import { MenuLogo } from "../../styles/Header";
import { themeContext } from "../../store/themeContext";

const MenuIcon: React.FC = () => {
  const { themeState, dispatch } = useContext(themeContext);
  return (
    <MenuLogo
      onClick={() => dispatch({ type: "MENU_ACTION" })}
      isOpen={themeState.menuToggle}
    >
      <div />
      <div />
      <div />
    </MenuLogo>
  );
};

export default MenuIcon;
