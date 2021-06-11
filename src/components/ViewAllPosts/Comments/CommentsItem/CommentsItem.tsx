import React from "react"
import { Comment } from "semantic-ui-react"
import { CommentsPostItem } from "./CommentsItem.styles"
import { formatDate } from "../../../../helpers/date"

const CommentsItem = ({ username, body, createdAt }) => {
  const date = formatDate(createdAt)

  return (
    <CommentsPostItem>
      <Comment className="user-comments">
        <Comment.Avatar
          className="user-avatar"
          as="a"
          src="https://images.viblo.asia/120x120/a2ac1e41-bc36-48b4-b572-f2c1252a7e7a.jpg"
        />
        <Comment.Content className="user-comments-content">
          <Comment.Author className="user-comments-author">
            {username}
          </Comment.Author>
          <Comment.Metadata>
            <div>{date}</div>
          </Comment.Metadata>
          <Comment.Text>
            <p>{body}</p>
          </Comment.Text>
        </Comment.Content>
      </Comment>
    </CommentsPostItem>
  )
}

export default CommentsItem
