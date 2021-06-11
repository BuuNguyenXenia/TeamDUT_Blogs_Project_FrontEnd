import React from "react"
import { Redirect, Route } from "react-router"
import Layouts from "src/components/Layouts/Layouts"
import { PATH } from "src/constants/path"
import LocalStorageService from "src/services/LocalStorageService/Storage.service"

const PrivateRoute = ({ component, ...rest }: any) => {
  const accessToken = LocalStorageService.getItem("accessToken")
  return (
    <Route
      {...rest}
      render={props =>
        !accessToken ? (
          <Redirect to={PATH.HOME} />
        ) : (
          <Layouts childComp={component} />
        )
      }
    />
  )
}

export default PrivateRoute
