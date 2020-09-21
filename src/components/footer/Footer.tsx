import React from "react";
import MobileFooter from "./Mobile";
import DesktopFooter from "./Desktop";

const Footer: React.FC = () => {
  return (
    <footer style={{ height: "20vh" }}>
      <MobileFooter />
      <DesktopFooter />
    </footer>
  );
};

export default Footer;
