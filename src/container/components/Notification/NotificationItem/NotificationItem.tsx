import React from "react"
import { Dropdown } from "react-bootstrap"
import TimeAgo from "react-timeago"
import frenchStrings from "react-timeago/lib/language-strings/en"
import buildFormatter from "react-timeago/lib/formatters/buildFormatter"
import { handleShowContent } from "src/services/helpers/string"
import { useHistory } from "react-router-dom"
import { PATH } from "src/services/constants/path"
import PostsApi from "src/apis/posts.api"
import { useAppDispatch } from "src/redux/store/hooks"
import { checkViewed } from "../../../../redux/slices/notificationSlice/Notification.slice"
import {
  getCommentsPostItem,
  itemPostThunk
} from "src/redux/slices/allPostsSlice/Posts.slice"

const NotificationItem = ({
  message,
  postTitle,
  createdAt,
  avatar,
  viewed,
  postId,
  notificationId
}) => {
  const dispatch = useAppDispatch()
  const formatter = buildFormatter(frenchStrings)
  const title = handleShowContent(postTitle, 30)

  const history = useHistory()

  const handleChangeViewed = (postId: string, notificationId: string) => {
    history.push(`${PATH.ITEM_POST}/${postId}`)
    dispatch(itemPostThunk(postId))
    dispatch(getCommentsPostItem(postId))
    if (!viewed) {
      PostsApi.checkViewedNotification(notificationId)
      dispatch(checkViewed(notificationId))
    }
  }
  return (
    <Dropdown.Item
      className="notification-item"
      onClick={() => handleChangeViewed(postId, notificationId)}
    >
      <div className="notification-image">
        <img src={avatar} alt="avatar" className="image" />
      </div>
      <div className="notification-content">
        <h5>
          {message} <span>trong {title}</span>
        </h5>

        <TimeAgo date={createdAt} formatter={formatter} />
      </div>
      {!viewed && <span className="notification-status"></span>}
    </Dropdown.Item>
  )
}

export default NotificationItem
