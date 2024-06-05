import { createApi } from "@reduxjs/toolkit/query/react";
import { apiInstance } from "../api/api";

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
  }),
});

export const {
  useGetIngredientsQuery,
  useGetAreasQuery,
  useGetTestimonialsQuery,
} = createApiStatic;
