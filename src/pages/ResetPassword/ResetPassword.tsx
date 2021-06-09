import React from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { Wrapper } from "../Login/Login.styled"
import Logo from "../../assets/images/logo.png"
import { Formik } from "formik"
import * as Yup from "yup"
import toast, { Toaster } from "react-hot-toast"
import { Link, useHistory, useParams } from "react-router-dom"
import userApi from "src/apis/user.api"
import { MSG } from "../../constants/showMsg"
import { PATH } from "../../constants/path"

interface RouteParams {
  resetLink: string
}

const ResetPassword = () => {
  const history = useHistory()
  const urlLink = useParams<RouteParams>()
  console.log(urlLink)

  const onSubmit = async (link, password) => {
    try {
      const params = {
        resetLink: link,
        newPassword: password
      }
      console.log(params)

      const response = await userApi.resetPassword(params)
      if (response.status === 200) {
        toast.success(MSG.FORGOT_PASSWORD_SUCCESS)
        history.push(PATH.LOGIN)
      }
    } catch (err) {
      toast.error(err.response.data)
      throw err
    }
  }

  return (
    <Formik
      initialValues={{ password: "", confirmPassword: "" }}
      onSubmit={values => {
        onSubmit(urlLink.resetLink, values.password)
      }}
      validationSchema={Yup.object().shape({
        password: Yup.string()
          .required("Password is required")
          .min(8, "Password must has at least 8 characters")
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
                      <h5>Enter your new password</h5>
                    </div>
                    <Form onSubmit={handleSubmit}>
                      <Form.Row>
                        <Col sm={12} className="mb-3">
                          <Form.Control
                            name="password"
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              (errors.password &&
                                touched.password &&
                                "error") ||
                              ""
                            }
                            placeholder="Password"
                            autoComplete="on"
                          />
                          {errors.password && touched.password && (
                            <div className="text-danger mt-1">
                              {errors.password}
                            </div>
                          )}
                        </Col>
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

export default ResetPassword
