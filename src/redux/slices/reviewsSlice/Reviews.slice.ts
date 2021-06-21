import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import PostsApi from "src/apis/posts.api"

export const getReviewsPosts = createAsyncThunk(
  "reviews/posts",
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
  name: "reviewPosts",
  initialState: {
    current: {},
    isSuccess: false,
    isFetching: false
  },
  reducers: {},
  extraReducers: {
    [getReviewsPosts.fulfilled.type]: (state, { payload }) => {
      state.isSuccess = true
      state.isFetching = false
      state.current = payload.posts
      return state
    },
    [getReviewsPosts.rejected.type]: (state, { payload }) => {
      state.isSuccess = false
      state.isFetching = false
    },
    [getReviewsPosts.pending.type]: (state, { payload }) => {
      state.isSuccess = false
      state.isFetching = true
    }
  }
})

const { reducer: reviewsReducer } = reviewsSlice

export default reviewsReducer
export const reviewsPostsSelector = state => state.reviewsPosts
