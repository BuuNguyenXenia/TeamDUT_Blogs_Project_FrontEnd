import { Col, Row } from "react-bootstrap"
import { LatestNewsPage } from "src/components/LatestNews/LatestNews.styles"
import PostItem from "../PostItem/PostItem"
import PaginationAdmin from "../Pagination/PaginationAdmin"

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
        <Row>
          <Col xs={12}>
            <PaginationAdmin lastPage={dataPost.last_page} />
          </Col>
        </Row>
      </div>
    </LatestNewsPage>
  )
}

export default PostList
