import React from "react";
import { Nav, NavMenu } from "../../styles/Header";

const Menu: React.FC = () => {
  const items = ["ABOUT", "PROJECTS", "BLOG", "CONTACT"];
  return (
    <Nav>
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
