import React, { useEffect } from "react"
import { Card, Col, Row } from "react-bootstrap"
import { Deals } from "./LatestDeals.styles"
import LatestDealsItem from "./LatestDealsItem/LatestDealsItem"
import "../../../common/scss/Card.styles.scss"
import { useAppDispatch, useAppSelector } from "src/redux/store/hooks"
import {
  getLatestDealsPosts,
  latestDealsPostsSelector
} from "../../../redux/slices/latestDealsSlice/LatestDeals.slice"
import Loading from "../Loading/Loading"

const LatestDeals = () => {
  const dispatch = useAppDispatch()
  const latestDealsPosts = useAppSelector(latestDealsPostsSelector)
  const { current, isSuccess, isFetching } = latestDealsPosts

  useEffect(() => {
    if (Object.keys(current).length === 0) {
      dispatch(getLatestDealsPosts())
    }
  }, [])
  return (
    <Deals>
      <Card className="deals-card card-wrapper">
        <Card.Header className="deals-card-header wrapper-header">
          Latest Deals
        </Card.Header>
        <Card.Body className="deals-card-body">
          <Card.Text as="div">
            <Row>
              {isFetching && (
                <Col xs={12}>
                  <Loading height={371.062} />
                </Col>
              )}
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
