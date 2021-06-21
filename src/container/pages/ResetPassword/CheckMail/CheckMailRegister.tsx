import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Logo from "../../../../assets/images/logo.png"
import { CheckMailPage } from "./CheckMail.styles"

const CheckMailRegister = () => {
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
                  <h3 className="card-title">Register account for Blogs</h3>
                </div>
                <div>
                  <p className="card-subtitle mt-2">
                    Welcome to <strong>BLogs</strong>! Join us to find useful
                    information required to improve your skills. Please fill
                    your info into the form below to continue.
                  </p>
                </div>

                <div
                  role="alert"
                  className="el-alert my-4 pt-4 el-alert--success is-light"
                >
                  <div className="el-alert__content">
                    <div className="el-alert__description">
                      <div className="subtitle">
                        <p className="my-3">
                          Welcome to <strong>Blogs</strong>, your account have
                          been <strong>registered successfully</strong>. We have
                          sent you an activation to the email address. Please
                          check your inbox to complete.
                        </p>
                      </div>
                    </div>
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

export default CheckMailRegister
