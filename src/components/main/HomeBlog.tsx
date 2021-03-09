import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { globalContext } from "../../store/globalContext";
import { Main } from "../../styles/Main";
import Blog from "../blog/Blog";

const Button = styled.button`
  background: #0555ea;
  color: #fff;
  padding: 5px;
  border: none;
  border-radius: 5px;
  font-size: 1.2em;
  cursor: pointer;
`;

const Home: React.FC = () => {
  const {
    globalState: { blogsLoaded },
  } = useContext(globalContext);

  const [redirect, setRedirect] = useState<boolean>(false);

  if (redirect) return <Redirect to="/blog" />;

  return (
    <Main width="800px">
      <Blog />
      {blogsLoaded && (
        <p style={{ textAlign: "center" }}>
          <Button onClick={() => setRedirect(!redirect)}>Browse Posts</Button>
        </p>
      )}
    </Main>
  );
};

export default Home;
