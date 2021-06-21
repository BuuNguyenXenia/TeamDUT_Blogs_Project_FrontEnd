import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import PostsApi from "src/apis/posts.api"
import { MSG } from "src/services/constants/showMsg"

export const dataMyPost = createAsyncThunk(
  "item/MyAdminPost",
  async (page: number, thunkAPI) => {
    try {
      const response = await PostsApi.getMyPosts(page)
      console.log(response)

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
      if (params.image.length > 0) {
        const response = await PostsApi.createPost(params)
        const data = await response.data

        if (response.status === 200) {
          toast.success(MSG.CREATE_NEW_POST_SUCCESS)
          return data
        }
      } else {
        const paramsPost = {
          title: params.title,
          body: params.body
        }
        const response = await PostsApi.createPost(paramsPost)
        const data = await response.data

        if (response.status === 200) {
          toast.success(MSG.CREATE_NEW_POST_SUCCESS)
          return data
        }
      }
    } catch (err) {
      toast.error(MSG.CREATE_NEW_POST_ERROR)
    }
  }
)

const postsManageSlice = createSlice({
  name: "postsManage",
  initialState: {
    dataPost: {},
    isSuccess: false,
    isError: false,
    isFetching: false
  },
  reducers: {
    deletePostAdmin: (state: any, action) => {
      let index = state.dataPost.posts.findIndex(
        el => el.postId === action.payload
      )
      state.dataPost.posts.splice(index, 1)
      return state
    },
    editPostAdmin: (state: any, action) => {
      let index = state.dataPost.posts.findIndex(
        el => el.postId === action.payload.postId
      )
      if (index !== -1) {
        state.dataPost.posts[index].title = action.payload.title
        state.dataPost.posts[index].image = action.payload.image
        state.dataPost.posts[index].body = action.payload.body
      }
      return state
    }
  },
  extraReducers: {
    [dataMyPost.fulfilled.type]: (state, { payload }) => {
      state.dataPost = payload
      state.isError = false
      state.isSuccess = true
      state.isFetching = false

      return state
    },
    [dataMyPost.rejected.type]: state => {
      state.isError = true
      state.isSuccess = false
      state.isFetching = false
      return state
    },
    [dataMyPost.pending.type]: state => {
      state.isError = false
      state.isSuccess = false
      state.isFetching = true
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

const { reducer: postsManageReducer } = postsManageSlice

export default postsManageReducer
export const { deletePostAdmin, editPostAdmin } = postsManageSlice.actions
export const postsManageSelector = state => state.postsManage
