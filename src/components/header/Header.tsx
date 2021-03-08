import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "./MenuIcon";
import SHeader, { SiteLogo, ThemeToggle } from "../../styles/Header";
import Menu from "./Menu";
import { globalContext } from "../../store/globalContext";

const Header: React.FC = () => {
  const { globalState, dispatch } = useContext(globalContext);

  return (
    <SHeader>
      <div>
        <MenuIcon />
        <ThemeToggle
          theme={globalState.theme}
          onClick={() => dispatch({ type: "THEME_ACTION" })}
        >
          <div></div>
        </ThemeToggle>
        <Menu isOpen={globalState.menuToggle} dispatch={dispatch} />

        <SiteLogo>
          <NavLink to="/">E M R</NavLink>
        </SiteLogo>
      </div>
    </SHeader>
  );
};

export default Header;
