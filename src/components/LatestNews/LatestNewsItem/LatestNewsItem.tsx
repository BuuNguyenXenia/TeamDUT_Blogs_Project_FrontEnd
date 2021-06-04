import React from "react"
import { Card, Col, Row } from "react-bootstrap"
import { LastsNewsItemPage } from "./LatestNewsItem.styles"
import { handleShowContent } from "src/helpers/handleContent"

export default function LatestNewsItem({ title, body, createdAt }) {
  const content = handleShowContent(body, 150)
  return (
    <LastsNewsItemPage>
      <Card className="card-lastsNews-item">
        <Row className="lastsNews-item">
          <Col xl={4} lg={4} md={4} sm={4} className="px-2">
            <a href="x" className="card-lastsNews-image">
              <Card.Img src="https://1.bp.blogspot.com/-rAW7PxEXqww/XyMprSiTVgI/AAAAAAAACa8/FH8QpXwQahIiB53ALEBDIf_L1yMv2_yUACLcBGAsYHQ/s1600/ify5.jpg" />
            </a>
          </Col>
          <Col xl={8} lg={8} md={8} sm={8} className="p-0">
            <Card.Body className="card-lastsNews-body">
              <Card.Title className="card-lastsNews-title mb-1">
                <a href="b">{title}</a>
              </Card.Title>
              <Card.Text className="card-lastsNews-text">{content}</Card.Text>
              <span className="card-lastsNews-author">
                by <span>Sora Blogging Tips</span> • {createdAt}
              </span>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </LastsNewsItemPage>
  )
}
