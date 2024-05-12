import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    loginUser: (state) => {
      state.isAuthenticated = true;
    },
  },
});

export const { loginUser } = authSlice.actions;
