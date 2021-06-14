import React from "react"
import { Redirect, Route } from "react-router"
import LayoutAdmin from "src/components/Layouts/LayoutAdmin"
import { PATH } from "src/constants/path"
import { userSelector } from "src/pages/User/User.slice"
import LocalStorageService from "src/services/LocalStorageService/Storage.service"
import { useAppSelector } from "src/store/hooks"

const PrivateAdminRoute = ({ component, ...rest }: any) => {
  const accessToken = LocalStorageService.getItem("accessToken")
  const user = useAppSelector(userSelector)
  console.log(!accessToken, user.role)

  return (
    <Route
      {...rest}
      render={props =>
        user.role === "admin" && accessToken ? (
          <LayoutAdmin childComp={component} />
        ) : (
          <Redirect to={PATH.HOME} />
        )
      }
    />
  )
}

export default PrivateAdminRoute
