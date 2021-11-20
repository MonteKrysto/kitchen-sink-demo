const app = {
  state: {
    showLayout: true,
    inputTextFocused: false,
    overlay: undefined,
  },
  reducers: {
    toggleBuilderMode(state: any) {
      return {
        ...state,
        showLayout: !state.showLayout,
      };
    },
  },
};

export { app };
