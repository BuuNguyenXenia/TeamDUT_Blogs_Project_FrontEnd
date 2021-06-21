import React, { useEffect, useState } from "react"
import { Dropdown } from "react-bootstrap"
import { useAppDispatch, useAppSelector } from "src/redux/store/hooks"
import {
  getNotificationPost,
  loadMoreNotification,
  notificationPostSelector,
  seeAll
} from "../../../redux/slices/notificationSlice/Notification.slice"
import { NotificationPage } from "./Notification.styles"
import NotificationItem from "./NotificationItem/NotificationItem"
import { userSelector } from "src/redux/slices/userSlice/User.slice"
import Pusher from "pusher-js"
import PostsApi from "src/apis/posts.api"
import Loading from "../Loading/Loading"

const Notification = () => {
  const dispatch = useAppDispatch()
  const notificationPost = useAppSelector(notificationPostSelector)
  const { dataNotification, isSuccess, lastPage, unsold, isFetching } =
    notificationPost

  const user = useAppSelector(userSelector)
  const { email } = user
  const [count, setCount] = useState<number>(1)
  const [countNoti, setCountNoti] = useState<number>(0)

  const getMoreNotificationPost = async (pageNumber: number) => {
    setCount(pageNumber)
    if (lastPage >= pageNumber) {
      try {
        const response = await PostsApi.getNotification(pageNumber)
        if (response.status === 200) {
          dispatch(loadMoreNotification(response.data.notifications))
        }
      } catch (err) {
        throw err
      }
    } else {
      console.log("error")
    }
  }

  const handleSeeAll = async () => {
    try {
      dispatch(seeAll())
      const response = await PostsApi.seeAllNotification()
      if (response.status === 200) {
        console.log("success")
      }
    } catch (err) {
      console.log("error")
      throw err
    }
  }

  useEffect(() => {
    setCountNoti(unsold)
  }, [unsold])

  useEffect(() => {
    var pusher = new Pusher("5ee23d2be54abf269991", {
      cluster: "ap1"
    })

    var channel = pusher.subscribe(email)
    channel.bind("my-event", function (data: any) {
      console.log(JSON.stringify(data))
      dispatch(getNotificationPost(1))
    })
  }, [email])

  useEffect(() => {
    if (Object.keys(dataNotification).length === 0) {
      dispatch(getNotificationPost(1))
    }
  }, [])

  return (
    <NotificationPage>
      <Dropdown>
        <Dropdown.Toggle as="div" id="dropdown-basic">
          {countNoti > 0 && (
            <span className="notification-count notification-icon">
              <span>{countNoti}</span>
            </span>
          )}
          <i className="far fa-bell"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <div className="see-all" onClick={handleSeeAll}>
            See All
          </div>
          <Dropdown.Divider />
          {isFetching && <Loading height={500} />}
          {isSuccess &&
            dataNotification.map((el, index) => (
              <NotificationItem {...el} key={"notification-item- " + index} />
            ))}
          <div className="see-more">
            <span onClick={() => getMoreNotificationPost(count + 1)}>
              {" "}
              See more
            </span>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </NotificationPage>
  )
}

export default Notification
