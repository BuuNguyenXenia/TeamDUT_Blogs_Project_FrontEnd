import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import PostsApi from "src/apis/posts.api"

export const getPopularPosts = createAsyncThunk(
  "popular/posts",
  async thunkAPI => {
    try {
      const response = await PostsApi.getPopularPosts()
      let data = await response.data
      if (response.status === 200) {
        return data
      }
    } catch (err) {
      throw err
    }
  }
)

const popularPostsSlice = createSlice({
  name: "popularPosts",
  initialState: {
    current: {},
    isSuccess: false
  },
  reducers: {},
  extraReducers: {
    [getPopularPosts.fulfilled.type]: (state, { payload }) => {
      state.isSuccess = true
      state.current = payload.posts
      return state
    }
  }
})

const { reducer: popularPostsReducer } = popularPostsSlice

export default popularPostsReducer
export const popularPostsSelector = state => state.popularPosts
