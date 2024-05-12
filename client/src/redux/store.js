import { configureStore } from "@reduxjs/toolkit";

import { dataApi } from "./dataApi";
import { authSlice } from "./authSlice";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    [dataApi.reducerPath]: dataApi.reducer,
    auth: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApi.middleware),
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
