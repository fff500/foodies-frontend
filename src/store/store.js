import { configureStore } from "@reduxjs/toolkit";
import { createApiStatic, createApiRecipes, } from "../redux/";

export const store = configureStore({
  reducer: {
    [createApiStatic.reducerPath]: createApiStatic.reducer,
    [createApiRecipes.reducerPath]: createApiRecipes.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
        createApiStatic.middleware,
        createApiRecipes.middleware,
    ),
});
