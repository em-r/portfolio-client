import React from "react";
import { FooterWrapper } from "../../styles/Main";
import MobileFooter from "./Mobile";
import DesktopFooter from "./Desktop";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <MobileFooter />
      <DesktopFooter />
    </FooterWrapper>
  );
};

export default Footer;
