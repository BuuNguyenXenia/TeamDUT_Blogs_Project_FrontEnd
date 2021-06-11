import { Button, Col, Row } from "react-bootstrap"
import { LatestNewsPage } from "src/components/LatestNews/LatestNews.styles"

import PostItem from "../PostItem/PostItem"

const PostList = props => {
  const { dataPost, isSuccess } = props

  return (
    <LatestNewsPage className="mt-4">
      <div className="view-list">
        {isSuccess
          ? dataPost.posts.map((el, i) => (
              <PostItem {...el} key={"myPost" + i} />
            ))
          : null}
        <Row className="mt-3 mb-3">
          <Col sm={{ span: 4, offset: 4 }} xs={{ span: 6, offset: 3 }}>
            <Button className="button-load-more btn-block">Load more</Button>
          </Col>
        </Row>
      </div>
    </LatestNewsPage>
  )
}

export default PostList
