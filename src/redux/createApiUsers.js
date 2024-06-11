import { createApi } from "@reduxjs/toolkit/query/react";
import { apiInstance } from "../api/api";

export const createApiUsers = createApi({
  reducerPath: "users",
  baseQuery: async ({
    endpoint = "users/bezegajenja0306@gmail.com",
    method = "GET",
    body,
  }) => {
    const result = await apiInstance({
      url: endpoint,
      method,
      data: body,
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2Njc1ZWUwOTkxZjU2MmFiZTcwN2Q0YyIsImlhdCI6MTcxODA1MDUzOCwiZXhwIjoxNzE4MTMzMzM4fQ.n_C9hYbMVaJr6sEuaJoPTAM3AjFQrYv9ZRUSyPZ7ZJc",
      },
    });

    return { data: result.data };
  },
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (userEmail) => `users/${userEmail}`,
    }),
  }),
});

export const { useGetUserQuery } = createApiUsers;
