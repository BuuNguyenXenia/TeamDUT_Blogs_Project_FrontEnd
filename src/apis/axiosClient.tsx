// api/axiosClient.js
import axios from "axios"
import queryString from "query-string"
import LocalStorageService from "src/services/LocalStorageService/Storage.service"

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request-config` for the full list of configs
// "https://app-xenia.herokuapp.com/api"

const axiosClient = axios.create({
  baseURL: "https://app-xenia.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json"
  },
  paramsSerializer: params => queryString.stringify(params)
})
axiosClient.interceptors.request.use(async config => {
  // Handle token here ...
  let refresh = LocalStorageService.getItem<string>("refreshToken")
  let accessToken = LocalStorageService.getItem<string>("accessToken")
  if (accessToken) {
    config.headers = {
      "x-refresh": refresh,
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json"
    }
  }

  return config
})
axiosClient.interceptors.response.use(
  response => {
    return response
  },
  error => {
    // Handle errors
    throw error
  }
)
export default axiosClient
