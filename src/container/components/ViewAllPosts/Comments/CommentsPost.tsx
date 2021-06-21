import React, { useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { Button, Comment, Form } from "semantic-ui-react"
import { MSG } from "src/services/constants/showMsg"
import LocalStorageService from "src/services/LocalStorageService/Storage.service"
import { useAppDispatch } from "src/redux/store/hooks"
import {
  addComment,
  createCommentPost
} from "../../../../redux/slices/allPostsSlice/Posts.slice"
import CommentsItem from "./CommentsItem/CommentsItem"

const CommentsPost = props => {
  const { email, avatar, comments, postId, name } = props
  console.log(comments)

  const [userComment, setUserComment] = useState<string>("")
  const dispatch = useAppDispatch()

  const onChangeComment = e => {
    setUserComment(e.target.value)
  }

  const HandleChangeComment = (postId: string, value: string) => {
    let accessToken = LocalStorageService.getItem("accessToken")
    const createAt = JSON.parse(JSON.stringify({ date: new Date() }))
    let data = {
      post: postId,
      body: value,
      createdAt: createAt.date,
      user: {
        avatar: avatar,
        email: email,
        name: name
      }
    }
    const params = {
      _id: postId,
      body: value
    }

    if (accessToken) {
      dispatch(createCommentPost(params))
      dispatch(addComment(data))

      setUserComment("")
    } else {
      toast.error(MSG.NOT_LOGIN_ERROR)
    }
  }
  return (
    <Comment.Group className="mr-0" id="comments">
      {Object.keys(comments).length !== 0 &&
        comments.map((el, i) => (
          <CommentsItem {...el} key={"comment-item-" + i} />
        ))}
      <Form reply>
        <Form.TextArea onChange={onChangeComment} value={userComment} />
        <Button
          type="submit"
          content="Add Comment"
          labelPosition="left"
          icon="edit"
          primary
          onClick={() => HandleChangeComment(postId, userComment)}
        />
      </Form>
      <Toaster position="bottom-right" reverseOrder={false} />
    </Comment.Group>
  )
}

export default CommentsPost
