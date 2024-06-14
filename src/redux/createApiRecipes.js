import { createApi } from "@reduxjs/toolkit/query/react";
import { apiInstance } from "../api/api";

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
      query: (body) => ({
        url: "/recipes",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetRecipeQuery, useCreateRecipeMutation } = createApiRecipes;
