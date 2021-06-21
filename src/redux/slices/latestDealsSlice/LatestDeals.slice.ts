import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import PostsApi from "src/apis/posts.api"

export const getLatestDealsPosts = createAsyncThunk(
  "latestDeals/posts",
  async thunkAPI => {
    try {
      const response = await PostsApi.getLatestDeals()
      if (response.status === 200) {
        return response.data
      }
    } catch (err) {
      throw err
    }
  }
)

const latestDealsPostsSlice = createSlice({
  name: "latestDealsPosts",
  initialState: {
    current: {},
    isSuccess: false,
    isFetching: false
  },
  reducers: {},
  extraReducers: {
    [getLatestDealsPosts.fulfilled.type]: (state, { payload }) => {
      state.isSuccess = true
      state.isFetching = false
      state.current = payload.posts
      return state
    },
    [getLatestDealsPosts.rejected.type]: (state, { payload }) => {
      state.isSuccess = false
      state.isFetching = false
    },
    [getLatestDealsPosts.pending.type]: (state, { payload }) => {
      state.isSuccess = false
      state.isFetching = true
    }
  }
})

const { reducer: latestDealsReducer } = latestDealsPostsSlice

export default latestDealsReducer
export const latestDealsPostsSelector = state => state.latestDealsPosts
