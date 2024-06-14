import { createApi } from "@reduxjs/toolkit/query/react";
import { apiInstance } from "../api/api";

const getAuthHeader = () => {
  const token = window.localStorage.getItem("token");
  return {
    authorization: `Bearer ${token}`,
  };
};

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
    getCurrentUser: builder.query({
      query: () => ({
        url: "users/current",
        method: "GET",
        headers: getAuthHeader(),
      }),
    }),
    getUser: builder.query({
      query: (id) => ({
        url: `users/${id}`,
        method: "GET",
        headers: getAuthHeader(),
      }),
    }),
    getMyOwnRecipes: builder.query({
      query: (page) => ({
        url: `recipes/own-recipes?page=${page}`,
        method: "GET",
        headers: getAuthHeader(),
      }),
      providesTags: (result, error, page) => [
        { type: "GetMyOwnRecipes", id: "LIST" },
      ],
    }),
    getMyFavorites: builder.query({
      query: (page) => ({
        url: `users/favorites?page=${page}`,
        method: "GET",
        headers: getAuthHeader(),
      }),
    }),
    getFollowing: builder.query({
      query: () => ({
        url: "users/following",
        method: "GET",
        headers: getAuthHeader(),
      }),
      providesTags: (result, error, page) => [
        { type: "GetFollowing", id: "LIST" },
      ],
    }),
    getFollowers: builder.query({
      query: (userId) => ({
        url: `users/followers/${userId}`,
        method: "GET",
        headers: getAuthHeader(),
      }),
    }),
    getFollowersCurrentUser: builder.query({
      query: () => ({
        url: "users/followers",
        method: "GET",
        headers: getAuthHeader(),
      }),
    }),
    updateAvatar: builder.mutation({
      query: (formData) => ({
        url: "users/avatars",
        method: "PATCH",
        body: formData,
        headers: getAuthHeader(),
      }),
    }),
    getRecipesByOwnerId: builder.query({
      query: (id, page) => ({
        url: `recipes?owner=${id}&page=${page}`,
        method: "GET",
      }),
      providesTags: (result, error, page) => [
        { type: "GetRecipesByOwnerId", id: "LIST" },
      ],
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
      invalidatesTags: [{ type: "GetFollowing", id: "LIST" }],
    }),
    followUser: builder.mutation({
      query: (userId) => ({
        url: `users/follow/${userId}`,
        method: "PATCH",
      }),
      invalidatesTags: [{ type: "GetFollowing", id: "LIST" }],
    }),
    logoutUser: builder.mutation({
      query: (userData) => ({
        url: "users/logout",
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
