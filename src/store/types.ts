
export type State = {
  menuToggle: boolean;
  theme: "light" | "dark";
  blogsLoaded: boolean;
}

export type Action = {
    type: "MENU_ACTION" | "THEME_ACTION" | "BLOGS_LOADED"
}

export type ContextType = {
  globalState: State;
  dispatch: React.Dispatch<Action>;
};

export type ProviderProps = {
    children: React.ReactNode
}
