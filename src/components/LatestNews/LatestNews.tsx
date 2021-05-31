import React from "react"
import { Button, Col, Row } from "react-bootstrap"
import { LatestNewsPage } from "./LatestNews.styles"
import LatestNewsItem from "./LatestNewsItem/LatestNewsItem"

export default function LatestNews() {
  return (
    <LatestNewsPage className="mt-3">
      <div className="lasts-news-header">
        <h3 className="lasts-news-title">Latest News</h3>
        <a href="dd" className="view-all">
          View all
        </a>
      </div>
      <div className="view-list">
        <Row className="mt-3">
          <Col xl={12} lg={12} md={12} sm={12}>
            <LatestNewsItem />
            <LatestNewsItem />
            <LatestNewsItem />
            <LatestNewsItem />
            <LatestNewsItem />
            <LatestNewsItem />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col
            xl={{ span: 4, offset: 4 }}
            lg={{ span: 4, offset: 4 }}
            md={{ span: 4, offset: 4 }}
            sm={{ span: 4, offset: 4 }}
          >
            <Button className="button-load-more ">Load more</Button>
          </Col>
        </Row>
      </div>
    </LatestNewsPage>
  )
}
