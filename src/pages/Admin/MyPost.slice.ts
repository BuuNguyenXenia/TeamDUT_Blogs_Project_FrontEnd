import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import PostsApi from "src/apis/posts.api"
import { MSG } from "src/constants/showMsg"

export const dataMyPost = createAsyncThunk(
  "item/MyAdminPost",
  async (page: number, thunkAPI) => {
    try {
      const response = await PostsApi.getMyPosts(page)
      const data = await response.data
      if (response.status === 200) {
        return data
      }
    } catch (err) {
      throw err
    }
  }
)

interface updatePosts {
  postId: string
  title: string
  body: string
  image: string
}

export const editPost = createAsyncThunk(
  "post/edit",
  async (params: updatePosts, thunkAPI) => {
    try {
      const postId = params.postId

      const bodyPost = {
        title: params.title,
        body: params.body,
        image: params.image
      }
      const response = await PostsApi.updatePost(postId, bodyPost)
      const data = await response.data

      if (response.status === 200) {
        toast.success(MSG.EDIT_POST_SUCCESS)
        return data
      }
    } catch (err) {
      toast.error(MSG.EDIT_POST_ERROR)
    }
  }
)

interface newPost {
  title: string
  body: string
  image: string
}

export const createNewPost = createAsyncThunk(
  "post/newPost",
  async (params: newPost, thunkAPI) => {
    try {
      const response = await PostsApi.createPost(params)
      const data = await response.data

      if (response.status === 200) {
        toast.success(MSG.CREATE_NEW_POST_SUCCESS)
        return data
      }
    } catch (err) {
      toast.error(MSG.CREATE_NEW_POST_ERROR)
    }
  }
)

const myPostSlice = createSlice({
  name: "myPost",
  initialState: {
    dataPost: {},
    isSuccess: false,
    isError: false,
    isFetching: false
  },
  reducers: {},
  extraReducers: {
    [dataMyPost.fulfilled.type]: (state, { payload }) => {
      state.dataPost = payload
      state.isSuccess = true

      return state
    },
    [dataMyPost.rejected.type]: state => {
      state.isError = false
      state.isSuccess = false
      return state
    },
    [createNewPost.fulfilled.type]: (state, { payload }) => {
      state.isSuccess = true
      state.isFetching = false
      return state
    },
    [createNewPost.rejected.type]: state => {
      state.isSuccess = false
      state.isFetching = false
      return state
    },
    [createNewPost.pending.type]: state => {
      state.isFetching = true
      return state
    },

    [editPost.fulfilled.type]: (state, { payload }) => {
      state.isSuccess = true
      state.isFetching = false
      return state
    },
    [editPost.rejected.type]: state => {
      state.isSuccess = false
      state.isFetching = false
      return state
    },
    [editPost.pending.type]: state => {
      state.isFetching = true
      return state
    }
  }
})

const { reducer: myPostReducer } = myPostSlice

export default myPostReducer
export const myPostSelector = state => state.myPost
