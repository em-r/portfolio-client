import React, { useContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Route } from "react-router-dom";
import { globalContext } from "../store/globalContext";
import { WrapperComp } from "../styles/Main";
import Header from "./header/Header";
// import Home from "./main/Home";
import About from "./about/About";
// import Blog from "./blog/Blog";
import BlogPost from "./blog/Post";
import BlogWrapper from "./blog/BlogWrapper";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";
import Footer from "./footer/Footer";
import { lightTheme, darkTheme } from "../styles/Themes";
import HomeBlog from "./main/HomeBlog";

const Routes: React.FC = () => (
  <React.Fragment>
    <Route exact path="/" component={HomeBlog} />
    <Route path="/about" component={About} />
    <Route path="/projects" component={Projects} />
    <Route path="/blogs/:routeId" component={BlogPost} />
    <Route exact path="/blog" component={BlogWrapper} />
    <Route path="/contact" component={Contact} />
  </React.Fragment>
);

const Wrapper: React.FC = () => {
  const { globalState } = useContext(globalContext);
  const [theme, setTheme] = useState(darkTheme);

  useEffect(() => {
    const switchedTheme =
      globalState.theme === "light" ? lightTheme : darkTheme;
    setTheme(switchedTheme);
  }, [theme, globalState]);
  return (
    <ThemeProvider theme={theme}>
      <WrapperComp>
        <Header />
        <Routes />
        <Footer />
      </WrapperComp>
    </ThemeProvider>
  );
};

export default Wrapper;
