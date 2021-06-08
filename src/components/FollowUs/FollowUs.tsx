import React from "react"
import { Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { PATH } from "src/constants/path"
import { Follow } from "./FollowUs.styles"

const FollowUs: React.FC = () => {
  return (
    <Follow className="mb-4">
      <Card className="follow-card card-wrapper">
        <Card.Header className="follow-card-header wrapper-header">
          Follow Us
        </Card.Header>
        <Card.Body className="follow-card-body social-icons">
          <Row>
            <Col className="social-icons-item pb-1 pr-1" xs={6}>
              <Link to={PATH.NOT_FOUND} className="facebook btn">
                <i className="fab fa-facebook"></i>
                <span className="text">Facebook</span>
              </Link>
            </Col>
            <Col className="social-icons-item pb-1 pl-1" xs={6}>
              <Link to={PATH.NOT_FOUND} className="twitter btn">
                <i className="fab fa-twitter"></i>
                <span className="text">Twitter</span>
              </Link>
            </Col>
            <Col className="social-icons-item pt-1 pr-1" xs={6}>
              <Link to={PATH.NOT_FOUND} className="youtube btn">
                <i className="fab fa-youtube"></i>
                <span className="text">Youtube</span>
              </Link>
            </Col>
            <Col xs={6} className="social-icons-item pt-1 pl-1">
              <Link to={PATH.NOT_FOUND} className="instagram btn">
                <i className="fab fa-instagram"></i>
                <span className="text">Instagram</span>
              </Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Follow>
  )
}

export default FollowUs
