import { Link } from "react-router-dom"
import { UrlRoot } from "./UrlRoot"

function Nav() {
  return (
    <nav>
      <Link
        to={`${UrlRoot}`}
        className="site-logo"
      >
        VANLIFE
      </Link>

      <Link to={`${UrlRoot}about`}>About</Link>

      <Link to={`${UrlRoot}vans`}>Vans</Link>
    </nav>
  )
}

export default Nav
