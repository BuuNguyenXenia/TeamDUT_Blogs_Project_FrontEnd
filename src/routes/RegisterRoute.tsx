import React from "react"
import { Switch } from "react-router-dom"
import { PATH } from "src/constants/path"
import PublicRoute from "./NavigationRoute/PublicRoute"
import Register from "src/pages/Register/Register"
import CheckMailRegister from "src/pages/ResetPassword/CheckMail/CheckMailRegister"

export default function RegisterRoute() {
  return (
    <React.Fragment>
      <Switch>
        <PublicRoute
          restricted={true}
          component={Register}
          path={PATH.REGISTER}
        />
      </Switch>
      <Switch>
        <PublicRoute
          restricted={true}
          component={CheckMailRegister}
          path={PATH.CHECK_MAIL_REGISTER}
        />
      </Switch>
    </React.Fragment>
  )
}
