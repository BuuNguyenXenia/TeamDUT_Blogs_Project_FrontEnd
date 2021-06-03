import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import userApi from "src/apis/user.api"
import { MSG } from "src/constants/showMsg"
import LocalStorageService from "src/services/LocalStorageService/Storage.service"

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
      console.log("data login: ", data)

      const refresh = data.refreshToken
      const accessToken = data.accessToken

      if (response.status === 200) {
        LocalStorageService.setItem("refresh", refresh)
        LocalStorageService.setItem("accessToken", accessToken)
        return data
      } else {
        return thunkAPI.rejectWithValue(data)
      }
    } catch (e) {
      console.log("Error: ", e.response.data)
      return thunkAPI.rejectWithValue(e.response.data)
    }
  }
)

export const registerUser = createAsyncThunk(
  "user/register",
  async (createUser: CreateUser, thunkAPI) => {
    try {
      const params = {
        name: createUser.name,
        email: createUser.email,
        password: createUser.password,
        passwordConfirmation: createUser.confirmPassword
      }
      const response = await userApi.register(params)

      let data = await response.data
      // eslint-disable-next-line no-console
      console.log("data register: ", data)

      if (response.status === 200) {
        return data
      } else {
        return thunkAPI.rejectWithValue(data)
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(MSG.REGISTER_ERROR)
    }
  }
)

export const currentUser = createAsyncThunk("user/current", async thunkAPI => {
  try {
    const response = await userApi.currentUser()
    let data = await response.data
    if (response.status === 200) {
      return data
    }
  } catch (e) {
    throw e
  }
})

export const logoutUser = createAsyncThunk("user/logout", async thunkAPI => {
  try {
    const response = await userApi.logOut()
    let data = await response.data
    if (response.status === 200) {
      LocalStorageService.setItem("accessToken", "")
      LocalStorageService.setItem("refreshToken", "")
      return data
    }
  } catch (error) {
    throw error
  }
})

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    isSuccess: false,
    isError: false,
    errorMessage: "",
    role: ""
  },
  reducers: {
    clearState: state => {
      state.isError = false
      state.isSuccess = false

      return state
    }
  },
  extraReducers: {
    // login user
    [loginUser.fulfilled.type]: (state, { payload }) => {
      state.isSuccess = true
      console.log(state.isSuccess)
      return state
    },
    [loginUser.rejected.type]: (state, { payload }) => {
      state.isError = true
      state.errorMessage = payload
    },
    [loginUser.pending.type]: state => {},

    //logout user
    [logoutUser.fulfilled.type]: (state, { payload }) => {
      state.isSuccess = false
      return state
    },
    [logoutUser.rejected.type]: (state, { payload }) => {
      state.isError = true
      state.errorMessage = payload
    },
    [logoutUser.pending.type]: state => {},

    //register user
    [registerUser.fulfilled.type]: (state, { payload }) => {
      state.isSuccess = true
      return state
    },
    [registerUser.rejected.type]: (state, { payload }) => {
      state.isError = true
      state.errorMessage = payload
    },
    [registerUser.pending.type]: state => {},

    //get current user
    [currentUser.fulfilled.type]: (state, { payload }) => {
      state.name = payload.username
      state.email = payload.email
      state.role = payload.role
      state.isSuccess = true
      return state
    },
    [currentUser.rejected.type]: (state, { payload }) => {
      state.isSuccess = false
      state.errorMessage = payload
    },
    [currentUser.pending.type]: state => {}
  }
})

const { reducer: userReducer } = userSlice

export default userReducer

export const { clearState } = userSlice.actions
export const userSelector = state => state.user
