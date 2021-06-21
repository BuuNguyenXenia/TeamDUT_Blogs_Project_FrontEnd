import React from "react"
import { Card, Col, Row } from "react-bootstrap"
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
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="facebook btn"
                rel="noreferrer"
              >
                <i className="fab fa-facebook"></i>
                <span className="text">Facebook</span>
              </a>
            </Col>
            <Col className="social-icons-item pb-1 pl-1" xs={6}>
              <a
                href="https://twitter.com"
                target="_blank"
                className="twitter btn"
                rel="noreferrer"
              >
                <i className="fab fa-twitter"></i>
                <span className="text">Twitter</span>
              </a>
            </Col>
            <Col className="social-icons-item pt-1 pr-1" xs={6}>
              <a
                href="https://youtube.com"
                target="_blank"
                className="youtube btn"
                rel="noreferrer"
              >
                <i className="fab fa-youtube"></i>
                <span className="text">Youtube</span>
              </a>
            </Col>
            <Col xs={6} className="social-icons-item pt-1 pl-1">
              <a
                href="https://instagram.com"
                target="_blank"
                className="instagram btn"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
                <span className="text">Instagram</span>
              </a>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Follow>
  )
}

export default FollowUs
