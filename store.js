import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/nav-slice";

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});
