import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import popularPostsReducer from "src/components/PopularPosts/PopularPost.slice"
import userReducer from "../pages/User/User.slice"
import latestDealsReducer from "src/components/LatestDeals/LatestDeals.slice"
import lastNewsReducer from "src/components/LatestNews/LatestNews.slice"
import featuredReducer from "src/components/Featured/Featured.slice"
import reviewsReducer from "src/components/Reviews/Reviews.slice"
import searchReducer from "src/pages/SearchPage/Search.slice"
import itemPostReducer from "src/components/ViewAllPosts/Posts.slice"
import myPostReducer from "src/pages/Admin/MyPost.slice"
const rootReducer = {
  user: userReducer,
  popularPosts: popularPostsReducer,
  latestDealsPosts: latestDealsReducer,
  latestNewsPosts: lastNewsReducer,
  featuredPosts: featuredReducer,
  reviewsPosts: reviewsReducer,
  dataSearch: searchReducer,
  itemPost: itemPostReducer,
  myPost: myPostReducer
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
