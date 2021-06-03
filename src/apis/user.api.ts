import axiosClient from "./axiosClient"

const userApi = {
  getToken: params => {
    const url = "/sessions"
    return axiosClient.post(url, params)
  },
  currentUser: () => {
    const url = "/users"
    return axiosClient.get(url)
  },
  register: params => {
    const url = "/users"
    return axiosClient.post(url, params)
  },
  logOut: () => {
    const url = "/sessions"
    return axiosClient.delete(url)
  }
}

export default userApi
