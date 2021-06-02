import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";

import dotenv from "dotenv";
import ReactGA from "react-ga";

// load environment variables
dotenv.config();

// initialize Google Analytics
ReactGA.initialize("UA-198460711-1");

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <App />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
