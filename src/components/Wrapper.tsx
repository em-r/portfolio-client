import React, { useContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Route } from "react-router-dom";
import { themeContext } from "../store/themeContext";
import { WrapperComp } from "../styles/Main";
import Header from "./header/Header";
import Home from "./main/Home";
import About from "./about/About";
import Projects from "./projects/Projects";
import Footer from "./main/Footer";
import { lightTheme, darkTheme } from "../styles/Themes";

const Wrapper: React.FC = () => {
  const { themeState } = useContext(themeContext);
  const [theme, setTheme] = useState(darkTheme);

  useEffect(() => {
    const switchedTheme = themeState.theme === "light" ? lightTheme : darkTheme;
    setTheme(switchedTheme);
  }, [theme, themeState]);
  return (
    <ThemeProvider theme={theme}>
      <WrapperComp>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Footer />
      </WrapperComp>
    </ThemeProvider>
  );
};

export default Wrapper;
