import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import PostsApi from "src/apis/posts.api"
import { MSG } from "src/constants/showMsg"
import LocalStorageService from "src/services/LocalStorageService/Storage.service"

export const itemPostThunk = createAsyncThunk(
  "item/post",
  async (_id: string, thunkAPI) => {
    try {
      const response = await PostsApi.getItemPosts(_id)
      const data = await response.data
      if (response.status === 200) {
        console.log(data)

        LocalStorageService.setItem("itemPost", data)
        return data
      } else {
        return thunkAPI.rejectWithValue(data)
      }
    } catch (err) {
      throw err
    }
  }
)

interface Comment {
  _id: string
  body: string
}

export const createCommentPost = createAsyncThunk(
  "post/comment",
  async (comment: Comment, thunkAPI) => {
    try {
      const _id = comment._id
      const body = {
        body: comment.body
      }
      const response = await PostsApi.createComment(_id, body)
      const data = await response.data
      if (response.status === 200) {
        LocalStorageService.setItem("itemPost", _id)
        return data
      } else {
        return thunkAPI.rejectWithValue(data)
      }
    } catch (err) {
      throw err
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
      console.log(data)

      if (response.status === 200) {
        toast.success(MSG.CREATE_NEW_POST_SUCCESS)
        return data
      }
    } catch (err) {
      toast.error(MSG.CREATE_NEW_POST_ERROR)
    }
  }
)

export const createLikePost = createAsyncThunk(
  "post/like",
  async (_id: string, thunkAPI) => {
    try {
      const response = await PostsApi.createLike(_id)
      const data = await response.data
      if (response.status === 200) {
        LocalStorageService.setItem("itemPost", data)
        console.log(data)

        return data
      } else {
        return thunkAPI.rejectWithValue(data)
      }
    } catch (err) {
      throw err
    }
  }
)

const postsSlice = createSlice({
  name: "itemPost",
  initialState: {
    dataPost: {},
    isSuccess: false,
    isError: false
  },
  reducers: {
    clearState: state => {
      state.isError = false
      state.isSuccess = false

      return state
    }
  },
  extraReducers: {
    [itemPostThunk.fulfilled.type]: (state, { payload }) => {
      state.dataPost = payload
      state.isSuccess = true

      return state
    },
    [itemPostThunk.rejected.type]: state => {
      state.isError = false
      return state
    },

    [createCommentPost.fulfilled.type]: (state, { payload }) => {
      state.dataPost = payload
      return state
    },
    [createCommentPost.rejected.type]: state => {
      return state
    },

    [createLikePost.fulfilled.type]: (state, { payload }) => {
      state.dataPost = payload
      return state
    },
    [createLikePost.rejected.type]: state => {
      return state
    }
  }
})

const { reducer: itemPostReducer } = postsSlice

export default itemPostReducer

export const { clearState } = postsSlice.actions
export const itemPostSelector = state => state.itemPost
