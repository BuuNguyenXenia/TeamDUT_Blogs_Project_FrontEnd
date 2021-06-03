import React from "react"
import { Card, Col, Row } from "react-bootstrap"
import { handleShowContent } from "src/helpers/handleContent"
import { ItemReview } from "./ReviewItem.styles"

export default function ReviewItem({ title, createdAt }) {
  const content = handleShowContent(title, 50)
  return (
    <ItemReview>
      <Card className="card-review-item">
        <Row className="card-item">
          <Col sm={4} className="p-0">
            <a href="x" className="card-image">
              <Card.Img src="https://1.bp.blogspot.com/-rAW7PxEXqww/XyMprSiTVgI/AAAAAAAACa8/FH8QpXwQahIiB53ALEBDIf_L1yMv2_yUACLcBGAsYHQ/s1600/ify5.jpg" />
            </a>
          </Col>
          <Col sm={8} className="p-0">
            <Card.Body className="card-review-body">
              <Card.Title className="card-review-title mb-1">
                <a href="b">{content}</a>
              </Card.Title>
              <time dateTime={createdAt} className="wrapper-time">
                {createdAt}
              </time>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </ItemReview>
  )
}
