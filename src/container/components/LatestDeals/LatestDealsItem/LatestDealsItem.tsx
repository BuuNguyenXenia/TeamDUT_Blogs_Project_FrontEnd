import React from "react"
import { Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import {
  getCommentsPostItem,
  itemPostThunk
} from "src/redux/slices/allPostsSlice/Posts.slice"
import { PATH } from "src/services/constants/path"
import { formatDate } from "src/services/helpers/date"
import { useAppDispatch } from "src/redux/store/hooks"
import { DealsItem } from "./LatestDealsItem.styles"

const LatestDealsItem = props => {
  const { title, createdAt, postId, image } = props
  const dispatch = useAppDispatch()

  const creatDate = formatDate(createdAt)

  const handleItemPost = (postId: string) => {
    dispatch(itemPostThunk(postId))
    dispatch(getCommentsPostItem(postId))
  }
  return (
    <Col xs={6} className="mb-3 p-0">
      <DealsItem>
        <Link
          to={`${PATH.ITEM_POST}/${postId}`}
          className="deals-item-image wrapper-image"
          onClick={() => handleItemPost(postId)}
        >
          <img src={image} alt="img" />
        </Link>
        <div className="deals-item-body">
          <h5 className="deals-item-title wrapper-title">
            <Link
              to={`${PATH.ITEM_POST}/${postId}`}
              onClick={() => handleItemPost(postId)}
            >
              {title}
            </Link>
          </h5>
          <time dateTime={createdAt} className="deals-item-time wrapper-time">
            {creatDate}
          </time>
        </div>
      </DealsItem>
    </Col>
  )
}

export default LatestDealsItem
