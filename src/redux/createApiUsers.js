import { createApi } from "@reduxjs/toolkit/query/react";
import { apiInstance } from "../api/";

export const createApiUsers = createApi({
  reducerPath: "users",
  baseQuery: async (args) => {
    const { data } = await apiInstance({
      url: args.url,
      method: args.method,
      data: args.body,
      headers: args.headers,
    });
    return { data };
  },
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => ({
        url: `users/${id}`,
        method: "GET",
      }),
    }),
    getMyOwnRecipes: builder.query({
      query: () => ({
        url: "recipes/own-recipes",
        method: "GET",
      }),
    }),
    getMyFavorites: builder.query({
      query: () => ({
        providesTags: "favorites",
        url: "users/favorites",
        method: "GET",
      }),
    }),
    getFollowing: builder.query({
      query: () => ({
        url: "users/following",
        method: "GET",
      }),
    }),
    getFollowers: builder.query({
      query: () => ({
        url: "users/followers",
        method: "GET",
      }),
    }),
    createUser: builder.mutation({
      query: (userData) => ({
        url: "users/signup",
        method: "POST",
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (userData) => ({
        url: "users/login",
        method: "POST",
        body: userData,
      }),
    }),
    addToFavorites: builder.mutation({
      query: (id) => ({
        url: `users/favorites/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["current"],
    }),
    removeFromFavorites: builder.mutation({
      query: (id) => ({
        url: `users/favorites/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["current"],
    }),
    getCurrentUser: builder.query({
      providesTags: ["current"],
      query: (id) => ({
        url: "users/current",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useCreateUserMutation,
  useLoginUserMutation,
  useAddToFavoritesMutation,
  useRemoveFromFavoritesMutation,
  useGetCurrentUserQuery,
  useGetMyOwnRecipesQuery,
  useGetMyFavoritesQuery,
  useGetFollowingQuery,
  useGetFollowersQuery,
} = createApiUsers;
