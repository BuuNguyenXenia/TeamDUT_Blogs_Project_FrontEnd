import { Link } from "react-router-dom"
import { PATH } from "src/constants/path"
import { NotFound } from "./NotFoundPage.styles"

const NotFoundPage = () => {
  return (
    <NotFound>
      <div className="main">
        <div id="particles" className="particles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <main>
          <section>
            <h1>Page Not Found!</h1>
            <div>
              <span>4</span>
              <span className="circle">0</span>
              <span>4</span>
            </div>
            <p>
              We are unable to find the page
              <br />
              you're looking for.
            </p>
            <div>
              <Link to={PATH.HOME}>
                <button>Back to Home Page</button>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </NotFound>
  )
}

export default NotFoundPage
