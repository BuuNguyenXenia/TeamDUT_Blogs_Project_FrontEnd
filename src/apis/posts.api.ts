import axiosClient from "./axiosClient"

const PostsApi = {
  getPosts: params => {
    const url = "/api/posts"
    return axiosClient.post(url, { params })
  },
  get: id => {
    const url = `/posts/${id}`
    return axiosClient.get(url)
  }
}

export default PostsApi
