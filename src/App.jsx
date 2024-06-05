import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UrlRoot } from "./components/UrlRoot"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import "./server"

function App() {
  return (
    <BrowserRouter>
      <header>
        <Nav />
      </header>
      <Routes>
        <Route
          path={`${UrlRoot}`}
          element={<Home />}
        />
        <Route
          path={`${UrlRoot}about`}
          element={<About />}
        />
        <Route
          path={`${UrlRoot}vans`}
          element={<Vans />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
