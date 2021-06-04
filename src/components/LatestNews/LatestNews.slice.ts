import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import PostsApi from "src/apis/posts.api"

export const getLatestNews = createAsyncThunk(
  "lastsNews/posts",
  async thunkAPI => {
    try {
      const response = await PostsApi.getLatestNews()
      if (response.status === 200) {
        return response.data
      }
    } catch (err) {
      throw err
    }
  }
)

const latestNewsSlice = createSlice({
  name: "latestNewsPosts",
  initialState: {
    current: {},
    isSuccess: false
  },
  reducers: {},
  extraReducers: {
    [getLatestNews.fulfilled.type]: (state, { payload }) => {
      state.isSuccess = true
      state.current = payload.posts
      return state
    }
  }
})

const { reducer: latestNewsReducer } = latestNewsSlice

export default latestNewsReducer
export const latestNewsPostsSelector = state => state.latestNewsPosts
