import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import userApi from "src/apis/user.api"

interface CreateUser {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export const RegisterUser = createAsyncThunk(
  "user/register",
  async (createUser: CreateUser, thunkAPI) => {
    try {
      const params = {
        name: createUser.name,
        email: createUser.email,
        password: createUser.password,
        passwordConfirmation: createUser.confirmPassword
      }
      const response = await userApi.Register(params)

      let data = await response.data
      // eslint-disable-next-line no-console
      console.log("data register: ", data)

      if (response.status === 200) {
        return data
      } else {
        return thunkAPI.rejectWithValue(data)
      }
    } catch (e) {
      const error = "The Email was registered"
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const registerSlice = createSlice({
  name: "registerUser",
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
    [RegisterUser.fulfilled.type]: (state, { payload }) => {
      state.isSuccess = true
      return state
    },
    [RegisterUser.rejected.type]: (state, { payload }) => {
      state.isError = true
      state.errorMessage = payload
    },
    [RegisterUser.pending.type]: state => {}
  }
})

const { reducer: registerUserReducer } = registerSlice

export default registerUserReducer

export const { clearState } = registerSlice.actions
export const userSelector = state => state.registerUser
