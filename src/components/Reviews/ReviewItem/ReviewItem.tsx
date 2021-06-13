import React, { useState } from "react"
import { Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { urlPostItem } from "src/common/Handle/handlePosts"
import {
  clearState,
  itemPostThunk
} from "src/components/ViewAllPosts/Posts.slice"
import { formatDate } from "src/helpers/date"

import { handleShowContent } from "src/helpers/string"
import LocalStorageService from "src/services/LocalStorageService/Storage.service"
import { useAppDispatch } from "src/store/hooks"
import { ItemReview } from "./ReviewItem.styles"

export default function ReviewItem({ title, createdAt, postId, image }) {
  const [urlPost] = useState<string>(urlPostItem(title))
  const dispatch = useAppDispatch()

  const content = handleShowContent(title, 50)
  const creatDate = formatDate(createdAt)

  const handleItemPost = (_id: string) => {
    LocalStorageService.setItem("urlPost", title)
    dispatch(itemPostThunk(_id))
    dispatch(clearState())
  }
  return (
    <ItemReview>
      <Card className="card-review-item">
        <Row className="card-item">
          <Col sm={4} className="p-0">
            <Link
              to={`${urlPost}/${postId}`}
              className="card-image"
              onClick={() => handleItemPost(postId)}
            >
              <Card.Img src={image} />
            </Link>
          </Col>
          <Col sm={8} className="p-0">
            <Card.Body className="card-review-body">
              <Card.Title className="card-review-title mb-1">
                <Link
                  to={`${urlPost}/${postId}`}
                  onClick={() => handleItemPost(postId)}
                >
                  {content}
                </Link>
              </Card.Title>
              <time dateTime={createdAt} className="wrapper-time">
                {creatDate}
              </time>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </ItemReview>
  )
}
