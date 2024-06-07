import PropTypes from "prop-types"
import { FaVanShuttle } from "react-icons/fa6"
import Nav from "./Nav"

function Header({ title }) {
  return (
    <header className="page-header">
      <h1>
        <FaVanShuttle /> <span>{title}</span>
      </h1>
      <Nav />
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
