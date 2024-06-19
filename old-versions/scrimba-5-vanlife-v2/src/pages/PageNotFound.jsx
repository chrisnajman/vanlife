import { Link } from "react-router-dom"
import { FaCircleArrowLeft } from "react-icons/fa6"

function PageNotFound() {
  return (
    <div className="content-container page-not-found-container">
      <h1>Page Not Found</h1>
      <Link
        to="/"
        className="back-link"
      >
        <FaCircleArrowLeft />
        <span>Back to the home page</span>
      </Link>
    </div>
  )
}

export default PageNotFound
