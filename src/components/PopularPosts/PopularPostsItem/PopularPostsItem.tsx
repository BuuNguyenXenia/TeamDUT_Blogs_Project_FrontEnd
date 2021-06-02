import React from "react"
import { Card, Col, Row } from "react-bootstrap"
import { PostsItem } from "./PopularPostsItem.styles"

export default function PopularPostsItem() {
  return (
    <PostsItem>
      <Card.Text as="div">
        <Row>
          <Col xl={4} lg={4} md={4} sm={4} className="p-0">
            <a href="1" className="posts-item-image wrapper-image">
              <img
                src="https://1.bp.blogspot.com/-k_4VhcdaHds/XyMrIZP2mWI/AAAAAAAACb0/43LgXMLoZPEiVqOL1SUWKJMUIU3t0pd5QCLcBGAsYHQ/s1600/ify10.jpg"
                alt="img"
              />
            </a>
          </Col>
          <Col xl={8} lg={8} md={8} sm={8} className="posts-item-body">
            <h5 className="posts-item-title wrapper-title">
              <a href="2">
                The 18 Practices for Building Responsive Web Applications
              </a>
            </h5>
            <time
              className="posts-item-time wrapper-time"
              dateTime="30-07-2020"
            >
              July 30, 2020
            </time>
          </Col>
        </Row>
      </Card.Text>
    </PostsItem>
  )
}
