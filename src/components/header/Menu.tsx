import React from "react";
import { Nav, NavMenu } from "../../styles/Header";

const Menu: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const items = ["ABOUT", "PROJECTS", "BLOG", "CONTACT"];
  return (
    <Nav isOpen={isOpen}>
      <NavMenu>
        {items.map((item) => (
          <div key={item} style={{ flex: 1 }}>
            {item}
          </div>
        ))}
      </NavMenu>
    </Nav>
  );
};

export default Menu;
