import React from "react";
import { Link } from "react-router-dom";
import { Main } from "../../styles/Main";
import Blog from "../blog/Blog";

const Home: React.FC = () => (
  <Main width="800px">
    <Blog />
    <Link to="/blog" style={{ textAlign: "center" }}>
      Read more
    </Link>
  </Main>
);

export default Home;
