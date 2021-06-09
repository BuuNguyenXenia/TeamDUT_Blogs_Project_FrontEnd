import React, { useEffect, useState } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import toast, { Toaster } from "react-hot-toast"
import { ProfileStyle } from "./Profile.styled"
import { useAppDispatch, useAppSelector } from "src/store/hooks"
import { updateUserName, userSelector } from "src/pages/User/User.slice"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import axios from "axios"
import { CONFIG } from "src/constants/config"

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

  //----------------------------------------------

  const [profileImg, setProfileImg] = useState<string>(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  )
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
    try {
      console.log(image)

      let formData = new FormData()
      formData.append("image", image)

      const res = await axios.post("https://api.imgur.com/3/image", formData, {
        headers: {
          Accept: "application/form-data",
          Authorization: `Client-ID ${CONFIG.CLIENT}`
        }
      })
      console.log(res)
    } catch (err) {
      console.log(err)
      return err
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
        <Col md={2} sm={12} className="profile-avatar">
          <img src={avatar} alt="avatar" />
          <div className="change-avatar" onClick={handleShow}>
            <i className="fas fa-camera-retro"></i>
          </div>
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
                  accept="image/png, image/jpeg"
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
          <Button onClick={() => imageUploadToImgur(image)}>Save</Button>
        </Modal.Footer>
      </Modal>
      <Row className={checkEditUSer ? "m-0 mt-5 active" : "m-0 form-user"}>
        <Row>
          <Col xs={2}>
            <img src="" alt="" />
          </Col>
        </Row>
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
