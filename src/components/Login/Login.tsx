import React, { Component } from "react"
import LoginModal from "react-login-modal"

export function Login() {
  const handleSignup = (username, email, password) => {}
  const handleLogin = (username, password) => {}

  return (
    <LoginModal
      handleSignup={handleSignup}
      handleLogin={handleLogin}
      buttonColor={"#52AE64"}
      disabledButtonColor={"#C7E4CD"}
      buttonHoverColor={"#A7D5B0"}
      fontFamily={"roboto"}
      errorMessage={"Incorrect username or password"}
      errorEnable={true}
    />
  )
}
