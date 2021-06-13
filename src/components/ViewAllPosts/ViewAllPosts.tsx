import React, { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "src/store/hooks"
import {
  getLatestNews,
  latestNewsPostsSelector
} from "../LatestNews/LatestNews.slice"
import { LatestNewsPage } from "../LatestNews/LatestNews.styles"
import LatestNewsItem from "../LatestNews/LatestNewsItem/LatestNewsItem"
import PaginationPost from "../Pagination/PaginationPost"

const ViewAllPosts = () => {
  const dispatch = useAppDispatch()
  const latestNewsPosts = useAppSelector(latestNewsPostsSelector)
  const { current, isSuccess, lastPage } = latestNewsPosts

  useEffect(() => {
    dispatch(getLatestNews(1))
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
          <Col xs={12}>
            <PaginationPost lastPage={lastPage} />
          </Col>
        </Row>
      </div>
    </LatestNewsPage>
  )
}
export default ViewAllPosts
