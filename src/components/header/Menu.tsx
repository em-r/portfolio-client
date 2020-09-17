import React, { Dispatch } from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavMenu } from "../../styles/Header";

type Props = {
  isOpen: boolean;
  dispatch: Dispatch<{ type: "MENU_ACTION" | "THEME_ACTION" }>;
};

const Menu: React.FC<Props> = ({ isOpen, dispatch }) => {
  const items = ["about", "projects", "blog", "contact"];

  return (
    <Nav isOpen={isOpen}>
      <NavMenu>
        {items.map((item) => (
          <div key={item} style={{ flex: 1 }}>
            <NavLink
              to={item}
              style={{ textTransform: "uppercase" }}
              onClick={() => dispatch({ type: "MENU_ACTION" })}
            >
              {item}
            </NavLink>
          </div>
        ))}
      </NavMenu>
    </Nav>
  );
};

export default Menu;
