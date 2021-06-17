import React from "react"
import { Redirect, Route } from "react-router-dom"
import LayoutAdmin from "src/container/components/Layouts/LayoutAdmin"
import { PATH } from "src/services/constants/path"
import { isAdmin } from "src/services/helpers/isAuthen"

const PrivateAdminRoute = ({ component, token, role, ...rest }: any) => {
  const checkRole = isAdmin()
  return (
    <Route
      {...rest}
      render={props =>
        checkRole ? (
          <LayoutAdmin childComp={component} />
        ) : (
          <Redirect to={PATH.HOME} />
        )
      }
    />
  )
}

export default PrivateAdminRoute
