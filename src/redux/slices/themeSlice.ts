import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  isLightTheme: boolean;
}

const initialState: ThemeState = {
  isLightTheme: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.isLightTheme = !state.isLightTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
