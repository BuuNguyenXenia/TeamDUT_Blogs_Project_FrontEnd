import React, { useEffect } from "react"
import { Card, Row } from "react-bootstrap"
import { Deals } from "./LatestDeals.styles"
import LatestDealsItem from "./LatestDealsItem/LatestDealsItem"
import "../../common/scss/Card.styles.scss"
import { useAppDispatch, useAppSelector } from "src/store/hooks"
import {
  getLatestDealsPosts,
  latestDealsPostsSelector
} from "./LatestDeals.slice"

const LatestDeals = () => {
  const dispatch = useAppDispatch()
  const latestDealsPosts = useAppSelector(latestDealsPostsSelector)
  const { current, isSuccess } = latestDealsPosts

  useEffect(() => {
    dispatch(getLatestDealsPosts())
  }, [dispatch])
  return (
    <Deals>
      <Card className="deals-card card-wrapper">
        <Card.Header className="deals-card-header wrapper-header">
          Latest Deals
        </Card.Header>
        <Card.Body className="deals-card-body">
          <Card.Text as="div">
            <Row>
              {isSuccess
                ? current.map((el, i) => (
                    <LatestDealsItem {...el} key={"latest-deals-item" + i} />
                  ))
                : null}
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </Deals>
  )
}

export default LatestDeals
