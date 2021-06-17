import React, { useEffect, useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { EditPostPage } from "./EditPost.styles"
import { Link, useParams } from "react-router-dom"
import { PATH } from "src/services/constants/path"
import userApi from "src/apis/user.api"
import { useAppDispatch, useAppSelector } from "src/redux/store/hooks"
import {
  itemPostSelector,
  itemPostThunk
} from "src/redux/slices/allPostsSlice/Posts.slice"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import {
  editPost,
  editPostAdmin,
  postsManageSelector
} from "../../../../redux/slices/PostsManageSlice/PostsManage.slice"
import Spinner from "react-bootstrap/Spinner"

interface RouteParams {
  postId: string
}
const EditPost = () => {
  const dispatch = useAppDispatch()
  const { isFetching } = useAppSelector(postsManageSelector)
  const data = useAppSelector(itemPostSelector)
  const { dataPost } = data

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [content, setContent] = useState("")

  const { postId } = useParams<RouteParams>()

  useEffect(() => {
    dispatch(itemPostThunk(postId))
  }, [])

  useEffect(() => {
    if (Object.keys(dataPost).length !== 0) {
      setTitle(dataPost.title)
      setImage(dataPost.image)
      setContent(dataPost.body)
    }
  }, [data])

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
    dispatch(editPostAdmin(params))
  }

  const handleChange = value => {
    setContent(value)
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

  return (
    <EditPostPage>
      <Form>
        <Form.Group className="mt-3">
          <Row>
            <Col xs={11} md={8}>
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
            <Col xs={11}>
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
            <Col xs={11} md={10}>
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
                <Button variant="info" type="button">
                  Cancel
                </Button>
              </Link>
              <Button
                variant="primary"
                type="button"
                onClick={() => handleEditPost(postId, title, image, content)}
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
                Edit
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </EditPostPage>
  )
}

export default EditPost
