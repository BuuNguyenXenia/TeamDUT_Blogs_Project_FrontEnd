import React from "react"
import { BrowserRouter } from "react-router-dom"
import HomePageRoutes from "./HomePageRoutes"
import LoginRoutes from "./LoginRoutes"
import RegisterRoutes from "./RegisterRoutes"
export default function Routes() {
  return (
    <BrowserRouter>
      <HomePageRoutes />
      <LoginRoutes />
      <RegisterRoutes />
    </BrowserRouter>
  )
}
