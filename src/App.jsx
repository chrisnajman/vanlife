import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/vans/Vans"
import FourOfour from "./pages/FourOfour"
import VanDetails from "./pages/vans/VanDetails"
import LayoutHost from "./layout/LayoutHost"
import Dashboard from "./pages/host/Dashboard"
import Income from "./pages/host/Income"
import Reviews from "./pages/host/Reviews"

function App() {
  return (
    <BrowserRouter basename="/vanlife">
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="about"
            element={<About />}
          />
          <Route
            path="vans"
            element={<Vans />}
          />
          <Route
            path="vans/:id"
            element={<VanDetails />}
          />
          <Route
            path="host"
            element={<LayoutHost />}
          >
            <Route
              index
              element={<Dashboard />}
            />
            <Route
              path="income"
              element={<Income />}
            />
            <Route
              path="reviews"
              element={<Reviews />}
            />
          </Route>
          <Route
            path="*"
            element={<FourOfour />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
