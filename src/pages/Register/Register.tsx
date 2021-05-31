import React from "react"
import { Wrapper } from "./Register.styled"
import { Container, Row, Col, Form, Button, FormControl } from "react-bootstrap"
import Logo from "../../assets/images/logo.png"
import { Formik } from "formik"
import * as Yup from "yup"

const Register = () => (
  <Formik
    initialValues={{
      yourName: "",
      email: "",
      userName: "",
      password: "",
      confirmPassword: ""
    }}
    onSubmit={values => {
      // eslint-disable-next-line no-console
      console.log(values)
    }}
    validationSchema={Yup.object().shape({
      yourName: Yup.string()
        .required("Your name is required")
        .min(2, "Your name must has at least 2 characters")
        .max(20, "Your name has a maximum of 20 characters"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      userName: Yup.string()
        .required("User name is required")
        .min(2, "User name must has at least 2 characters")
        .max(15, "User name has a maximum of 15 characters"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must has at least 8 characters")
        .matches(/(?=.*[0-9])/, "Password must contain number"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), ""], "Password must match")
        .required("Confirm password is required")
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props
      return (
        <Wrapper>
          <Container>
            <Row>
              <div className="d-flex justify-content-center py-4 mb-2 col-12">
                <img src={Logo} alt="Blogs Technology" />
              </div>
            </Row>
            <Row>
              <Col sm={12} md={10} lg={8} xl={6} className="mx-auto">
                <div className="el-card">
                  <div className="el-card__body">
                    <h3 className="card-title">Register account for Blogs</h3>
                    <p className="card-subtitle mt-2 mb-3">
                      Welcome to <strong>Blogs</strong>! Join us to find useful
                      information required. Please fill your info into the form
                      below to continue.
                    </p>
                    <Form onSubmit={handleSubmit}>
                      <Form.Row className="align-items-center">
                        <Col sm={12} md={12} lg={12} xl={12} className="mb-3">
                          <Form.Control
                            name="yourName"
                            type="text"
                            placeholder="Your name"
                            value={values.yourName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              (errors.yourName &&
                                touched.yourName &&
                                "error") ||
                              ""
                            }
                          />
                          {errors.yourName && touched.yourName && (
                            <div className="text-danger mt-1">
                              {errors.yourName}
                            </div>
                          )}
                        </Col>
                        <Col sm={12} md={6} lg={6} xl={6} className="mb-3">
                          <FormControl
                            name="email"
                            type="text"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              (errors.email && touched.email && "error") || ""
                            }
                            placeholder="Your email address"
                          />
                          {errors.email && touched.email && (
                            <div className="text-danger mt-1">
                              {errors.email}
                            </div>
                          )}
                        </Col>
                        <Col sm={12} md={6} lg={6} xl={6} className="mb-3">
                          <FormControl
                            name="userName"
                            type="text"
                            value={values.userName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              (errors.userName &&
                                touched.userName &&
                                "error") ||
                              ""
                            }
                            placeholder="Username"
                          />
                          {errors.userName && touched.userName && (
                            <div className="text-danger mt-1">
                              {errors.userName}
                            </div>
                          )}
                        </Col>

                        <Col sm={12} md={12} lg={12} xl={12} className="mb-3">
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

                        <Col sm={12} md={12} lg={12} xl={12} className="mb-3">
                          <Form.Control
                            name="confirmPassword"
                            type="password"
                            value={values.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              (errors.confirmPassword &&
                                touched.confirmPassword &&
                                "error") ||
                              ""
                            }
                            placeholder="Confirm your password"
                            autoComplete="on"
                          />
                          {errors.confirmPassword &&
                            touched.confirmPassword && (
                              <div className="text-danger mt-1">
                                {errors.confirmPassword}
                              </div>
                            )}
                        </Col>
                        <Col xs={12} md={12}>
                          <Button
                            type="submit"
                            className="btn btn-primary btn-block mb-2"
                          >
                            Sign up
                          </Button>
                        </Col>
                      </Form.Row>
                    </Form>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Wrapper>
      )
    }}
  </Formik>
)
export default Register
