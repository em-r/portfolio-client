import React, { createContext, useReducer } from "react";

type ContextType = {
  themeState: {
    menuToggle: boolean;
  };
  dispatch: React.Dispatch<{ type: string }>;
};
const initState = {
  menuToggle: false,
};

export const themeContext = createContext<ContextType>({
  themeState: initState,
  dispatch: () => {},
});

const themeReducer = (state: typeof initState, action: { type: string }) => {
  console.log(action);
  switch (action.type) {
    case "MENU_ACTION":
      return { ...state, menuToggle: !state.menuToggle };
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
