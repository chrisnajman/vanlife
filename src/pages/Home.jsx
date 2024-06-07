import { UrlRoot } from "../components/UrlRoot"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="home-container  content-container">
      <h1>
        You{"'"}ve got the travel plans, we{"'"}ve got the travel vans.
      </h1>
      <p>
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <Link
        to={`${UrlRoot}vans`}
        className="link-button"
      >
        Find your van
      </Link>
    </div>
  )
}

export default Home