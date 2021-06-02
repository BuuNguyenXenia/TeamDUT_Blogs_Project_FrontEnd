import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import userApi from "src/apis/user.api"

interface User {
  email: string
  password: string
}

export const loginUser = createAsyncThunk(
  "user/login",
  async (user: User, thunkAPI) => {
    try {
      const params = {
        email: user.email,
        password: user.password
      }
      const response = await userApi.getToken(params)

      let data = await response.data

      // eslint-disable-next-line no-console
      console.log("data login: ", data)

      if (response.status === 200) {
        localStorage.setItem("accessToken", data.accessToken)
        localStorage.setItem("refreshToken", data.refreshToken)
        return data
      } else {
        return thunkAPI.rejectWithValue(data)
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log("Error: ", e.response.data)
      return thunkAPI.rejectWithValue(e.response.data)
    }
  }
)

const userSlice = createSlice({
  name: "user",
  initialState: {
    isSuccess: false,
    isError: false,
    errorMessage: ""
  },
  reducers: {
    clearState: state => {
      state.isError = false
      state.isSuccess = false

      return state
    }
  },
  extraReducers: {
    [loginUser.fulfilled.type]: (state, { payload }) => {
      // eslint-disable-next-line no-console
      console.log(payload)
      state.isSuccess = true
      return state
    },
    [loginUser.rejected.type]: (state, { payload }) => {
      state.isError = true
      state.errorMessage = payload
    },
    [loginUser.pending.type]: state => {}
  }
})

const { reducer: userReducer } = userSlice

export default userReducer

export const { clearState } = userSlice.actions
export const userSelector = state => state.user
