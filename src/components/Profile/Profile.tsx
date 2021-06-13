import React, { useEffect, useState } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import toast, { Toaster } from "react-hot-toast"
import { ProfileStyle } from "./Profile.styled"
import { useAppDispatch, useAppSelector } from "src/store/hooks"
import {
  updateAvatarUser,
  updateUserName,
  userSelector
} from "src/pages/User/User.slice"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import userApi from "src/apis/user.api"
import { MSG } from "src/constants/showMsg"
import avatarDefault from "src/assets/images/avatar.png"
import Spinner from "react-bootstrap/Spinner"

const Profile = () => {
  const user = useAppSelector(userSelector)
  const dispatch = useAppDispatch()
  const { name, email, avatar, isFetching } = user

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
    toast.success("Change User name successfully")
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

  //----------------------------------------------

  const [profileImg, setProfileImg] = useState<string>(avatarDefault)
  const [image, setImage] = useState<any>(null)

  const imageHandler = e => {
    setImage(e.target.files[0])

    const reader: any = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImg(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  const [show, setShow] = useState(false)

  const handleClose = () => {
    setShow(false)
  }
  const handleShow = () => setShow(true)

  const imageUploadToImgur = async (image: any) => {
    if (image !== null) {
      try {
        const formData = new FormData()

        formData.append("file", image)
        formData.append("tags", `codeinfuse, medium, gist`)
        formData.append("upload_preset", "rhy123")
        formData.append("api_key", "954397545867351")

        const response = await userApi.uploadAvatar(formData)
        const data = await response.data

        if (response.status === 200) {
          const params = {
            name: name,
            avatar: data.secure_url
          }
          dispatch(updateAvatarUser(params))
          toast.success(MSG.UPDATE_AVATAR_SUCCESS)
          setProfileImg(avatarDefault)
          if (!isFetching) {
            setShow(false)
          }
        }
      } catch (err) {
        toast.error(err.response.data)
      }
    } else {
      toast.error("Please choose picture")
    }
  }

  //-------------------------------------------------

  return (
    <ProfileStyle>
      <Row>
        <Col xs={12}>
          <h3 className="profile-title mt-3">Profile</h3>
        </Col>
      </Row>
      <Row className="profile-user">
        <Col md={2} xs={3} className="profile-avatar">
          <img src={avatar} alt="avatar" className="avatar" />
          <div className="change-avatar" onClick={handleShow}>
            <i className="fas fa-camera-retro"></i>
          </div>
        </Col>
        <Col md={7} xs={6} className="profile-body ">
          <p className="profile-gmail">{email}</p>
          <p className="profile-name">@{name}</p>
        </Col>
        <Col md={3} xs={2} className="p-0">
          <Button
            variant="outline-primary mt-3"
            onClick={() => HandleShowUser()}
          >
            Edit
          </Button>
        </Col>
      </Row>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-xs"
        className="model"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Change Profile Picture
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={12}>
              <div className="page">
                <div className="img-holder">
                  <img src={profileImg} alt="" id="img" className="img" />
                </div>

                <input
                  type="file"
                  name="image-upload"
                  id="input"
                  onChange={imageHandler}
                />
                <p className="text-center mt-1">
                  <small>
                    Tips: Use scroll wheel to zoom, drag to move profile
                    picture.
                  </small>
                </p>
                <label className="button-upload" htmlFor="input">
                  <Button as="span" variant="outline-info">
                    <i className="fas fa-upload"></i>
                  </Button>
                </label>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => imageUploadToImgur(image)}>
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
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <Row className={checkEditUSer ? "m-0 mt-5 active" : "m-0 form-user"}>
        <Form onSubmit={handleSubmit(() => HandleUserName(name, userName))}>
          <Row>
            <Col xs={12}>
              <h3 className="profile-title mt-3">Change User</h3>
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <Form.Label>Email:</Form.Label>
            </Col>
            <Col xs={9} md={7}>
              <Form.Control type="email" value={email} disabled />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={3}>
              <Form.Label>User Name:</Form.Label>
            </Col>
            <Col xs={9} md={7}>
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
            <Col xs={4} md={3}>
              <Button
                variant="primary"
                className="mt-3 mb-4"
                type="submit"
                block
              >
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
