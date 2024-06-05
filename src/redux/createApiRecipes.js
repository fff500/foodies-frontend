import { createApi } from "@reduxjs/toolkit/query/react";
import { apiInstance } from "../api/api";

export const createApiRecipes = createApi({
    reducerPath: "recipes",
    baseQuery: apiInstance,
    endpoints: (build) => ({
        getRecipe: build.query({
            providesTags: "recipe",
            query: (id) => `/recipe/${id}`,
        }),
    }),
});

export const {
    useGetRecipeQuery,
} = createApiRecipes;
