import React, { useContext } from "react";
import { MenuLogo } from "../../styles/Header";
import { globalContext } from "../../store/globalContext";

const MenuIcon: React.FC = () => {
  const { globalState, dispatch } = useContext(globalContext);
  return (
    <MenuLogo
      onClick={() => dispatch({ type: "MENU_ACTION" })}
      isOpen={globalState.menuToggle}
    >
      <div />
      <div />
      <div />
    </MenuLogo>
  );
};

export default MenuIcon;
