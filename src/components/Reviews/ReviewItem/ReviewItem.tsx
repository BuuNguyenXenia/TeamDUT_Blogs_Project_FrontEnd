import React from "react"
import { Card, Col, Row } from "react-bootstrap"
import { ItemReview } from "./ReviewItem.styles"

export default function ReviewItem() {
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
                <a href="b">iPhone 11 Review: Phone Most People Should Buy</a>
              </Card.Title>
              <time dateTime="30-07-2020" className="wrapper-time">
                July 30, 2020
              </time>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </ItemReview>
  )
}
