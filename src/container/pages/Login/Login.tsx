import React, { useEffect } from "react"
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap"
import { Wrapper } from "./Login.styled"
import Logo from "../../../assets/images/logo.png"
import { Link, useHistory } from "react-router-dom"
import { Formik } from "formik"
import * as Yup from "yup"
import { useAppSelector, useAppDispatch } from "../../../redux/store/hooks"
import {
  clearState,
  loginUser,
  userSelector
} from "../../../redux/slices/userSlice/User.slice"
import toast, { Toaster } from "react-hot-toast"
import { PATH } from "src/services/constants/path"
import Spinner from "react-bootstrap/Spinner"

const Login = () => {
  const dispatch = useAppDispatch()
  const history = useHistory()
  const { isSuccess, isError, errorMessage, isFetching } =
    useAppSelector(userSelector)

  const onSubmit = data => {
    dispatch(loginUser(data))
  }

  useEffect(() => {
    if (isError) {
      dispatch(clearState())
      toast.error(errorMessage)
    }
    if (isSuccess) {
      dispatch(clearState())
      history.push(PATH.HOME)
    }
  }, [isError, isSuccess])

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={values => {
        let params = {
          email: values.email,
          password: values.password
        }
        onSubmit(params)
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Invalid email format")
          .required("Email is required"),
        password: Yup.string()
          .required("Password is required")
          .min(8, "Password must has at least 8 characters")
          .matches(/(?=.*[0-9])/, "Password must contain number")
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
                    <div className="text-center mb-3">
                      <h5 className="card-title"> Login to Blogs</h5>
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
                        <Form.Group as={Col} md="12" className="mb-3">
                          <InputGroup hasValidation>
                            <InputGroup.Prepend>
                              <InputGroup.Text>
                                <i className="fa fa-lock"></i>
                              </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                              name="password"
                              type="password"
                              placeholder="Enter your password"
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={
                                (errors.password &&
                                  touched.password &&
                                  "error") ||
                                ""
                              }
                              autoComplete="on"
                            />
                          </InputGroup>
                          {errors.password && touched.password && (
                            <div className="text-danger col-md-12 p-0 mt-1">
                              {errors.password}
                            </div>
                          )}
                        </Form.Group>
                      </Form.Row>
                      <Button
                        type="submit"
                        className="btn btn-primary btn-block mb-2"
                      >
                        {isFetching && (
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="false"
                            className="mr-1"
                          />
                        )}
                        Sign in
                      </Button>
                      <div className="d-flex justify-content-between">
                        <Link to={PATH.SEND_EMAIL}>Forgot your password?</Link>
                        <Link to={PATH.REGISTER}> Create accounts</Link>
                      </div>
                      <Toaster />
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

export default Login
