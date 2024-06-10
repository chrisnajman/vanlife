import { NavLink, Outlet } from "react-router-dom"

function LayoutHost() {
  return (
    <>
      <nav className="site-navigation">
        <ul>
          <li>
            <NavLink
              to="host"
              aria-current="page"
              end
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="host/income"
              aria-current="page"
              end
            >
              Income
            </NavLink>
          </li>
          <li>
            <NavLink
              to="host/reviews"
              aria-current="page"
              end
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </nav>
      {<Outlet />}
    </>
  )
}

export default LayoutHost
