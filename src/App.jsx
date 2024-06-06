import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UrlRoot } from "./components/UrlRoot"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetails from "./pages/VanDetails"
// import "./server"

function App() {
  return (
    <BrowserRouter>
      <div className="page-container">
        <Header title="Vanlife" />
        <main
          id="main-content"
          className="main-content"
        >
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
            <Route
              path={`${UrlRoot}vans/:id`}
              element={<VanDetails />}
            />
          </Routes>
        </main>
        <Footer gitRepo="vanlife" />
      </div>
    </BrowserRouter>
  )
}

export default App
