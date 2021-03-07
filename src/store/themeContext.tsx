import React, { createContext, useReducer } from "react";
import { State, ContextType, Action, ProviderProps } from "./types";

const initState: State = {
  menuToggle: false,
  theme: "light",
};

export const themeContext = createContext<ContextType>({
  themeState: initState,
  dispatch: () => {},
});

const themeReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "MENU_ACTION":
      return { ...state, menuToggle: !state.menuToggle };
    case "THEME_ACTION":
      const theme = state.theme === "dark" ? "light" : "dark";
      return { ...state, theme };
    default:
      return state;
  }
};

const ThemeContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [themeState, dispatch] = useReducer(themeReducer, initState);
  return (
    <themeContext.Provider value={{ themeState, dispatch }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeContextProvider;
