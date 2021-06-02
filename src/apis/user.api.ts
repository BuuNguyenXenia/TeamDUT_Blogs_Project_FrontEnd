import axiosClient from "./axiosClient"

const userApi = {
  getToken: params => {
    const url = "/sessions"
    return axiosClient.post(url, params)
  },

  Register: params => {
    const url = "/users"
    return axiosClient.post(url, params)
  }
}

export default userApi
