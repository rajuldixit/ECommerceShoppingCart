import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { baseAPI } from "./baseApi";

export const createStore = (
  options?: ConfigureStoreOptions['preloadedState'] | undefined
) => configureStore({
  reducer: {
    [baseAPI.reducerPath] : baseAPI.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(baseAPI.middleware)
})

export const store = createStore()

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector