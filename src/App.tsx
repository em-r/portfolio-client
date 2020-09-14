import React from "react";
import ThemeContextProvider from "./store/themeContext";
import Wrapper from "./components/Wrapper";

const App: React.FC = () => {
  return (
    // <div className="App">
    <ThemeContextProvider>
      <Wrapper />
    </ThemeContextProvider>
    // </div>
  );
};

export default App;
