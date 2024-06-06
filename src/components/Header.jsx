import PropTypes from "prop-types"
import Nav from "./Nav"

function Header({ title }) {
  return (
    <header className="page-header">
      <p className="h1">
        <span>{title}</span>
      </p>
      <Nav />
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
