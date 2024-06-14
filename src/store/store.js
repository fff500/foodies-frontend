import { configureStore } from "@reduxjs/toolkit";
import {
  createApiStatic,
  createApiRecipes,
  createApiUsers,
  modalSlice,
} from "../redux/";

export const store = configureStore({
  reducer: {
    [createApiUsers.reducerPath]: createApiUsers.reducer,
    [createApiStatic.reducerPath]: createApiStatic.reducer,
    [createApiRecipes.reducerPath]: createApiRecipes.reducer,
    modal: modalSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      createApiStatic.middleware,
      createApiRecipes.middleware,
      createApiUsers.middleware,
    ),
});
