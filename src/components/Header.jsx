import PropTypes from "prop-types"
// import { HiTemplate } from "react-icons/hi"
import Nav from "./Nav"

function Header({ title }) {
  return (
    <header className="page-header">
      <p className="h1">
        {/* <HiTemplate /> <span>{title}</span> */}
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
