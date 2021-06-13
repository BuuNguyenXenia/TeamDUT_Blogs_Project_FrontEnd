interface ItemPost {
  body: string
  comments: object
  createdAt: string
  likes: object
  postId: string
  title: string
  updatedAt: string
  user: string
  _id: string
}

// interface newPost {
//   title: string,
//   body: string,
//   image: string
// }

interface RouteParams {
  postId: string
}