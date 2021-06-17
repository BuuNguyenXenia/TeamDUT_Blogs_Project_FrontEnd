import { Col, Row } from "react-bootstrap"
import { LatestNewsPage } from "src/container/components/LatestNews/LatestNews.styles"
import PostItem from "../PostItem/PostItem"
import PaginationAdmin from "../Pagination/PaginationAdmin"
import Loading from "src/container/components/Loading/Loading"

const PostList = props => {
  const { dataPost, isSuccess, isFetching } = props
  console.log(dataPost)

  return (
    <LatestNewsPage className="mt-4">
      <div className="view-list">
        {isFetching && <Loading height={20} />}
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
