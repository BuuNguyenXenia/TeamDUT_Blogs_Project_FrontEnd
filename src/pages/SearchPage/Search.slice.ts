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
    isError: false
  },
  reducers: {},
  extraReducers: {
    [getDataSearchPosts.fulfilled.type]: (state, { payload }) => {
      state.data = payload
      state.isSuccess = true
      return state
    },
    [getDataSearchPosts.rejected.type]: state => {
      state.isError = false
      return state
    }
  }
})

const { reducer: searchReducer } = searchPostsSlice

export default searchReducer
export const searchPostsSelector = state => state.dataSearch
