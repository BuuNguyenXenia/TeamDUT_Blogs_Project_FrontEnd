import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import PostsApi from "src/apis/posts.api"

export const getLatestNews = createAsyncThunk(
  "lastsNews/posts",
  async (page: number, thunkAPI) => {
    try {
      const response = await PostsApi.getLatestNews(page)
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
    isSuccess: false,
    count: 0,
    lastPage: 0
  },
  reducers: {},
  extraReducers: {
    [getLatestNews.fulfilled.type]: (state, { payload }) => {
      state.current = payload.posts
      state.count = payload.count
      state.lastPage = payload.last_page
      state.isSuccess = true

      return state
    }
  }
})

const { reducer: latestNewsReducer } = latestNewsSlice

export default latestNewsReducer
export const latestNewsPostsSelector = state => state.latestNewsPosts
