import React, { useEffect, useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { Toaster } from "react-hot-toast"
import { EditPostPage } from "./EditPost.styles"
import { Link } from "react-router-dom"
import { PATH } from "src/constants/path"
import LocalStorageService from "src/services/LocalStorageService/Storage.service"
import userApi from "src/apis/user.api"
import { useAppDispatch } from "src/store/hooks"
import { editPost } from "src/components/ViewAllPosts/Posts.slice"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
const EditPost = () => {
  const dispatch = useAppDispatch()

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [content, setContent] = useState("")
  const [id, setId] = useState("")

  const data: any = LocalStorageService.getItem("itemPost")

  useEffect(() => {
    if (data !== null) {
      setTitle(data.title)
      setImage(data.image)
      setContent(data.body)
      setId(data.postId)
    }
  }, [])

  const onChangeTitle = e => {
    setTitle(e.target.value)
  }

  const handleEditPost = (
    id: string,
    title: string,
    image: string,
    content: string
  ) => {
    const params = {
      postId: id,
      title: title,
      image: image,
      body: content
    }
    console.log(params)
    dispatch(editPost(params))
  }

  const onChangeImage = async e => {
    const formData = new FormData()

    try {
      formData.append("file", e.target.files[0])
      formData.append("tags", `codeinfuse, medium, gist`)
      formData.append("upload_preset", "rhy123")
      formData.append("api_key", "954397545867351")

      const response = await userApi.uploadAvatar(formData)
      const data = await response.data

      if (response.status === 200) {
        setImage(data.secure_url)
      }
    } catch (err) {
      throw e
    }
  }

  const handleChange = value => {
    setContent(value)
  }

  return (
    data && (
      <EditPostPage>
        <Toaster position="top-center" reverseOrder={true} />
        <Form>
          <Form.Group className="mt-3">
            <Row>
              <Col xs={8}>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Title"
                  value={title}
                  onChange={onChangeTitle}
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mt-3">
            <Row>
              <Col xs={12}>
                <label className="form-file-label">Image</label>
              </Col>
              <Col xs={12} className="mb-3">
                <img src={image} alt="" className="image-post" />
              </Col>
              <Col xs={12}>
                <Form.File
                  type="file"
                  name="image-upload"
                  onChange={onChangeImage}
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mt-3">
            <Row>
              <Col xs={10}>
                <Form.Label>Content</Form.Label>
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mt-3">
            <Row>
              <Col xs={12}>
                <Link to={PATH.MANAGE_POST} className="mr-3">
                  <Button variant="primary" type="button">
                    Cancel
                  </Button>
                </Link>
                <Button
                  variant="primary"
                  type="button"
                  onClick={() => handleEditPost(id, title, image, content)}
                >
                  Edit
                </Button>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </EditPostPage>
    )
  )
}

export default EditPost
