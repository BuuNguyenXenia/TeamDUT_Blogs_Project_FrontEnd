import React, { useState } from "react"
import { Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { urlPostItem } from "src/common/Handle/handlePosts"
import {
  clearState,
  itemPostThunk
} from "src/components/ViewAllPosts/Posts.slice"
import { formatDate } from "src/helpers/date"
import LocalStorageService from "src/services/LocalStorageService/Storage.service"
import { useAppDispatch } from "src/store/hooks"
import { PostsItem } from "./PopularPostsItem.styles"

export default function PopularPostsItem({ title, createdAt, postId, image }) {
  const [urlPost] = useState<string>(urlPostItem(title))
  const dispatch = useAppDispatch()

  const creatDate = formatDate(createdAt)

  const handleItemPost = (_id: string) => {
    LocalStorageService.setItem("urlPost", title)
    dispatch(itemPostThunk(_id))
    dispatch(clearState())
  }
  return (
    <PostsItem>
      <Card.Text as="div">
        <Row>
          <Col xs={4} className="p-0">
            <Link
              to={`${urlPost}/${postId}`}
              className="posts-item-image wrapper-image"
              onClick={() => handleItemPost(postId)}
            >
              <img src={image} alt="img" />
            </Link>
          </Col>
          <Col xs={8} className="posts-item-body">
            <h5 className="posts-item-title wrapper-title">
              <Link
                to={`${urlPost}/${postId}`}
                onClick={() => handleItemPost(postId)}
              >
                {title}
              </Link>
            </h5>
            <time className="posts-item-time wrapper-time" dateTime={createdAt}>
              {creatDate}
            </time>
          </Col>
        </Row>
      </Card.Text>
    </PostsItem>
  )
}
