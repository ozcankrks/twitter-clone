import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "tr",
  sidebarType: "app",
  theme: "default",
  loading: false,
  mobileBar: false,
};
const app = createSlice({
  name: "app",
  initialState,
  reducers: {
    _setSidebarType: (state, action) => {
      state.sidebarType = action.payload;
    },
    _setLanguage: (state, action) => {
      state.language = action.payload;
    },
    _setTheme: (state, action) => {
      state.theme = action.payload;
    },
    _setLoading: (state, action) => {
      state.loading = action.payload;
    },
    _setMobileBar: (state, action) => {
      state.mobileBar = action.payload;
    },
  },
});

export const {
  _setLanguage,
  _setSidebarType,
  _setTheme,
  _setLoading,
  _setMobileBar,
} = app.actions;
export default app.reducer;