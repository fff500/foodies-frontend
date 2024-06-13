import { createApi } from "@reduxjs/toolkit/query/react";
import { apiInstance } from "../api/";

export const createApiStatic = createApi({
  reducerPath: "static",
  baseQuery: apiInstance,
  endpoints: (build) => ({
    getIngredients: build.query({
      providesTags: "ingredients",
      query: (arg) => "/ingredients",
    }),
    getAreas: build.query({
      providesTags: "areas",
      query: (arg) => "/areas",
    }),
    getTestimonials: build.query({
      providesTags: "testimonials",
      query: (arg) => "/testimonials",
    }),
    getRecipes: build.query({
      providesTags: "recipes",
      query: ({ page, limit, filterIngredient, filterArea }) =>
        `/recipes?page=${page}&limit=${limit}&ingredient=${filterIngredient}&area=${filterArea}`,
    }),
  }),
});

export const {
  useGetIngredientsQuery,
  useGetAreasQuery,
  useGetTestimonialsQuery,
  useGetRecipesQuery,
} = createApiStatic;
