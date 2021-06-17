import LocalStorageService from "src/services/LocalStorageService/Storage.service"
import jwt from "jsonwebtoken"

const secret = process.env.REACT_APP_JWT_SECRET
export const authenticated = () => {
  const Token = LocalStorageService.getItem("accessToken")
  if (Token) return true
  else return false
}

export const setToken = role => {
  var roleUser = jwt.sign({ role }, secret)
  LocalStorageService.setItem("role", roleUser)
}

export const isAdmin = () => {
  const role = LocalStorageService.getItem("role")
  const token = LocalStorageService.getItem("accessToken")
  var decoded = jwt.verify(role, secret)
  console.log(decoded)

  if (decoded.role === "admin" && token) return true
  else return false
}

export const clearToken = () => {
  LocalStorageService.removeItem("accessToken")
  LocalStorageService.removeItem("refreshToken")
  LocalStorageService.removeItem("role")
}
