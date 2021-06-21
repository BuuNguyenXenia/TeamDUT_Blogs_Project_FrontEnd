import React from "react"
import { Route } from "react-router-dom"
import Layouts from "src/container/components/Layouts/Layouts"

export const LayoutRoute = ({ component, checkHome, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={props => <Layouts childComp={component} check={checkHome} />}
    />
  )
}
