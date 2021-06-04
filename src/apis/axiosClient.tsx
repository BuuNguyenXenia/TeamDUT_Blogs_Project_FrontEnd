// api/axiosClient.js
import axios from "axios"
import queryString from "query-string"
import LocalStorageService from "src/services/LocalStorageService/Storage.service"

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request-config` for the full list of configs

let refresh = LocalStorageService.getItem<string>("refresh")
let accessToken = "Bearer " + LocalStorageService.getItem<string>("accessToken")

const axiosClient = axios.create({
  baseURL: "https://app-xenia.herokuapp.com/api",
  headers: {
    "x-refresh": refresh,
    Authorization: accessToken,
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest"
  },
  paramsSerializer: params => queryString.stringify(params)
})
axiosClient.interceptors.request.use(async config => {
  // Handle token here ...
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
