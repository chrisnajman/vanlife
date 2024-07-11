import { Link } from "react-router-dom"
import { FaCircleArrowLeft } from "react-icons/fa6"
import { useRouteError } from "react-router-dom"
export default function Error() {
  const error = useRouteError()

  return (
    <div className="content-container page-not-found-container">
      <h1>Error: {error.message}</h1>
      <Link
        to="/"
        className="back-link arrow"
      >
        <FaCircleArrowLeft />
        <span>Back to the home page</span>
      </Link>
    </div>
  )
}
