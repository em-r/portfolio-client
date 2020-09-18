import React from "react";
import { NavLink } from "react-router-dom";
import { SFooter } from "../../styles/Main";

const footerItems = [
  {
    emoji: "💡",
    text: "portfolio",
    link: "projects",
  },
  {
    emoji: "🧰",
    text: "skills",
    link: "about",
  },
  {
    emoji: "📞",
    text: "contact",
    link: "contact",
  },
];

type Item = { emoji: string; text: string; link: string };

const RenderItems: React.FC<Item> = ({ emoji, text, link }) => {
  return (
    <div style={{ fontSize: "1.1rem" }}>
      <span role="img" aria-label={text}>
        {emoji}
      </span>
      <NavLink to={`${link}`}>{text}</NavLink>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <div style={{ height: "20vh" }}>
      <SFooter>
        {footerItems.map((item) => (
          <RenderItems {...item} key={item.text} />
        ))}
      </SFooter>
    </div>
  );
};

export default Footer;
