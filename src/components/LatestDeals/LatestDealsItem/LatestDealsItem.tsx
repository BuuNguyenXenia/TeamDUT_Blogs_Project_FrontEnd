import React, { useState } from "react"
import { Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { urlPostItem } from "src/common/Handle/handlePosts"
import {
  clearState,
  itemPostThunk
} from "src/components/ViewAllPosts/Posts.slice"
import { formatDate } from "src/helpers/date"
import LocalStorageService from "src/services/LocalStorageService/Storage.service"
import { useAppDispatch } from "src/store/hooks"
import { DealsItem } from "./LatestDealsItem.styles"

const LatestDealsItem = ({ title, createdAt, postId }) => {
  const [urlPost] = useState<string>(urlPostItem(title))
  const dispatch = useAppDispatch()

  const creatDate = formatDate(createdAt)

  const handleItemPost = (_id: string) => {
    LocalStorageService.setItem("urlPost", title)
    dispatch(itemPostThunk(_id))
    dispatch(clearState())
  }
  return (
    <Col xs={6} className="mb-3 p-0">
      <DealsItem>
        <Link
          to={urlPost}
          className="deals-item-image wrapper-image"
          onClick={() => handleItemPost(postId)}
        >
          <img
            src="https://1.bp.blogspot.com/-k_4VhcdaHds/XyMrIZP2mWI/AAAAAAAACb0/43LgXMLoZPEiVqOL1SUWKJMUIU3t0pd5QCLcBGAsYHQ/s1600/ify10.jpg"
            alt="img"
          />
        </Link>
        <div className="deals-item-body">
          <h5 className="deals-item-title wrapper-title">
            <Link to={urlPost} onClick={() => handleItemPost(postId)}>
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
