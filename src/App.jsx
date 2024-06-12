import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/vans/Vans"
import FourOfour from "./pages/FourOfour"
import VanDetail from "./pages/vans/VanDetail"
import LayoutHost from "./layout/LayoutHost"
import Dashboard from "./pages/host/Dashboard"
import Income from "./pages/host/Income"
import Reviews from "./pages/host/Reviews"
import HostVans from "./pages/host/HostVans"
import HostVanDetail from "./pages/host/HostVanDetail"
import HostVanInfo from "./pages/host/hostVanDetailSections/HostVanInfo"
import HostVanPricing from "./pages/host/hostVanDetailSections/HostVanPricing"
import HostVanPhotos from "./pages/host/hostVanDetailSections/HostVanPhotos"

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
            element={<VanDetail />}
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
              path="host-vans"
              element={<HostVans />}
            />
            <Route
              path="host-vans/:id"
              element={<HostVanDetail />}
            >
              <Route
                index
                element={<HostVanInfo />}
              />
              <Route
                path="pricing"
                element={<HostVanPricing />}
              />
              <Route
                path="photos"
                element={<HostVanPhotos />}
              />
            </Route>
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
