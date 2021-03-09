import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { globalContext } from "../../store/globalContext";
import { Main } from "../../styles/Main";
import Blog from "../blog/Blog";

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
          <button onClick={() => setRedirect(!redirect)}>Read more</button>
        </p>
      )}
    </Main>
  );
};

export default Home;
