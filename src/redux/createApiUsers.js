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
  }),
});

export const {
  useGetUserQuery,
  useCreateUserMutation,
  useLoginUserMutation,
  useGetMyOwnRecipesQuery,
  useGetMyFavoritesQuery,
  useGetFollowingQuery,
  useGetFollowersQuery,
} = createApiUsers;
