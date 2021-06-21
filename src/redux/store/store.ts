import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import popularPostsReducer from "src/redux/slices/popularPostsSlice/PopularPost.slice"
import userReducer from "../slices/userSlice/User.slice"
import latestDealsReducer from "src/redux/slices/latestDealsSlice/LatestDeals.slice"
import lastNewsReducer from "src/redux/slices/latestNewsSlice/LatestNews.slice"
import featuredReducer from "src/redux/slices/featuredSlice/Featured.slice"
import reviewsReducer from "src/redux/slices/reviewsSlice/Reviews.slice"
import searchReducer from "src/container/pages/SearchPage/Search.slice"
import itemPostReducer from "src/redux/slices/allPostsSlice/Posts.slice"
import postsManageReducer from "src/redux/slices/PostsManageSlice/PostsManage.slice"
import notificationReducer from "src/redux/slices/notificationSlice/Notification.slice"
const rootReducer = {
  user: userReducer,
  dataSearch: searchReducer,
  itemPost: itemPostReducer,
  reviewsPosts: reviewsReducer,
  featuredPosts: featuredReducer,
  postsManage: postsManageReducer,
  latestNewsPosts: lastNewsReducer,
  popularPosts: popularPostsReducer,
  latestDealsPosts: latestDealsReducer,
  notificationPost: notificationReducer
}

export const store = configureStore({
  reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
