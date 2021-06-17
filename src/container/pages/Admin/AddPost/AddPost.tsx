import React, { useState } from "react"
import "react-quill/dist/quill.snow.css"
import { AddPostPage } from "./AddPost.styles"
import { Button, Col, Form, Row } from "react-bootstrap"
import userApi from "src/apis/user.api"
import { useAppDispatch, useAppSelector } from "src/redux/store/hooks"
import {
  createNewPost,
  dataMyPost,
  postsManageSelector
} from "../../../../redux/slices/PostsManageSlice/PostsManage.slice"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import Spinner from "react-bootstrap/Spinner"

export const AddPost = () => {
  const dispatch = useAppDispatch()
  const [title, setTitle] = useState("")
  const [image, setImage] = useState<string>("")
  const [content, setContent] = useState("")

  const { isFetching } = useAppSelector(postsManageSelector)

  const handleChangeTitle = e => {
    setTitle(e.target.value)
  }

  const handleChangeContent = value => {
    setContent(value)
  }

  const HandleClear = () => {
    setTitle("")
    setContent("")
  }

  const handleAddPost = (title: string, image: string, content: string) => {
    const params = {
      title: title,
      image: image,
      body: content
    }
    console.log(params)

    dispatch(createNewPost(params))
    dispatch(dataMyPost(1))
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
      } else {
      }
    } catch (err) {
      throw e
    }
  }

  return (
    <AddPostPage>
      <Form>
        <Form.Group className="mt-3">
          <Row>
            <Col xs={11} md={8}>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                value={title}
                onChange={handleChangeTitle}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mt-3">
          <Row>
            <Col xs={12}>
              <Form.File
                type="file"
                id="image"
                name="image-upload"
                label="Image"
                onChange={onChangeImage}
                required
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mt-3">
          <Row>
            <Col xs={11} md={10}>
              <Form.Label>Content</Form.Label>
              <ReactQuill
                theme="snow"
                value={content}
                onChange={handleChangeContent}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mt-3">
          <Row>
            <Col>
              <Button
                variant="secondary"
                type="button"
                className="mr-3"
                onClick={() => HandleClear()}
              >
                Clear
              </Button>
              <Button
                variant="primary"
                type="button"
                onClick={() => handleAddPost(title, image, content)}
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
                Add
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </AddPostPage>
  )
}

export default AddPost
