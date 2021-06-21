import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import {
  getCommentsPostItem,
  itemPostThunk
} from "src/redux/slices/allPostsSlice/Posts.slice"
import { PATH } from "src/services/constants/path"
import { formatDate } from "src/services/helpers/date"
import { useAppDispatch } from "src/redux/store/hooks"
import { TopReview } from "./ReviewTop.styled"

export default function ReviewTop(props) {
  const { title, createdAt, postId, image } = props
  const dispatch = useAppDispatch()

  const creatDate = formatDate(createdAt)

  const handleItemPost = (postId: string) => {
    dispatch(itemPostThunk(postId))
    dispatch(getCommentsPostItem(postId))
  }
  return (
    <TopReview>
      <Card className="card-review-top">
        <Link
          to={`${PATH.ITEM_POST}/${postId}`}
          onClick={() => handleItemPost(postId)}
          className="card-review-link"
        >
          <Card.Img src={image} className="card-review-image" />
        </Link>
        <Card.Body className="card-review-body card-top">
          <Card.Title className="card-review-title">
            <Link
              to={`${PATH.ITEM_POST}/${postId}`}
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
