import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import popularPostsReducer from "src/components/PopularPosts/PopularPost.slice"
import userReducer from "../pages/User/User.slice"
import latestDealsReducer from "src/components/LatestDeals/LatestDeals.slice"
import lastNewsReducer from "src/components/LatestNews/LatestNews.slice"
import featuredReducer from "src/components/Featured/Featured.slice"
import reviewsReducer from "src/components/Reviews/Reviews.slice"
const rootReducer = {
  user: userReducer,
  popularPosts: popularPostsReducer,
  latestDealsPosts: latestDealsReducer,
  latestNewsPosts: lastNewsReducer,
  featuredPosts: featuredReducer,
  reviewsPosts: reviewsReducer
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
