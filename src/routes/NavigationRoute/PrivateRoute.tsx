import React from "react"
import { Redirect, Route } from "react-router-dom"
import Layouts from "src/container/components/Layouts/Layouts"
import { PATH } from "src/services/constants/path"
import { authenticated } from "src/services/helpers/isAuthen"

const PrivateRoute = ({ component, ...rest }: any) => {
  const isLogin = authenticated()
  return (
    <Route
      {...rest}
      render={props =>
        !isLogin ? (
          <Redirect to={PATH.HOME} />
        ) : (
          <Layouts childComp={component} check={false} />
        )
      }
    />
  )
}

export default PrivateRoute
