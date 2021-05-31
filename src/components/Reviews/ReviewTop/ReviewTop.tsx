import React from "react"
import { Card } from "react-bootstrap"
import { TopReview } from "./ReviewTop.styled"

export default function ReviewTop() {
  return (
    <TopReview>
      <Card className="card-review-top">
        <Card.Img
          src="https://1.bp.blogspot.com/-RC31VhRLxHA/XyMqQ0J1h6I/AAAAAAAACbQ/Qu7h6jbaj7gXYxJFSx7ImUIxWMf_HVVFACLcBGAsYHQ/w387-h226-p-k-no-nu/ify7.jpg"
          className="card-review-image"
        />
        <Card.Body className="card-review-body">
          <Card.Title className="card-review-title">
            10 Awesome Things to Try on Your PS4 Right Now
          </Card.Title>
          <Card.Text className="card-review-text">
            by <span>Sora Blogging Tips</span> • July 30, 2020
          </Card.Text>
        </Card.Body>
      </Card>
    </TopReview>
  )
}
