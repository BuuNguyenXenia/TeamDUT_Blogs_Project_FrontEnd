import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom"
import { PATH } from "src/constants/path"
import ViewAllPosts from "src/components/ViewAllPosts/ViewAllPosts"
import ViewPostsItem from "src/components/ViewAllPosts/ViewPostsItem/ViewPostsItem"
import SearchPage from "src/pages/SearchPage/SearchPage"
import { useAppSelector } from "src/store/hooks"
import { itemPostSelector } from "src/components/ViewAllPosts/Posts.slice"
import { urlPostItem } from "src/common/Handle/handlePosts"
import LocalStorageService from "src/services/LocalStorageService/Storage.service"
import Profile from "src/components/Profile/Profile"
import Settings from "src/components/Settings/Settings"
import HomePage from "src/pages/HomePage/HomePage"
import { LayoutRoute } from "./LayoutRoute"
import NotFoundPage from "src/pages/NotFoundPage/NotFoundPage"
import PrivateRoute from "./NavigationRoute/PrivateRoute"

export default function HomePageRoutes() {
  const { isSuccess, dataPost } = useAppSelector(itemPostSelector)
  const url = LocalStorageService.getItem<string>("urlPost")
  var PATH_URL = "/"
  if (url) {
    PATH_URL = urlPostItem(url)
  }

  const [urlPost, setUrlPost] = useState<string>(PATH_URL)

  useEffect(() => {
    if (isSuccess) {
      setUrlPost(urlPostItem(dataPost.title))
    }
  }, [isSuccess])

  return (
    <Switch>
      <Route exact path={PATH.HOME}>
        <HomePage />
      </Route>
      <LayoutRoute path={PATH.ALL_POSTS} component={<ViewAllPosts />} />
      <LayoutRoute path={PATH.SEARCH_POST} component={<SearchPage />} />
      <PrivateRoute path={PATH.USER_PROFILE} component={<Profile />} />
      <PrivateRoute path={PATH.USER_SETTINGS} component={<Settings />} />
      <LayoutRoute path={urlPost} component={<ViewPostsItem />} />
      <Route exact path={PATH.NOT_FOUND}>
        <NotFoundPage />
      </Route>
    </Switch>
  )
}
