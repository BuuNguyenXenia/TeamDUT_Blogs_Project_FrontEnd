import React from "react"
import { Comment } from "semantic-ui-react"
import { CommentsPostItem } from "./CommentsItem.styles"
import { formatDate } from "../../../../helpers/date"
import { useAppSelector } from "src/store/hooks"
import { userSelector } from "src/pages/User/User.slice"

const CommentsItem = ({ username, body, createdAt, avatar }) => {
  const date = formatDate(createdAt)
  const user = useAppSelector(userSelector)

  return (
    <CommentsPostItem>
      <Comment className="user-comments">
        <Comment.Avatar className="user-avatar" as="a" src={user.avatar} />
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
