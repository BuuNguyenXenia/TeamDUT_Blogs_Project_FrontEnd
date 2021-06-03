import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import userReducer from "../pages/User/User.slice"

const rootReducer = {
  user: userReducer
}

export const store = configureStore({
  reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
