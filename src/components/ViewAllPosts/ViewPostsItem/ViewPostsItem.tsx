import React, { useEffect, useState } from "react"
import { ViewItem } from "./ViewPostsItem.styles"
import CommentsPost from "../Comments/CommentsPost"
import { PATH } from "src/constants/path"
import { Link, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "src/store/hooks"
import { userSelector } from "src/pages/User/User.slice"
import { createLikePost, itemPostSelector, itemPostThunk } from "../Posts.slice"
import toast from "react-hot-toast"
import { MSG } from "src/constants/showMsg"
import { formatDate } from "src/helpers/date"

const ViewPostsItem = () => {
  const dispatch = useAppDispatch()
  const dataItemPost = useAppSelector(itemPostSelector)
  const { dataPost, isSuccess } = dataItemPost

  const { postId } = useParams<RouteParams>()

  const user = useAppSelector(userSelector)

  const [checkLike, setCheckLike] = useState<string>("")

  const handleLikePost = _id => {
    if (user.isSuccess) {
      dispatch(createLikePost(_id))
    } else {
      toast.error(MSG.NOT_LOGIN_ERROR)
    }
  }

  useEffect(() => {
    dispatch(itemPostThunk(postId))
  }, [])
  console.log(dataItemPost)

  useEffect(() => {
    if (isSuccess) {
      const checkName = dataPost.likes.data.filter(el => el === user.name)
      setCheckLike(checkName)
    }
  }, [dataPost.likes])

  return isSuccess ? (
    <ViewItem>
      <div className="post-item">
        <div className="post-item-header">
          <Link to={PATH.HOME} className="header">
            Home
          </Link>
          <span> Post </span>
        </div>
        <h2 className="post-item-title ">{dataPost.title}</h2>
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
            <time dateTime={dataPost.createdAt}>
              {formatDate(dataPost.createdAt)}
            </time>
          </span>
        </div>
        <div className="post-item-countComment">
          <div className="like" onClick={() => handleLikePost(dataPost.postId)}>
            <i
              className={
                checkLike.length === 1
                  ? "fas fa-thumbs-up"
                  : "fas fa-thumbs-up active"
              }
            ></i>
            <span className="count">{dataPost.likes.counts}</span>
          </div>
          <div className="comment ml-3">
            <i className="far fa-comments"></i>
            <span className="count">{dataPost.comments.counts}</span>
          </div>
        </div>
      </div>
      <div className="post-item-body">
        <div className="body-image">
          <img src={dataPost.image} alt="" />
        </div>
        <div
          className="body-content"
          dangerouslySetInnerHTML={{ __html: dataPost.body }}
        ></div>
        <div className="comments-posts">
          <p className="header-comment">Post a Comment</p>
          <CommentsPost {...dataPost} />
        </div>
      </div>
    </ViewItem>
  ) : null
}

export default ViewPostsItem
