import { configureStore } from "@reduxjs/toolkit";
import { createApiStatic, createApiRecipes, createApiUsers } from "../redux/";

export const store = configureStore({
  reducer: {
    [createApiUsers.reducerPath]: createApiUsers.reducer,
    [createApiStatic.reducerPath]: createApiStatic.reducer,
    [createApiRecipes.reducerPath]: createApiRecipes.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      createApiStatic.middleware,
      createApiRecipes.middleware,
      createApiUsers.middleware
    ),
});
