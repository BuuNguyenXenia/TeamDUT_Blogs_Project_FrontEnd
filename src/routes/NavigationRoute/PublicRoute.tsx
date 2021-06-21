import React from "react"
import { Route, Redirect } from "react-router-dom"
import { PATH } from "src/services/constants/path"
import { authenticated } from "src/services/helpers/isAuthen"

const PublicRoute = ({ component: Component, restricted, ...rest }: any) => {
  const isLogin: any = authenticated()

  return (
    <Route
      {...rest}
      render={props =>
        isLogin && restricted ? (
          <Redirect to={PATH.HOME} />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

export default PublicRoute
