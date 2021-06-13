import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Logo from "../../../assets/images/logo.png"
import { CheckMailPage } from "./CheckMail.styles"

const CheckMailPassword = () => {
  return (
    <CheckMailPage>
      <Container className="container-checkMail">
        <Row className="justify-content-center">
          <Col md={10} lg={8} xl={6}>
            <div className="el-card">
              <div className="el-card__body">
                <div className="mb-3 text-center">
                  <img src={Logo} alt="Blogs Technology" />
                </div>
                <div className="mb-3">
                  <h3 className="card-title">
                    Forgot account password for Blogs
                  </h3>
                </div>
                <div>
                  <p className="card-subtitle mt-2">
                    Welcome to <strong>BLogs</strong>! Join us to find useful
                    information required to improve your skills.
                  </p>
                </div>

                <div
                  role="alert"
                  className="el-alert my-4 pt-4 el-alert--success is-light"
                >
                  <div className="el-alert__content">
                    <p className="el-alert__description">
                      <div className="subtitle">
                        <p className="my-3">
                          We have sent you an activation to the email address.
                          Please check your inbox to complete.
                        </p>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </CheckMailPage>
  )
}

export default CheckMailPassword
