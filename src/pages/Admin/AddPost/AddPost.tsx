import React, { useState } from "react"
import "react-quill/dist/quill.snow.css"
import { AddPostPage } from "./AddPost.styles"
import { Button, Col, Form, Row } from "react-bootstrap"
import Editor from "../Editor/Editor"
import userApi from "src/apis/user.api"
import { useAppDispatch } from "src/store/hooks"
import { createNewPost } from "src/components/ViewAllPosts/Posts.slice"
import { Toaster } from "react-hot-toast"

export const AddPost = () => {
  const dispatch = useAppDispatch()
  const [title, setTitle] = useState("")
  const [image, setImage] = useState<string>("")
  const [content, setContent] = useState("")

  const callbackContent = childData => {
    setContent(childData)
  }

  const onChangeTitle = e => {
    setTitle(e.target.value)
  }

  const handleAddPost = (title: string, image: string, content: string) => {
    const params = {
      title: title,
      image: image,
      body: content
    }
    console.log(params)

    dispatch(createNewPost(params))
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
              <Form.File
                type="file"
                name="image-upload"
                label="Image"
                onChange={onChangeImage}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mt-3">
          <Row>
            <Col xs={10}>
              <Form.Label>Content</Form.Label>
              <Editor parentCallback={callbackContent} />
            </Col>
          </Row>
        </Form.Group>
        <Button
          variant="primary"
          type="button"
          onClick={() => handleAddPost(title, image, content)}
        >
          Add
        </Button>
      </Form>
    </AddPostPage>
  )
}

export default AddPost
