import React, { useEffect, useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import toast, { Toaster } from "react-hot-toast"
import { ProfileStyle } from "./Profile.styled"
import { useAppDispatch, useAppSelector } from "src/store/hooks"
import { updateUserName, userSelector } from "src/pages/User/User.slice"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"

const Profile = () => {
  const user = useAppSelector(userSelector)
  const dispatch = useAppDispatch()
  const { name, email, avatar } = user

  const [userName, setUserName] = useState<string>(name)
  const [checkEditUSer, setCheckEditUSer] = useState<boolean>(false)

  const changeUserName = e => {
    setUserName(e.target.value)
  }
  const HandleShowUser = () => {
    setCheckEditUSer(!checkEditUSer)
  }

  const HandleUserName = (name, nameNew) => {
    const params = {
      name: nameNew,
      email: email,
      urlUser: name
    }
    dispatch(updateUserName(params))
    toast.success("Finish")
  }

  const schema = Yup.object().shape({
    username: Yup.string()
      .required("User name is required")
      .min(2, "User name must has at least 2 characters")
      .max(15, "User name has a maximum of 15 characters")
  })

  useEffect(() => {
    setUserName(name)
  }, [name])

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  return (
    <ProfileStyle>
      <Row>
        <Col xs={12}>
          <h3 className="profile-title mt-3">Profile</h3>
        </Col>
      </Row>
      <Row className="profile-user">
        <Col md={2} sm={12} className="profile-avatar">
          <img src={avatar} alt="avatar" />
        </Col>
        <Col md={5} sm={12} className="profile-body">
          <p className="profile-gmail">{email}</p>
          <p className="profile-name">@{name}</p>
        </Col>
        <Col md={5} sm={12}>
          <Button
            variant="outline-primary mt-3"
            onClick={() => HandleShowUser()}
          >
            Edit
          </Button>
        </Col>
      </Row>
      <Row className={checkEditUSer ? "m-0 mt-5 active" : "m-0 form-user"}>
        <Form onSubmit={handleSubmit(() => HandleUserName(name, userName))}>
          <Row>
            <Col xs={12}>
              <h3 className="profile-title mt-3">Change User</h3>
            </Col>
          </Row>
          <Row>
            <Col xs={2}>
              <Form.Label>Email:</Form.Label>
            </Col>
            <Col xs={7}>
              <Form.Control type="email" value={email} disabled />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={2}>
              <Form.Label>User Name:</Form.Label>
            </Col>
            <Col xs={7}>
              <Form.Control
                type="text"
                value={userName}
                {...register("username")}
                onChange={changeUserName}
              />
              <p className="mt-2 error">{errors.username?.message}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={2}>
              <Button variant="primary" className="mt-4" type="submit" block>
                Update
              </Button>
            </Col>
          </Row>
        </Form>
      </Row>
      <Toaster position="bottom-right" reverseOrder={false} />
    </ProfileStyle>
  )
}

export default Profile
