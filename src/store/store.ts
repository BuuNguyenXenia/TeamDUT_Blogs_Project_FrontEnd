import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import userReducer from "src/pages/Login/Login.slice"
import registerUserReducer from "src/pages/Register/Register.slice"

const rootReducer = {
  user: userReducer,
  registerUser: registerUserReducer
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
