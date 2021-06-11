import React, { useEffect, useState } from "react"
import { ViewItem } from "./ViewPostsItem.styles"
import CommentsPost from "../Comments/CommentsPost"
import { PATH } from "src/constants/path"
import { Link } from "react-router-dom"
import LocalStorageService from "src/services/LocalStorageService/Storage.service"
import { useAppDispatch, useAppSelector } from "src/store/hooks"
import { userSelector } from "src/pages/User/User.slice"
import { createLikePost } from "../Posts.slice"
import toast from "react-hot-toast"
import { MSG } from "src/constants/showMsg"
import { formatDate } from "src/helpers/date"

const ViewPostsItem = () => {
  const dataPost: any = LocalStorageService.getItem<object>("itemPost")
  const user = useAppSelector(userSelector)
  const dispatch = useAppDispatch()

  const [checkLike, setCheckLike] = useState<string>("")

  const { title, body, comments, likes, createdAt, postId } = dataPost
  const date = formatDate(createdAt)

  const handleLikePost = _id => {
    if (user.isSuccess) {
      dispatch(createLikePost(_id))
      console.log(checkLike)
    } else {
      toast.error(MSG.NOT_LOGIN_ERROR)
    }
  }

  useEffect(() => {
    const checkName = likes.data.filter(el => el === user.name)
    setCheckLike(checkName)
  }, [user])

  return (
    <ViewItem>
      <div className="post-item">
        <div className="post-item-header">
          <Link to={PATH.HOME} className="header">
            Home
          </Link>
          <span> Post </span>
        </div>
        <h2 className="post-item-title ">{title}</h2>
      </div>
      <div className="post-item-meta">
        <div className="post-item-author">
          <img
            src="https://images.viblo.asia/120x120/a2ac1e41-bc36-48b4-b572-f2c1252a7e7a.jpg"
            alt=""
          />
          <span>
            by
            <span className="author"> Team DUT </span> •
            <time dateTime={createdAt}> {date}</time>
          </span>
        </div>
        <div className="post-item-countComment">
          <div className="like" onClick={() => handleLikePost(postId)}>
            <i
              className={
                checkLike.length === 1
                  ? "fas fa-thumbs-up"
                  : "fas fa-thumbs-up active"
              }
            ></i>
            <span className="count">{likes.counts}</span>
          </div>
          <div className="comment ml-3">
            <i className="far fa-comments"></i>
            <span className="count">{comments.counts}</span>
          </div>
        </div>
      </div>
      <div className="post-item-body">
        <div className="body-image">
          <img
            src="https://1.bp.blogspot.com/-k_4VhcdaHds/XyMrIZP2mWI/AAAAAAAACb0/43LgXMLoZPEiVqOL1SUWKJMUIU3t0pd5QCLcBGAsYHQ/s1600/ify10.jpg"
            alt=""
          />
        </div>
        <div className="body-content">
          <p>{body}</p>
        </div>
        <div className="comments-posts">
          <p className="header-comment">Post a Comment</p>
          <CommentsPost {...dataPost} />
        </div>
      </div>
    </ViewItem>
  )
}

export default ViewPostsItem
