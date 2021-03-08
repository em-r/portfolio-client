import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { globalContext } from "../../store/globalContext";
import { Main } from "../../styles/Main";
import Blog from "../blog/Blog";

const Home: React.FC = () => {
  const {
    globalState: { blogsLoaded },
  } = useContext(globalContext);
  return (
    <Main width="800px">
      <Blog />
      {blogsLoaded && (
        <Link to="/blog" style={{ textAlign: "center" }}>
          Read more
        </Link>
      )}
    </Main>
  );
};

export default Home;
