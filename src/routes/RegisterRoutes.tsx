import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import { PATH } from "src/constants/path"
import Loading from "src/components/Loading/Loading"
const Register = lazy(() => import("src/pages/Register/Register"))

export default function HomeRoutes() {
  return (
    <Switch>
      <Route
        path={PATH.REGISTER}
        component={() => (
          <Suspense fallback={<Loading />}>
            <Register />
          </Suspense>
        )}
      />
    </Switch>
  )
}
