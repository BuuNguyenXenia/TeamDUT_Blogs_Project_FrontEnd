import React, { useEffect } from "react"
import { Button, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "src/store/hooks"
import {
  getLatestNews,
  latestNewsPostsSelector
} from "../LatestNews/LatestNews.slice"
import { LatestNewsPage } from "../LatestNews/LatestNews.styles"
import LatestNewsItem from "../LatestNews/LatestNewsItem/LatestNewsItem"

const ViewAllPosts = () => {
  const dispatch = useAppDispatch()
  const latestNewsPosts = useAppSelector(latestNewsPostsSelector)
  const { current, isSuccess } = latestNewsPosts

  useEffect(() => {
    dispatch(getLatestNews())
  }, [])

  return (
    <LatestNewsPage className="mt-4">
      <div className="post-all-header">
        <Link to="/" className="header">
          Home
        </Link>
        <span> All Post </span>
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
export default ViewAllPosts
