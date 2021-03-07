
export type State = {
  menuToggle: boolean;
  theme: "light" | "dark";
}

export type ContextType = {
  themeState: State;
  dispatch: React.Dispatch<{ type: "MENU_ACTION" | "THEME_ACTION" }>;
};

export type Action = {
    type: "MENU_ACTION" | "THEME_ACTION"
}

export type ProviderProps = {
    children: React.ReactNode
}
