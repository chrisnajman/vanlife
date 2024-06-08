import { NavLink } from "react-router-dom"
import { UrlRoot } from "./UrlRoot"

function Nav() {
  return (
    <nav className="site-navigation">
      <ul>
        <li>
          {" "}
          <NavLink
            to={`${UrlRoot}`}
            aria-current="page"
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${UrlRoot}about`}
            aria-current="page"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${UrlRoot}vans`}
            aria-current="page"
            end
          >
            Vans
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav