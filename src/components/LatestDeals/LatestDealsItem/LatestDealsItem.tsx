import React from "react"
import { DealsItem } from "./LatestDealsItem.styles"

const LatestDealsItem: React.FC = () => {
  return (
    <DealsItem className="col-md-12 col-sm-12 col-lg-6 col-xl-6 mb-3">
      <a href="1" className="deals-item-image wrapper-image">
        <img
          src="https://1.bp.blogspot.com/-k_4VhcdaHds/XyMrIZP2mWI/AAAAAAAACb0/43LgXMLoZPEiVqOL1SUWKJMUIU3t0pd5QCLcBGAsYHQ/s1600/ify10.jpg"
          alt="img"
        />
      </a>
      <div className="deals-item-body">
        <h5 className="deals-item-title wrapper-title">
          <a href="3">Opera Browser Lets You Apply Dark Mode to Web Page</a>
        </h5>
        <time dateTime="30-07-2020" className="deals-item-time wrapper-time">
          July 30, 2020
        </time>
      </div>
    </DealsItem>
  )
}

export default LatestDealsItem
