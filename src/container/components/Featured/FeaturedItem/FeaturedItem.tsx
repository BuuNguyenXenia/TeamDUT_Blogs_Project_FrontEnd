import React from "react"
import { Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import {
  getCommentsPostItem,
  itemPostThunk
} from "src/redux/slices/allPostsSlice/Posts.slice"
import { handleShowContent } from "src/services/helpers/string"
import { useAppDispatch } from "src/redux/store/hooks"
import { Item } from "./FeaturedItem.styles"
import { formatDate } from "src/services/helpers/date"
import { PATH } from "src/services/constants/path"

const FeaturedItem = props => {
  const { title, createdAt, postId, image } = props
  const dispatch = useAppDispatch()

  const content = handleShowContent(title, 59)
  const creatDate = formatDate(createdAt)

  const handleItemPost = (postId: string) => {
    dispatch(itemPostThunk(postId))
    dispatch(getCommentsPostItem(postId))
  }

  return (
    <Col xl={4} lg={4} md={12} sm={12} className="featured-items mb-4">
      <Item>
        <Link
          to={`${PATH.ITEM_POST}/${postId}`}
          className="featured-item"
          onClick={() => handleItemPost(postId)}
        >
          <span className="item-images entry-image-wrap">
            <img src={image} alt="apple" />
          </span>
          <div className="entry-header entry-info">
            <span className="entry-category"> Technology</span>
            <h5 className="entry-title">{content}</h5>
            <span className="entry-meta">
              <span className="entry-author">
                <span className="sp"> by </span>
                <span className="author"> Team DUT </span>
              </span>
              <span className="entry-time">
                <span className="symbol">&bull;</span>
                <time className={createdAt}> {creatDate}</time>
              </span>
            </span>
          </div>
        </Link>
      </Item>
    </Col>
  )
}

export default FeaturedItem
