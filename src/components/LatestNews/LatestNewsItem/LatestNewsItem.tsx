import React, { useState } from "react"
import { Card, Col, Row } from "react-bootstrap"
import { LastsNewsItemPage } from "./LatestNewsItem.styles"
import { handleShowContent } from "src/helpers/string"
import { Link } from "react-router-dom"
import { useAppDispatch } from "src/store/hooks"
import {
  clearState,
  itemPostThunk
} from "src/components/ViewAllPosts/Posts.slice"
import { urlPostItem } from "src/common/Handle/handlePosts"
import { formatDate } from "src/helpers/date"
import LocalStorageService from "src/services/LocalStorageService/Storage.service"

export default function LatestNewsItem({ title, body, createdAt, postId }) {
  const [urlPost] = useState<string>(urlPostItem(title))
  const dispatch = useAppDispatch()

  const content = handleShowContent(body, 150)
  const creatDate = formatDate(createdAt)

  const handleItemPost = (postId: string) => {
    LocalStorageService.setItem("urlPost", title)
    dispatch(itemPostThunk(postId))
    dispatch(clearState())
  }
  return (
    <LastsNewsItemPage>
      <Card className="card-lastsNews-item">
        <Row className="lastsNews-item">
          <Col xl={4} lg={4} md={4} sm={4} className="px-2">
            <Link
              to={urlPost}
              className="card-lastsNews-image"
              onClick={() => handleItemPost(postId)}
            >
              <Card.Img src="https://1.bp.blogspot.com/-rAW7PxEXqww/XyMprSiTVgI/AAAAAAAACa8/FH8QpXwQahIiB53ALEBDIf_L1yMv2_yUACLcBGAsYHQ/s1600/ify5.jpg" />
            </Link>
          </Col>
          <Col xl={8} lg={8} md={8} sm={8} className="p-0">
            <Card.Body className="card-lastsNews-body">
              <Card.Title className="card-lastsNews-title mb-1">
                <Link to={urlPost} onClick={() => handleItemPost(postId)}>
                  {title}
                </Link>
              </Card.Title>
              <Card.Text className="card-lastsNews-text">{content}</Card.Text>
              <span className="card-lastsNews-author">
                by <span>Team DUT</span> • {creatDate}
              </span>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </LastsNewsItemPage>
  )
}
