import React, { createContext, useReducer } from "react";

type ContextType = {
  themeState: {
    menuToggle: boolean;
    theme: string;
  };
  dispatch: React.Dispatch<{ type: "MENU_ACTION" | "THEME_ACTION" }>;
};
const initState = {
  menuToggle: false,
  theme: "light",
};

export const themeContext = createContext<ContextType>({
  themeState: initState,
  dispatch: () => {},
});

const themeReducer = (
  state: typeof initState,
  action: { type: "MENU_ACTION" | "THEME_ACTION" }
) => {
  // console.log(action, state);
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
