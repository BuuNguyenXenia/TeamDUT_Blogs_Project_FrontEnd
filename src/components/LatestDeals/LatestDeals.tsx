import React from "react"
import { Card, Row } from "react-bootstrap"
import { Deals } from "./LatestDeals.styles"
import LatestDealsItem from "./LatestDealsItem/LatestDealsItem"
import "../../common/scss/Card.styles.scss"

const LatestDeals: React.FC = () => {
  return (
    <Deals>
      <Card className="deals-card card-wrapper">
        <Card.Header className="deals-card-header wrapper-header">
          Latest Deals
        </Card.Header>
        <Card.Body className="deals-card-body">
          <Card.Text>
            <Row>
              <LatestDealsItem />
              <LatestDealsItem />
              <LatestDealsItem />
              <LatestDealsItem />
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </Deals>
  )
}

export default LatestDeals
