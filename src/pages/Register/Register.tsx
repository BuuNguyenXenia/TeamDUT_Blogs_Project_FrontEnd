import React, { useEffect } from "react"
import { Wrapper } from "./Register.styled"
import { Container, Row, Col, Form, Button, FormControl } from "react-bootstrap"
import Logo from "../../assets/images/logo.png"
import { Formik } from "formik"
import * as Yup from "yup"
import { useAppSelector, useAppDispatch } from "../../store/hooks"
import { registerUser, userSelector, clearState } from "../User/User.slice"
import { useHistory } from "react-router-dom"
import toast, { Toaster } from "react-hot-toast"

const Register = () => {
  const dispatch = useAppDispatch()
  const history = useHistory()
  const { isSuccess, isError, errorMessage } = useAppSelector(userSelector)

  console.log(isSuccess, isError, errorMessage)

  const onSubmit = data => {
    dispatch(registerUser(data))
  }

  useEffect(() => {
    return () => {
      dispatch(clearState())
    }
  }, [dispatch])

  useEffect(() => {
    if (isError) {
      console.log(errorMessage)

      toast.error(errorMessage)
      dispatch(clearState())
    }

    if (isSuccess) {
      dispatch(clearState())
      history.push("/login")
    }
  }, [isError, isSuccess])
  return (
    <Formik
      initialValues={{
        email: "",
        userName: "",
        password: "",
        confirmPassword: ""
      }}
      onSubmit={values => {
        let params = {
          name: values.userName,
          email: values.email,
          password: values.password,
          passwordConfirmation: values.confirmPassword
        }
        onSubmit(params)
      }}
      validationSchema={Yup.object().shape({
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
      {({
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit
      }) => (
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
                        <Col sm={12} className="mb-3">
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
                        <Col sm={12} className="mb-3">
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
                        <Toaster position="bottom-right" reverseOrder={false} />
                      </Form.Row>
                    </Form>
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
export default Register
