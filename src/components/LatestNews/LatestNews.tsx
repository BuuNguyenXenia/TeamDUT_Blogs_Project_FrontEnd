import React, { useEffect } from "react"
import { Button, Col, Row } from "react-bootstrap"
import { useAppDispatch, useAppSelector } from "src/store/hooks"
import { getLatestNews, latestNewsPostsSelector } from "./LatestNews.slice"
import { LatestNewsPage } from "./LatestNews.styles"
import LatestNewsItem from "./LatestNewsItem/LatestNewsItem"

export default function LatestNews() {
  const dispatch = useAppDispatch()
  const latestNewsPosts = useAppSelector(latestNewsPostsSelector)
  const { current, isSuccess } = latestNewsPosts

  useEffect(() => {
    dispatch(getLatestNews())
  }, [])

  return (
    <LatestNewsPage className="mt-4">
      <div className="lasts-news-header">
        <h3 className="lasts-news-title">Latest News</h3>
        <a href="dd" className="view-all">
          View all
        </a>
      </div>
      <div className="view-list">
        <Row className="mt-2">
          <Col sm={12} xs={12}>
            {isSuccess
              ? current.map((el, i) => (
                  <LatestNewsItem {...el} key={"latest-new-item" + i} />
                ))
              : null}
          </Col>
        </Row>
        <Row className="mt-3 mb-3">
          <Col sm={{ span: 4, offset: 4 }} xs={{ span: 6, offset: 3 }}>
            <Button className="button-load-more btn-block">Load more</Button>
          </Col>
        </Row>
      </div>
    </LatestNewsPage>
  )
}
