import React from "react"
import { Col } from "react-bootstrap"
import { DealsItem } from "./LatestDealsItem.styles"

const LatestDealsItem = ({ title, createdAt }) => {
  return (
    <Col xs={6} className="mb-3 p-0">
      <DealsItem>
        <a href="1" className="deals-item-image wrapper-image">
          <img
            src="https://1.bp.blogspot.com/-k_4VhcdaHds/XyMrIZP2mWI/AAAAAAAACb0/43LgXMLoZPEiVqOL1SUWKJMUIU3t0pd5QCLcBGAsYHQ/s1600/ify10.jpg"
            alt="img"
          />
        </a>
        <div className="deals-item-body">
          <h5 className="deals-item-title wrapper-title">
            <a href="3">{title}</a>
          </h5>
          <time dateTime={createdAt} className="deals-item-time wrapper-time">
            {createdAt}
          </time>
        </div>
      </DealsItem>
    </Col>
  )
}

export default LatestDealsItem
