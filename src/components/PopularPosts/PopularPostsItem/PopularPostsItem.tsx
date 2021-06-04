import React from "react"
import { Card, Col, Row } from "react-bootstrap"
import { PostsItem } from "./PopularPostsItem.styles"

export default function PopularPostsItem({ title, createdAt }) {
  return (
    <PostsItem>
      <Card.Text as="div">
        <Row>
          <Col xs={4} className="p-0">
            <a href="1" className="posts-item-image wrapper-image">
              <img
                src="https://1.bp.blogspot.com/-k_4VhcdaHds/XyMrIZP2mWI/AAAAAAAACb0/43LgXMLoZPEiVqOL1SUWKJMUIU3t0pd5QCLcBGAsYHQ/s1600/ify10.jpg"
                alt="img"
              />
            </a>
          </Col>
          <Col xs={8} className="posts-item-body">
            <h5 className="posts-item-title wrapper-title">
              <a href="2">{title}</a>
            </h5>
            <time className="posts-item-time wrapper-time" dateTime={createdAt}>
              {createdAt}
            </time>
          </Col>
        </Row>
      </Card.Text>
    </PostsItem>
  )
}
