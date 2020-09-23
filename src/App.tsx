import React, { useEffect } from "react";
import ThemeContextProvider from "./store/themeContext";
import { useFetch } from "./hooks";
import Wrapper from "./components/Wrapper";

const App: React.FC = () => {
  const getToken = useFetch<{ token: string }>("contact");
  useEffect(() => {
    const getJwt = async () => {
      const jwt = await getToken;
      if (!jwt) return null;
      localStorage.setItem("JWT_TOKEN", jwt.token);
    };
    getJwt();
    // eslint-disable-next-line
  }, []);
  return (
    <ThemeContextProvider>
      <Wrapper />
    </ThemeContextProvider>
  );
};

export default App;
