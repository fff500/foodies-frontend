import { createApi } from "@reduxjs/toolkit/query/react";
import { apiInstance } from "../api";

export const createApiUsers = createApi({
  reducerPath: "users",
  baseQuery: apiInstance,
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => ({
        url: "users/current",
        method: "GET",
      }),
      providesTags: (result, error, page) => [
        { type: "GetCurrentUser", id: "LIST" },
      ],
    }),
    getUser: builder.query({
      query: (id) => ({
        url: `users/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, page) => [{ type: "GetUser", id: "LIST" }],
    }),
    getMyOwnRecipes: builder.query({
      query: (page) => ({
        url: `recipes/own-recipes?page=${page}`,
        method: "GET",
      }),
      providesTags: (result, error, page) => [
        { type: "GetMyOwnRecipes", id: "LIST" },
      ],
    }),
    getMyFavorites: builder.query({
      query: (page) => ({
        url: `users/favorites?page=${page}`,
        method: "GET",
      }),
    }),
    getFollowing: builder.query({
      query: () => ({
        url: "users/following",
        method: "GET",
      }),
      providesTags: (result, error, page) => [
        { type: "GetFollowing", id: "LIST" },
      ],
    }),
    getFollowers: builder.query({
      query: (userId) => ({
        url: `users/followers/${userId}`,
        method: "GET",
      }),
    }),
    getFollowersCurrentUser: builder.query({
      query: () => ({
        url: "users/followers",
        method: "GET",
      }),
    }),
    updateAvatar: builder.mutation({
      query: (data) => ({
        url: "users/avatars",
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["GetCurrentUser"],
    }),
    getRecipesByOwnerId: builder.query({
      query: ({ id, page }) => ({
        url: `recipes?owner=${id}&page=${page}`,
        method: "GET",
      }),
      providesTags: (result, error, page) => [
        { type: "GetRecipesByOwnerId", id: "LIST" },
      ],
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: "users/signup",
        method: "POST",
        data,
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "users/login",
        method: "POST",
        data,
      }),
    }),
    deleteRecipe: builder.mutation({
      query: (recipeId) => ({
        url: `recipes/${recipeId}`,
        method: "DELETE",
      }),
      invalidatesTags: [
        { type: "GetMyOwnRecipes", id: "LIST" },
        { type: "GetRecipesByOwnerId", id: "LIST" },
      ],
    }),
    unfollowUser: builder.mutation({
      query: (userId) => ({
        url: `users/unfollow/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: [
        { type: "GetFollowing", id: "LIST" },
        { type: "GetCurrentUser", id: "LIST" },
        { type: "GetUser", id: "LIST" },
      ],
    }),
    followUser: builder.mutation({
      query: (userId) => ({
        url: `users/follow/${userId}`,
        method: "PATCH",
      }),
      invalidatesTags: [
        { type: "GetFollowing", id: "LIST" },
        { type: "GetCurrentUser", id: "LIST" },
        { type: "GetUser", id: "LIST" },
      ],
    }),
    logoutUser: builder.mutation({
      query: (data) => ({
        url: "users/logout",
        method: "POST",
        data,
      }),
      invalidatesTags: [{ type: "GetCurrentUser", id: "LIST" }],
    }),
    addToFavorites: builder.mutation({
      query: (id) => ({
        url: `users/favorites/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["GetCurrentUser"],
    }),
    removeFromFavorites: builder.mutation({
      query: (id) => ({
        url: `users/favorites/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["GetCurrentUser"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetCurrentUserQuery,
  useCreateUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useAddToFavoritesMutation,
  useRemoveFromFavoritesMutation,
  useGetMyOwnRecipesQuery,
  useGetMyFavoritesQuery,
  useGetFollowingQuery,
  useGetFollowersCurrentUserQuery,
  useGetFollowersQuery,
  useUpdateAvatarMutation,
  useGetRecipesByOwnerIdQuery,
  useDeleteRecipeMutation,
  useUnfollowUserMutation,
  useFollowUserMutation,
} = createApiUsers;
