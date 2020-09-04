import React from "react";
import SHeader, { SiteLogo, MenuLogo } from "../../styles/Header";
import Menu from "./Menu";

const Header: React.FC = () => {
  return (
    <SHeader>
      <MenuLogo>X</MenuLogo>
      <SiteLogo>E M R</SiteLogo>
      <Menu />
    </SHeader>
  );
};

export default Header;
