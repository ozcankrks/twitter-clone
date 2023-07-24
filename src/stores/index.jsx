import { configureStore } from "@reduxjs/toolkit";

import app from "./app";

const store = configureStore({
  reducer: {
    app,
  },
});

export default store;