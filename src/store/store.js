import { configureStore } from "@reduxjs/toolkit";
import { createApiStatic } from "../redux/";

export const store = configureStore({
  reducer: {
    [createApiStatic.reducerPath]: createApiStatic.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(createApiStatic.middleware),
});
