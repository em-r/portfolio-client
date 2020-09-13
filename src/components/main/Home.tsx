import React from "react";
import { Main, Summary } from "../../styles/Main";

const Home: React.FC = () => {
  return (
    <Main>
      <div>
        <Summary>
          <header>I build amazing experiences.</header>
          <span>Software developer.</span>
        </Summary>
      </div>
    </Main>
  );
};

export default Home;
