import React from "react"
import { Col, Row } from "react-bootstrap"
import ReviewItem from "./ReviewItem/ReviewItem"
import { ReviewsList } from "./Reviews.styles"
import ReviewTop from "./ReviewTop/ReviewTop"

export default function Reviews() {
  return (
    <ReviewsList>
      <div className="header-reviews">
        <h3 className="header-title">Reviews</h3>
        <a href="dd" className="view-all">
          View all
        </a>
      </div>
      <div className="view-list">
        <Row>
          <Col xl={6} lg={6} md={12} sm={12} className="mt-3">
            <ReviewTop />
          </Col>
          <Col xl={6} lg={6} md={12} sm={12} className="mt-3">
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
          </Col>
        </Row>
      </div>
    </ReviewsList>
  )
}
