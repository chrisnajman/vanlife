import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UrlRoot } from "./components/UrlRoot"
import SkipLink from "./components/SkipLink"
import BtnTheme from "./components/BtnTheme"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetails from "./pages/VanDetails"

function App() {
  return (
    <BrowserRouter>
      <SkipLink />
      <BtnTheme />
      <div className="site-container">
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
