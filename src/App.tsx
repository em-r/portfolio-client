import React from "react";
import ThemeContextProvider from "./store/themeContext";
import Header from "./components/header/Header";
import Home from "./components/main/Home";
import Footer from "./components/main/Footer";

const App: React.FC = () => {
  return (
    // <div className="App">
    <ThemeContextProvider>
      <Header />
      <Home />
      <Footer />
    </ThemeContextProvider>
    // </div>
  );
};

export default App;
