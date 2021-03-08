import React, { createContext, useReducer } from "react";
import { State, ContextType, Action, ProviderProps } from "./types";

const initState: State = {
  menuToggle: false,
  theme: "light",
  blogsLoaded: false,
};

export const globalContext = createContext<ContextType>({
  globalState: initState,
  dispatch: () => {},
});

const themeReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "MENU_ACTION":
      return { ...state, menuToggle: !state.menuToggle };
    case "THEME_ACTION":
      const theme = state.theme === "dark" ? "light" : "dark";
      return { ...state, theme };
    case "BLOGS_LOADED":
      return { ...state, blogsLoaded: true };
    default:
      return state;
  }
};

const GlobalContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [globalState, dispatch] = useReducer(themeReducer, initState);
  return (
    <globalContext.Provider value={{ globalState, dispatch }}>
      {children}
    </globalContext.Provider>
  );
};

export default GlobalContextProvider;
