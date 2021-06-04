import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import PostsApi from "src/apis/posts.api"

export const getReviewsPosts = createAsyncThunk(
  "lastsNews/posts",
  async thunkAPI => {
    try {
      const response = await PostsApi.getReviews()
      if (response.status === 200) {
        return response.data
      }
    } catch (err) {
      throw err
    }
  }
)

const reviewsSlice = createSlice({
  name: "latestNewsPosts",
  initialState: {
    current: {},
    isSuccess: false
  },
  reducers: {},
  extraReducers: {
    [getReviewsPosts.fulfilled.type]: (state, { payload }) => {
      state.isSuccess = true
      state.current = payload.posts
      return state
    }
  }
})

const { reducer: reviewsReducer } = reviewsSlice

export default reviewsReducer
export const reviewsPostsSelector = state => state.reviewsPosts
