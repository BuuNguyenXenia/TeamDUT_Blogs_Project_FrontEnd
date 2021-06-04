import React from "react"
import { Button, Comment, Form } from "semantic-ui-react"
import CommentsItem from "./CommentsItem/CommentsItem"

const CommentsPost = () => (
  <Comment.Group className="mr-0">
    <CommentsItem />
    <CommentsItem />
    <CommentsItem />
    <CommentsItem />
    <CommentsItem />
    <CommentsItem />

    <Form reply>
      <Form.TextArea />
      <Button content="Add Comment" labelPosition="left" icon="edit" primary />
    </Form>
  </Comment.Group>
)

export default CommentsPost
