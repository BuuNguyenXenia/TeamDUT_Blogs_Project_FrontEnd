import React, { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import { useAppDispatch, useAppSelector } from "src/store/hooks"
import ReviewItem from "./ReviewItem/ReviewItem"
import { getReviewsPosts, reviewsPostsSelector } from "./Reviews.slice"
import { ReviewsList } from "./Reviews.styles"
import ReviewTop from "./ReviewTop/ReviewTop"

export default function Reviews() {
  const dispatch = useAppDispatch()
  const reviewsPosts = useAppSelector(reviewsPostsSelector)
  const { current, isSuccess } = reviewsPosts

  useEffect(() => {
    dispatch(getReviewsPosts())
  }, [])

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
            <ReviewTop {...current[0]} />
          </Col>
          <Col xl={6} lg={6} md={12} sm={12} className="mt-3">
            {isSuccess
              ? current
                  .slice(1, 4)
                  .map((el, i) => (
                    <ReviewItem {...el} key={"reviews-item" + i} />
                  ))
              : null}
          </Col>
        </Row>
      </div>
    </ReviewsList>
  )
}
