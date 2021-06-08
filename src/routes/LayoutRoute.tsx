import React from "react"
import { Route } from "react-router"
import Layouts from "src/components/Layouts/Layouts"

export const LayoutRoute = ({ component, ...rest }: any) => {
  return <Route {...rest} render={props => <Layouts childComp={component} />} />
}
