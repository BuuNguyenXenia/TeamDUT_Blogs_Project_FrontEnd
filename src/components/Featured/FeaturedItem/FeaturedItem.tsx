import React from "react"
import { Col } from "react-bootstrap"
import { Item } from "./FeaturedItem.styles"

const FeaturedItem: React.FC = () => {
  return (
    <Col xl={4} lg={4} md={12} sm={12} className="featured-items mb-4">
      <Item>
        <a href="sd" className="featured-item">
          <span className="item-images entry-image-wrap">
            <img
              src="https://1.bp.blogspot.com/-lNDLOkYVctM/XyMrR9hlGrI/AAAAAAAACb8/kfHY383L6UMezRamt-tByetKTlxgT05vQCLcBGAsYHQ/s1600/ify12.jpg"
              alt="apple"
            />
          </span>
          <div className="entry-header entry-info">
            <span className="entry-category"> Apple</span>
            <h5 className="entry-title mt-3">
              Opera Browser Lets You Apply Dark Mode to Web Page
            </h5>
            <span className="entry-meta">
              <span className="entry-author">
                <span className="sp"> by </span>
                <span className="author"> sore yara </span>
              </span>
              <span className="entry-time">
                <span className="symbol">&bull;</span>
                <time className="time"> July 30, 2020</time>
              </span>
            </span>
          </div>
        </a>
      </Item>
    </Col>
  )
}

export default FeaturedItem
