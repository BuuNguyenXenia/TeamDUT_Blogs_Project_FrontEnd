import React from "react"
import { Comment } from "semantic-ui-react"
import { CommentsPostItem } from "./CommentsItem.styles"

const CommentsItem = () => (
  <CommentsPostItem>
    <Comment className="user-comments">
      <Comment.Avatar
        className="user-avatar"
        as="a"
        src="https://images.viblo.asia/120x120/a2ac1e41-bc36-48b4-b572-f2c1252a7e7a.jpg"
      />
      <Comment.Content className="user-comments-content">
        <Comment.Author className="user-comments-author">
          Joe Henderson
        </Comment.Author>
        <Comment.Metadata>
          <div>1 day ago</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>
            The hours, minutes and seconds stand as visible reminders that your
            effort put them all there. Preserve until your next run, when the
            watch lets you see how Impermanent your efforts are.
          </p>
        </Comment.Text>
      </Comment.Content>
    </Comment>
  </CommentsPostItem>
)

export default CommentsItem
