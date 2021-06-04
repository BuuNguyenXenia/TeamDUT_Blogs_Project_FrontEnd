import axiosClient from "./axiosClient"

const PostsApi = {
  getPosts: params => {
    const url = "/api/posts"
    return axiosClient.post(url, { params })
  },
  get: id => {
    const url = `/posts/${id}`
    return axiosClient.get(url)
  },
  getPopularPosts: () => {
    const url = "/posts?per_page=3&sort_by=+like"
    return axiosClient.get(url)
  },
  getLatestDeals: () => {
    const url = "/posts?per_page=4&sort_by=-createdAt"
    return axiosClient.get(url)
  },
  getLatestNews: () => {
    const url = "/posts?page=1"
    return axiosClient.get(url)
  },
  getFeatured: () => {
    const url = "/posts?per_page=3&sort_by=+comment"
    return axiosClient.get(url)
  },
  getReviews: () => {
    const url = "/posts?per_page=4&sort_by=-createdAt"
    return axiosClient.get(url)
  }
}

export default PostsApi
