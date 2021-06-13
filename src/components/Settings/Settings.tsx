import { Button, Col, Form, Row } from "react-bootstrap"
import { SettingsPage } from "./Settings.styles"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"
import { useState } from "react"
import { useAppSelector } from "src/store/hooks"
import { userSelector } from "src/pages/User/User.slice"
import userApi from "src/apis/user.api"
import { MSG } from "src/constants/showMsg"

const Settings = () => {
  const user = useAppSelector(userSelector)

  const [state, setState] = useState({
    password: "",
    newPassword: "",
    confirmPassword: ""
  })

  const handleChange = evt => {
    const value = evt.target.value
    setState({
      ...state,
      [evt.target.name]: value
    })
  }

  const HandlePassword = async (user, params) => {
    try {
      const response = await userApi.updatePassword(user.name, params)
      if (response.status === 200) {
        toast.success(MSG.CHANGE_PASSWORD_SUCCESS)
      }
    } catch (err) {
      toast.error(err.response.data)
    }
  }

  const schema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must has at least 8 characters"),
    newPassword: Yup.string()
      .required("Password is required")
      .min(8, "Password must has at least 8 characters"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("newPassword"), ""], "Password must match")
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  return (
    <SettingsPage>
      <Row>
        <Col xs={12}>
          <h3 className="settings-title mt-3">Change Password</h3>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit(() => HandlePassword(user, state))}>
        <Row>
          <Col xs={4} md={3}>
            <Form.Label>Password:</Form.Label>
          </Col>
          <Col xs={7} md={7}>
            <Form.Control
              type="password"
              value={state.password}
              {...register("password")}
              name="password"
              onChange={handleChange}
              placeholder="password"
            />
            <p className="mt-2 error">{errors.password?.message}</p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={4} md={3}>
            <Form.Label>New Password: </Form.Label>
          </Col>
          <Col xs={7} md={7}>
            <Form.Control
              type="password"
              value={state.newPassword}
              {...register("newPassword")}
              name="newPassword"
              onChange={handleChange}
              placeholder="new password"
            />
            <p className="mt-2 error">{errors.newPassword?.message}</p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={4} md={3}>
            <Form.Label>Confirm Password: </Form.Label>
          </Col>
          <Col xs={7} md={7}>
            <Form.Control
              type="password"
              value={state.confirmPassword}
              {...register("confirmPassword")}
              name="confirmPassword"
              onChange={handleChange}
              placeholder="confirm password"
            />
            <p className="mt-2 error">{errors.confirmPassword?.message}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={4} md={3} className="mb-4">
            <Button variant="primary" className="mt-4" type="submit" block>
              Update
            </Button>
          </Col>
        </Row>
      </Form>

      <Toaster position="bottom-right" reverseOrder={false} />
    </SettingsPage>
  )
}

export default Settings
