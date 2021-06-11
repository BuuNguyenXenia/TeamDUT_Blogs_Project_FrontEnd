import React from "react"
import { Switch } from "react-router-dom"
import { PATH } from "src/constants/path"
import PublicRoute from "./NavigationRoute/PublicRoute"
import Login from "src/pages/Login/Login"
import CheckMailPassword from "src/pages/ResetPassword/CheckMail/CheckMailPassword"
import ResetPassword from "src/pages/ResetPassword/ResetPassword"
import SendEmail from "src/pages/ResetPassword/SendEmail/SendEmail"

export default function LoginRoute() {
  return (
    <React.Fragment>
      <Switch>
        <PublicRoute restricted={true} component={Login} path={PATH.LOGIN} />
      </Switch>
      <Switch>
        <PublicRoute
          restricted={true}
          component={CheckMailPassword}
          path={PATH.CHECK_MAIL_PASSWORD}
        />
      </Switch>
      <Switch>
        <PublicRoute
          restricted={true}
          component={ResetPassword}
          path={PATH.RESET_PASSWORD}
        />
      </Switch>
      <Switch>
        <PublicRoute
          restricted={true}
          component={SendEmail}
          path={PATH.SEND_EMAIL}
        />
      </Switch>
    </React.Fragment>
  )
}
