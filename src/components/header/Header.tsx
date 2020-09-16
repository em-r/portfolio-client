import React, { useContext, useEffect } from "react";
import MenuIcon from "./MenuIcon";
import SHeader, { SiteLogo, ThemeToggle } from "../../styles/Header";
import Menu from "./Menu";
import { themeContext } from "../../store/themeContext";
// import Moon from "../../img/moon.svg";
// import Sun from "../../img/sun.svg";

const Header: React.FC = () => {
  const { themeState, dispatch } = useContext(themeContext);
  useEffect(() => console.log(themeState), [themeState]);
  return (
    <SHeader>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row-reverse",
          padding: "10px",
          boxSizing: "border-box",
        }}
      >
        <MenuIcon />
        <ThemeToggle
          theme={themeState.theme}
          onClick={() => dispatch({ type: "THEME_ACTION" })}
        >
          <div></div>
        </ThemeToggle>
        <SiteLogo>E M R</SiteLogo>
      </div>
      <Menu isOpen={themeState.menuToggle} />
    </SHeader>
  );
};

export default Header;
