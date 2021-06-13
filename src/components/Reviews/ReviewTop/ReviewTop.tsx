import React, { useState } from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { urlPostItem } from "src/common/Handle/handlePosts"
import {
  clearState,
  itemPostThunk
} from "src/components/ViewAllPosts/Posts.slice"
import { formatDate } from "src/helpers/date"
import LocalStorageService from "src/services/LocalStorageService/Storage.service"
import { useAppDispatch } from "src/store/hooks"
import { TopReview } from "./ReviewTop.styled"

export default function ReviewTop({ title, createdAt, postId, image }) {
  const [urlPost] = useState<string>(urlPostItem(title))
  const dispatch = useAppDispatch()

  const creatDate = formatDate(createdAt)

  const handleItemPost = (_id: string) => {
    LocalStorageService.setItem("urlPost", title)
    dispatch(itemPostThunk(_id))
    dispatch(clearState())
  }
  return (
    <TopReview>
      <Card className="card-review-top">
        <Link
          to={`${urlPost}/${postId}`}
          onClick={() => handleItemPost(postId)}
        >
          <Card.Img src={image} className="card-review-image" />
        </Link>
        <Card.Body className="card-review-body">
          <Card.Title className="card-review-title">
            <Link
              to={`${urlPost}/${postId}`}
              onClick={() => handleItemPost(postId)}
            >
              {title}
            </Link>
          </Card.Title>
          <Card.Text className="card-review-text">
            by <span>Team DUT</span> • {creatDate}
          </Card.Text>
        </Card.Body>
      </Card>
    </TopReview>
  )
}
