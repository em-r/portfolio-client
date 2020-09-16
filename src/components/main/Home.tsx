import React from "react";
import { Main, Summary, Skills } from "../../styles/Main";

const Home: React.FC = () => {
  return (
    <Main>
      <div>
        <Summary>
          <header>I build amazing experiences.</header>
          {/* <span>Software developer.</span> */}
        </Summary>
        <Skills>
          <li>
            <h4>✅ Backend developer</h4>
            <span>Python, Node.js, SQL</span>
          </li>
          <li>
            <h4>✅ Frontend developer</h4>
            <span>HTML, CSS, JavaScript</span>
          </li>
          <li>
            <h4>✅ Something else...</h4>
            <span>Something else...</span>
          </li>
        </Skills>
      </div>
    </Main>
  );
};

export default Home;
