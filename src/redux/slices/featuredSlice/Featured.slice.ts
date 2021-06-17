import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import PostsApi from "src/apis/posts.api"

export const getFeaturedPosts = createAsyncThunk(
  "featured/posts",
  async thunkAPI => {
    try {
      const response = await PostsApi.getFeatured()
      if (response.status === 200) {
        return response.data
      }
    } catch (err) {
      throw err
    }
  }
)

const featuredSlice = createSlice({
  name: "featuredPosts",
  initialState: {
    current: {},
    isSuccess: false,
    isFetching: false
  },
  reducers: {},
  extraReducers: {
    [getFeaturedPosts.fulfilled.type]: (state, { payload }) => {
      state.isSuccess = true
      state.isFetching = false
      state.current = payload.posts
      return state
    },
    [getFeaturedPosts.rejected.type]: (state, { payload }) => {
      state.isFetching = false
    },
    [getFeaturedPosts.pending.type]: (state, { payload }) => {
      state.isFetching = true
    }
  }
})

const { reducer: featuredReducer } = featuredSlice

export default featuredReducer
export const featuredPostsSelector = state => state.featuredPosts
