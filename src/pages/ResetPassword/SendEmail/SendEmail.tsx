import React from "react"
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap"
import { Wrapper } from "../../Login/Login.styled"
import Logo from "../../../assets/images/logo.png"
import { Link, useHistory } from "react-router-dom"
import { Formik } from "formik"
import * as Yup from "yup"
import toast, { Toaster } from "react-hot-toast"
import userApi from "src/apis/user.api"
import { PATH } from "src/constants/path"

const SendEmail = () => {
  const history = useHistory()

  const onSubmit = async (email: string) => {
    try {
      const params = {
        email: email
      }
      console.log(params)

      const response = await userApi.forgotPassword(params)
      if (response.status === 200) {
        history.push(PATH.CHECK_MAIL_PASSWORD)
        console.log(response)
      }
    } catch (e) {
      console.log(e.response.data)
      toast.error(e.response.data)
      throw e
    }
  }

  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={values => {
        onSubmit(values.email)
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Invalid email format")
          .required("Email is required")
      })}
    >
      {({
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit
      }) => (
        <Wrapper>
          <Container className="container-login">
            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={5}>
                <div className="el-card">
                  <div className="el-card__body">
                    <div className="mb-3 text-center">
                      <img src={Logo} alt="Blogs Technology" />
                    </div>
                    <div className="mb-3">
                      <h5 className="card-title">Enter your email</h5>
                    </div>
                    <Form onSubmit={handleSubmit}>
                      <Form.Row>
                        <Form.Group as={Col} md="12" className="mb-3">
                          <InputGroup>
                            <InputGroup.Prepend>
                              <InputGroup.Text>
                                <i className="fa fa-user"></i>
                              </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                              name="email"
                              type="text"
                              placeholder="Email"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={
                                (errors.email && touched.email && "error") || ""
                              }
                            />
                          </InputGroup>
                          {errors.email && touched.email && (
                            <div className="text-danger col-md-12 p-0 mt-1">
                              {errors.email}
                            </div>
                          )}
                        </Form.Group>
                      </Form.Row>
                      <Button
                        type="submit"
                        className="btn btn-primary btn-block mb-2"
                      >
                        Send
                      </Button>
                      <Toaster />
                    </Form>
                    <Link to={PATH.LOGIN} className="back-login">
                      Back
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Wrapper>
      )}
    </Formik>
  )
}

export default SendEmail
