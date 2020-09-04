import React, { createContext, useReducer } from "react";

type ContextType = {
  themeState: {
    toggle: boolean;
  };
  dispatch: React.Dispatch<{ type: string }>;
};
const initState = {
  toggle: false,
};

export const themeContext = createContext<ContextType>({
  themeState: initState,
  dispatch: () => {},
});

const themeReducer = (state: typeof initState, action: { type: string }) => {
  return state;
};

const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [themeState, dispatch] = useReducer(themeReducer, initState);
  return (
    <themeContext.Provider value={{ themeState, dispatch }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeContextProvider;
