import React, { useContext } from "react";
import MenuIcon from "./MenuIcon";
import SHeader, { SiteLogo } from "../../styles/Header";
import Menu from "./Menu";
import { themeContext } from "../../store/themeContext";

const Header: React.FC = () => {
  const { themeState } = useContext(themeContext);
  return (
    <SHeader>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row-reverse",
          padding: "10px",
        }}
      >
        <MenuIcon />
        <SiteLogo>E M R</SiteLogo>
      </div>
      <Menu isOpen={themeState.menuToggle} />
    </SHeader>
  );
};

export default Header;
