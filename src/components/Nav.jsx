import { NavLink, Link } from "react-router-dom"
import { LOGGEDIN_KEY } from "../utils/localStorageKeys"

function fakeLogoutUser() {
  localStorage.removeItem(LOGGEDIN_KEY)
}

function Nav() {
  return (
    <nav className="site-navigation">
      <ul>
        <li>
          <NavLink
            to="."
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li>
          <NavLink to="vans">Vans</NavLink>
        </li>
        <li>
          <NavLink to="host">Host</NavLink>
        </li>
      </ul>
      <ul className="login-links">
        <li>
          <NavLink to="login">Login</NavLink>
        </li>
        <li>
          <Link
            to="login"
            onClick={fakeLogoutUser}
          >
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
