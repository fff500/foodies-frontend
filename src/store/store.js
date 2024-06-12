import { configureStore } from "@reduxjs/toolkit";
import { createApiStatic, createApiRecipes, createApiUsers } from "../redux/";
import filtersReducer from "../redux/filtersSlice";

export const store = configureStore({
  reducer: {
    [createApiUsers.reducerPath]: createApiUsers.reducer,
    [createApiStatic.reducerPath]: createApiStatic.reducer,
    [createApiRecipes.reducerPath]: createApiRecipes.reducer,
    filters: filtersReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      createApiStatic.middleware,
      createApiRecipes.middleware,
      createApiUsers.middleware
    ),
});
