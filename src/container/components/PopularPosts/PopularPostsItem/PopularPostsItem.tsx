import React from "react"
import { Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import {
  getCommentsPostItem,
  itemPostThunk
} from "src/redux/slices/allPostsSlice/Posts.slice"
import { PATH } from "src/services/constants/path"
import { formatDate } from "src/services/helpers/date"

import { useAppDispatch } from "src/redux/store/hooks"
import { PostsItem } from "./PopularPostsItem.styles"

const PopularPostsItem = props => {
  const { title, createdAt, postId, image } = props
  const dispatch = useAppDispatch()

  const creatDate = formatDate(createdAt)

  const handleItemPost = (postId: string) => {
    dispatch(itemPostThunk(postId))
    dispatch(getCommentsPostItem(postId))
  }
  return (
    <PostsItem>
      <Card.Text as="div">
        <Row>
          <Col xs={4} className="p-0">
            <Link
              to={`${PATH.ITEM_POST}/${postId}`}
              className="posts-item-image wrapper-image"
              onClick={() => handleItemPost(postId)}
            >
              <img src={image} alt="img" />
            </Link>
          </Col>
          <Col xs={8} className="posts-item-body">
            <h5 className="posts-item-title wrapper-title">
              <Link
                to={`${PATH.ITEM_POST}/${postId}`}
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

export default PopularPostsItem
