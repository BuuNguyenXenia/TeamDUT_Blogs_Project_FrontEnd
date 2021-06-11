import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import PostsApi from "src/apis/posts.api"

export const dataMyPost = createAsyncThunk(
  "item/MyAdminPost",
  async thunkAPI => {
    try {
      const response = await PostsApi.getMyPosts()
      const data = await response.data
      if (response.status === 200) {
        return data
      }
    } catch (err) {
      throw err
    }
  }
)

const myPostSlice = createSlice({
  name: "myPost",
  initialState: {
    dataPost: {},
    isSuccess: false,
    isError: false
  },
  reducers: {},
  extraReducers: {
    [dataMyPost.fulfilled.type]: (state, { payload }) => {
      state.dataPost = payload
      state.isSuccess = true

      return state
    },
    [dataMyPost.rejected.type]: state => {
      state.isError = false
      return state
    }
  }
})

const { reducer: myPostReducer } = myPostSlice

export default myPostReducer

export const myPostSelector = state => state.myPost
