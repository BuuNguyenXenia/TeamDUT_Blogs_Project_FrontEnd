import React, { useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import { Button, Comment, Form } from "semantic-ui-react"
import { MSG } from "src/constants/showMsg"
import LocalStorageService from "src/services/LocalStorageService/Storage.service"
import { useAppDispatch } from "src/store/hooks"
import { createCommentPost } from "../Posts.slice"
import CommentsItem from "./CommentsItem/CommentsItem"

const CommentsPost = ({ postId, comments }) => {
  const [userComment, setUserComment] = useState<string>("")
  const dispatch = useAppDispatch()

  const onChangeComment = e => {
    setUserComment(e.target.value)
  }

  const HandleChangeComment = (postId: string, value: string) => {
    let accessToken = LocalStorageService.getItem("accessToken")
    const params = {
      _id: postId,
      body: value
    }
    if (accessToken) {
      dispatch(createCommentPost(params))
      setUserComment("")
    } else {
      toast.error(MSG.NOT_LOGIN_ERROR)
    }
  }
  return (
    <Comment.Group className="mr-0">
      {comments.data &&
        comments.data.map((el, i) => (
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
