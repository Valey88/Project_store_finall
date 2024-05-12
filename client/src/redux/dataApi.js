import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000/",
  prepareHeaders: (headers, { getState }) => {
    const token = localStorage.getItem("token");

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const dataApi = createApi({
  reducerPath: "dataApi/api",
  baseQuery,
  endpoints: (builder) => ({
    selectProduct: builder.mutation({
      query: (body) => ({
        url: "api/user",
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: {
          id: body.id,
        },
      }),
    }),
    getDevice: builder.query({
      query: () => ({
        url: "api/device",
      }),
    }),
    getOne: builder.query({
      query: (id) => ({
        url: `api/device/${id}`,
      }),
    }),
    getTypes: builder.query({
      query: () => ({
        url: "api/type",
      }),
    }),
    getDeviceForeTypes: builder.mutation({
      query: (body) => ({
        url: `api/device/search`,
        headers: { "Content-Type": "application/json" },
        body: {
          typeId: body.id,
        },
      }),
    }),
    registerUser: builder.mutation({
      query: (body) => ({
        url: "/api/user/registration",
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: {
          sureName: body.sureName,
          name: body.name,
          middleName: body.middleName,
          email: body.email,
          phoneNumber: body.phoneNumber,
          password: body.password,
        },
      }),
      onSuccess: (response, { dispatch }) => {
        const token = response.data.token; // Предположим, что сервер возвращает токен в поле "token"
        localStorage.setItem("token", token);
      },
    }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: "/api/user/login",
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: {
          email: body.email,
          password: body.password,
        },
      }),
      onSuccess: (response, { dispatch }) => {
        const token = response.data.token; // Предположим, что сервер возвращает токен в поле "token"
        localStorage.setItem("token", token);
      },
    }),
    getType: builder.query({
      query: () => "/api/type",
    }),
    createType: builder.mutation({
      query: (body) => ({
        url: "/api/type",
        method: "POST",
        body: {
          name: body.createType,
        },
      }),
    }),
    createBrand: builder.mutation({
      query: (body) => ({
        url: "/api/brand",
        method: "POST",
        body: {
          name: body.createBrand,
        },
      }),
    }),
    getOneUser: builder.query({
      query: (id) => ({
        url: `/api/user/${id}`,
      }),
    }),
  }),
});

export const {
  useSelectProductMutation,
  useGetDeviceQuery,
  useGetOneQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetTypeQuery,
  useGetTypesQuery,
  useGetDeviceForeTypesMutation,
  useCreateTypeMutation,
  useCreateBrandMutation,
  useCreateDeviceMutation,
  useGetOneUserQuery,
} = dataApi;
