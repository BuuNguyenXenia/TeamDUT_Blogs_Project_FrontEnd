import React from "react"
import { BrowserRouter } from "react-router-dom"
import HomePageRoutes from "./HomePageRoutes"
import LoginRoute from "./LoginRoute"
import RegisterRoute from "./RegisterRoute"
import ScrollTopRoute from "./ScrollTopRoute"

export default function Routes() {
  return (
    <BrowserRouter>
      <ScrollTopRoute />
      <HomePageRoutes />
      <LoginRoute />
      <RegisterRoute />
    </BrowserRouter>
  )
}
