import React, { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { PATH } from "src/services/constants/path"
import { useAppDispatch, useAppSelector } from "src/redux/store/hooks"
import {
  getLatestNews,
  latestNewsPostsSelector
} from "../../../redux/slices/latestNewsSlice/LatestNews.slice"
import { LatestNewsPage } from "./LatestNews.styles"
import LatestNewsItem from "./LatestNewsItem/LatestNewsItem"
import PaginationPost from "../Pagination/PaginationPost"
import Loading from "../Loading/Loading"

export default function LatestNews() {
  const dispatch = useAppDispatch()
  const latestNewsPosts = useAppSelector(latestNewsPostsSelector)
  const { current, isSuccess, isFetching, lastPage } = latestNewsPosts
  console.log(current)

  useEffect(() => {
    if (Object.keys(current).length === 0) {
      dispatch(getLatestNews(1))
    }
  }, [])

  return (
    <LatestNewsPage className="mt-4">
      <div className="lasts-news-header">
        <h3 className="lasts-news-title">Latest News</h3>
        <Link to={PATH.ALL_POSTS} className="view-all">
          View all
        </Link>
      </div>
      <div className="view-list">
        <Row className="mt-2">
          <Col sm={12} xs={12}>
            {isFetching && <Loading height={1149.36} />}
            {isSuccess
              ? current.map((el, i) => (
                  <LatestNewsItem {...el} key={"latest-new-item" + i} />
                ))
              : null}
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="mb-4">
            <PaginationPost lastPage={lastPage} />
          </Col>
        </Row>
      </div>
    </LatestNewsPage>
  )
}
