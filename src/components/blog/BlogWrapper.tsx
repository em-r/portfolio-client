import React, { useContext } from "react";
import Blog from "./Blog";
import { Main } from "../../styles/Main";
import { globalContext } from "../../store/globalContext";

const BlogWrapper: React.FC = () => {
  const {
    globalState: { menuToggle },
  } = useContext(globalContext);
  return (
    <Main width="800px" isHidden={menuToggle}>
      <Blog />
    </Main>
  );
};

export default BlogWrapper;
