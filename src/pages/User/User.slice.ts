import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import userApi from "src/apis/user.api"
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
      if (response.status === 200) {
        LocalStorageService.setItem("refreshToken", response.data.refreshToken)
        LocalStorageService.setItem("accessToken", response.data.accessToken)
        return response.data
      } else {
        return thunkAPI.rejectWithValue(response.data)
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data)
    }
  }
)

export const logoutUser = createAsyncThunk("user/logout", async thunkAPI => {
  try {
    const response = await userApi.logOut()
    if (response.status === 200) {
      LocalStorageService.removeItem("accessToken")
      LocalStorageService.removeItem("refreshToken")
      return response.data
    }
  } catch (error) {
    throw error
  }
})

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

      if (response.status === 200) {
        return response.data
      } else {
        return thunkAPI.rejectWithValue(response.data)
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data)
    }
  }
)

export const currentUser = createAsyncThunk("user/current", async thunkAPI => {
  try {
    const response = await userApi.currentUser()

    if (response.status === 200) {
      return response.data
    }
  } catch (e) {
    throw new Error(e.message)
  }
})

interface updateUser {
  name: string
  email: string
  urlUser: string
}
export const updateUserName = createAsyncThunk(
  "user/updateName",
  async (params: updateUser) => {
    try {
      const urlUser = params.urlUser
      const request = {
        name: params.name,
        email: params.email
      }
      console.log(urlUser)
      console.log(request.name)

      const response = await userApi.updateUserName(urlUser, request)
      console.log(response)

      if (response.status === 200) {
        return response.data
      }
    } catch (e) {
      throw e
    }
  }
)

interface updateAvatar {
  name: string
  avatar: string
}
export const updateAvatarUser = createAsyncThunk(
  "user/updateAvatar",
  async (params: updateAvatar, thunkAPI) => {
    try {
      const name = params.name
      const avatarUser = {
        avatar: params.avatar
      }
      const response = await userApi.updateAvatar(name, avatarUser)
      const data = await response.data

      if (response.status === 200) {
        return data
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data)
    }
  }
)

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    avatar: "",
    isSuccess: false,
    isError: false,
    isFetching: false,
    errorMessage: "",
    role: ""
  },
  reducers: {
    clearState: state => {
      state.isError = false
      state.isSuccess = false
      state.isFetching = false

      return state
    }
  },
  extraReducers: {
    // login user
    [loginUser.fulfilled.type]: (state, { payload }) => {
      state.isSuccess = true
      state.isFetching = false
      return state
    },
    [loginUser.rejected.type]: (state, { payload }) => {
      state.isError = true
      state.isFetching = false

      state.errorMessage = payload
    },
    [loginUser.pending.type]: state => {
      state.isFetching = true
    },
    [logoutUser.fulfilled.type]: (state, { payload }) => {
      state.name = ""
      state.email = ""
      state.role = ""
      state.avatar = ""
      state.isSuccess = false
      return state
    },
    //register user
    [registerUser.fulfilled.type]: (state, { payload }) => {
      state.isSuccess = true
      state.isFetching = false
      return state
    },
    [registerUser.rejected.type]: (state, { payload }) => {
      state.isError = true
      state.isSuccess = false
      state.isFetching = false
      state.errorMessage = payload
    },
    [registerUser.pending.type]: state => {
      state.isFetching = true
    },
    //get current user
    [currentUser.fulfilled.type]: (state, { payload }) => {
      state.name = payload.username
      state.email = payload.email
      state.role = payload.role
      state.avatar = payload.avatar
      state.isSuccess = true
      state.isError = false

      return state
    },
    [currentUser.rejected.type]: (state, { payload }) => {
      state.isSuccess = false
      state.isError = true
    },

    [updateUserName.fulfilled.type]: (state, { payload }) => {
      state.name = payload.name
      return state
    },

    [updateAvatarUser.fulfilled.type]: (state, { payload }) => {
      state.avatar = payload.avatar
      state.isFetching = false
      return state
    },

    [updateAvatarUser.rejected.type]: (state, { payload }) => {
      state.errorMessage = payload
      state.isFetching = false
    },
    [updateAvatarUser.pending.type]: state => {
      state.isFetching = true
    }
  }
})

const { reducer: userReducer } = userSlice

export default userReducer

export const { clearState } = userSlice.actions
export const userSelector = state => state.user
