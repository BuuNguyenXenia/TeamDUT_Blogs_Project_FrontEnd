import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import PostsApi from "src/apis/posts.api"
import LocalStorageService from "src/services/LocalStorageService/Storage.service"

export const getDataSearchPosts = createAsyncThunk(
  "search/posts",
  async (value: string, thunkAPI) => {
    try {
      LocalStorageService.setItem("keySearch", value)
      const response = await PostsApi.searchPosts(value)
      const data = await response.data
      data.valueSearch = value

      if (response.status === 200) {
        return data
      } else {
        return thunkAPI.rejectWithValue(data)
      }
    } catch (err) {
      throw err
    }
  }
)

const searchPostsSlice = createSlice({
  name: "dataSearch",
  initialState: {
    data: {},
    isSuccess: false,
    isError: false,
    isFetching: false
  },
  reducers: {},
  extraReducers: {
    [getDataSearchPosts.fulfilled.type]: (state, { payload }) => {
      state.data = payload
      state.isSuccess = true
      state.isError = false
      state.isFetching = false
      return state
    },
    [getDataSearchPosts.rejected.type]: state => {
      state.isSuccess = false
      state.isError = true
      state.isFetching = false
      return state
    },
    [getDataSearchPosts.pending.type]: state => {
      state.isSuccess = false
      state.isError = false
      state.isFetching = true
    }
  }
})

const { reducer: searchReducer } = searchPostsSlice

export default searchReducer
export const searchPostsSelector = state => state.dataSearch
