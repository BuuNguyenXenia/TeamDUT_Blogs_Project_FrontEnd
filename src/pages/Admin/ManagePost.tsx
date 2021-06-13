import { useEffect } from "react"
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap"
import Switch from "react-bootstrap/esm/Switch"
import { Toaster } from "react-hot-toast"
import { Route } from "react-router"
import { PATH } from "src/constants/path"
import { useAppDispatch, useAppSelector } from "src/store/hooks"
import { userSelector } from "../User/User.slice"
import AddPost from "./AddPost/AddPost"
import EditPost from "./EditPost/EditPost"
import { ManagePostPage } from "./ManagePost.styles"
import { dataMyPost, myPostSelector } from "./MyPost.slice"
import PostList from "./PostList/PostList"

const ManagePost = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(userSelector)
  const dataPost = useAppSelector(myPostSelector)
  console.log(dataPost)

  useEffect(() => {
    if (user.role === "admin") {
      dispatch(dataMyPost(1))
    }
  }, [user.role])

  return (
    dataPost && (
      <>
        <Toaster position="top-center" reverseOrder={false} />
        <ManagePostPage>
          <Container>
            <Row>
              <Col>
                <Tabs defaultActiveKey="posts" id="uncontrolled-tab">
                  <Tab eventKey="posts" title="Posts">
                    <Switch>
                      <Route path={PATH.MANAGE_POST} exact>
                        <PostList {...dataPost} />
                      </Route>
                      <Route
                        path={`${PATH.MANAGE_POST}${PATH.EDIT_POST}/:postId`}
                      >
                        <EditPost />
                      </Route>
                    </Switch>
                  </Tab>
                  <Tab eventKey="add post" title="Add Post">
                    <AddPost />
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </Container>
        </ManagePostPage>
      </>
    )
  )
}

export default ManagePost
