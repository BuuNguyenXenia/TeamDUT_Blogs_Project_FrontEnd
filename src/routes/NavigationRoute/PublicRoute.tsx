import React from "react"
import { Route, Redirect } from "react-router-dom"
import { PATH } from "src/constants/path"
import LocalStorageService from "src/services/LocalStorageService/Storage.service"

const PublicRoute = ({ component: Component, restricted, ...rest }: any) => {
  const accessToken = LocalStorageService.getItem("accessToken")
  return (
    <Route
      {...rest}
      render={props =>
        accessToken && restricted ? (
          <Redirect to={PATH.HOME} />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

export default PublicRoute
