import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UrlRoot } from "./components/UrlRoot"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetails from "./pages/VanDetails"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
