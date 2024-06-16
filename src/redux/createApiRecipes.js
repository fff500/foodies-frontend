import { createApi } from "@reduxjs/toolkit/query/react";
import { apiInstance } from "../api";

export const createApiRecipes = createApi({
  reducerPath: "recipes",
  baseQuery: apiInstance,
  endpoints: (build) => ({
    getRecipe: build.query({
      providesTags: "recipe",
      query: (id) => `/recipes/${id}`,
    }),
    createRecipe: build.mutation({
      providesTags: "recipe",
      query: (data) => ({
        url: "/recipes",
        method: "POST",
        data,
      }),
    }),
    getPopularRecipes: build.query({
      providesTags: "popularRecipes",
      query: (id) => `/recipes/popular`,
    }),
  }),
});

export const {
  useGetRecipeQuery,
  useGetPopularRecipesQuery,
  useCreateRecipeMutation,
} = createApiRecipes;
