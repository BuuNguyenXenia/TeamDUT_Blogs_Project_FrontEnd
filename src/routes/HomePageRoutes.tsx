import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import { PATH } from "src/constants/path"
import Loading from "src/components/Loading/Loading"
const HomePage = lazy(() => import("src/pages/HomePage/HomePage"))

export default function HomeRoutes() {
  return (
    <Switch>
      <Route
        exact
        path={PATH.HOME}
        component={() => (
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        )}
      />
    </Switch>
  )
}
