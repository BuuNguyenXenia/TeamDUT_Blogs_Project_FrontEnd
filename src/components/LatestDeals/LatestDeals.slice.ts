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
    isSuccess: false
  },
  reducers: {},
  extraReducers: {
    [getLatestDealsPosts.fulfilled.type]: (state, { payload }) => {
      state.isSuccess = true
      state.current = payload.posts
      return state
    }
  }
})

const { reducer: latestDealsReducer } = latestDealsPostsSlice

export default latestDealsReducer
export const latestDealsPostsSelector = state => state.latestDealsPosts
