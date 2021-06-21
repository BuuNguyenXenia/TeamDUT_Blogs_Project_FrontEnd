import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { FooterBlogs } from "./Footer.styles"
import Logo from "../../../assets/images/logo.png"

const Footer: React.FC = () => {
  return (
    <FooterBlogs className="footer-wrapper primary-footer flex-center mt-5">
      <div className="primary-footer">
        <Container>
          <Row className="flex-center py-3">
            <Col sm={12} md={12} lg={2} xl={2} className="widget">
              <div className="footer-logo">
                <img src={Logo} alt="Blogs Technology" />
              </div>
            </Col>
            <Col sm={12} md={12} lg={6} xl={6} className="footer-info">
              <p className="footer-title">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
            </Col>
            <Col xs={12} sm={12} md={12} lg={4} xl={4} className="linkList">
              <ul className="social-icons m-0">
                <li className="facebook">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li className="twitter">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="youtube">
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li className="instagram">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="rss">
                  <a href="https://rss.com" target="_blank" rel="noreferrer">
                    <i className="fas fa-rss"></i>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </FooterBlogs>
  )
}

export default Footer
