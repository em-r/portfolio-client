import React, { useEffect } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import GlobalContextProvider from "./store/globalContext";
import { useFetch } from "./hooks";
import Wrapper from "./components/Wrapper";

import ReactGA from 'react-ga';

const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACE_ID}`,
  credentials: "same-origin",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_CDA_TOKEN}`,
  },
  cache: new InMemoryCache(),
});

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


  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <GlobalContextProvider>
      <ApolloProvider client={client}>
        <Wrapper />
      </ApolloProvider>
    </GlobalContextProvider>
  );
};

export default App;
