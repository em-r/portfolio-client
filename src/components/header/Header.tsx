import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "./MenuIcon";
import SHeader, { SiteLogo, ThemeToggle } from "../../styles/Header";
import Menu from "./Menu";
import { themeContext } from "../../store/themeContext";

const Header: React.FC = () => {
  const { themeState, dispatch } = useContext(themeContext);

  return (
    <SHeader>
      <div>
        <MenuIcon />
        <ThemeToggle
          theme={themeState.theme}
          onClick={() => dispatch({ type: "THEME_ACTION" })}
        >
          <div></div>
        </ThemeToggle>
        <Menu isOpen={themeState.menuToggle} dispatch={dispatch} />

        <SiteLogo>
          <NavLink to="/">E M R</NavLink>
        </SiteLogo>
      </div>
    </SHeader>
  );
};

export default Header;
