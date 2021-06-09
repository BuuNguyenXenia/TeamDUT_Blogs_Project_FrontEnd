// api/axiosClient.js
import axios from "axios"

const axiosUpload = axios.create({
  baseURL: "https://api.cloudinary.com/v1_1/rhy123",
  headers: { "X-Requested-With": "XMLHttpRequest" }
})
axiosUpload.interceptors.request.use(async config => {
  // Handle token here ...

  return config
})
axiosUpload.interceptors.response.use(
  response => {
    return response
  },
  error => {
    // Handle errors
    throw error
  }
)
export default axiosUpload
