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
  },
  forgotPassword: params => {
    const url = "/forgot-password"
    return axiosClient.put(url, params)
  },
  resetPassword: params => {
    const url = "/reset-password"
    return axiosClient.put(url, params)
  },
  updateUserName: (name, params) => {
    const url = `/users/${name}`
    return axiosClient.put(url, params)
  },
  updatePassword: (name, params) => {
    const url = `/password/${name}`
    return axiosClient.put(url, params)
  }
}

export default userApi
