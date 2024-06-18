import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans, { loader as vansLoader } from "./pages/vans/Vans"
import VanDetail, { loader as vanDetailLoader } from "./pages/vans/VanDetail"
import LayoutHost from "./layout/LayoutHost"
import Dashboard from "./pages/host/Dashboard"
import Income from "./pages/host/Income"
import Reviews from "./pages/host/Reviews"
import HostVans, { loader as hostVansLoader } from "./pages/host/HostVans"
import HostVanDetail, {
  loader as hostVanDetailLoader,
} from "./pages/host/HostVanDetail"
import HostVanInfo from "./pages/host/hostVanDetailSections/HostVanInfo"
import HostVanPricing from "./pages/host/hostVanDetailSections/HostVanPricing"
import HostVanPhotos from "./pages/host/hostVanDetailSections/HostVanPhotos"
import PageNotFound from "./pages/PageNotFound"
import Error from "./components/Error"

import "./server"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route
        index
        element={<Home />}
      />
      <Route
        path="about"
        element={<About />}
      />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route
        path="vans/:id"
        element={<VanDetail />}
        loader={vanDetailLoader}
        errorElement={<Error />}
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
          loader={hostVansLoader}
          errorElement={<Error />}
        />
        <Route
          path="host-vans/:id"
          element={<HostVanDetail />}
          loader={hostVanDetailLoader}
          errorElement={<Error />}
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
        element={<PageNotFound />}
      />
    </Route>
  ),
  { basename: "/vanlife/" }
)

function App() {
  return <RouterProvider router={router} />
}

export default App
