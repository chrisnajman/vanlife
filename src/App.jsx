import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import Layout from "./layout/Layout"
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "./pages/Login"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans, { loader as vansLoader } from "./pages/vans/Vans"
import VanDetail, { loader as vanDetailLoader } from "./pages/vans/VanDetail"
import LayoutHost from "./layout/LayoutHost"
import Dashboard, { loader as dashboardLoader } from "./pages/host/Dashboard"
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
import { requireAuth } from "./utils/require-auth"
import "./server"

import PageTitle from "./components/PageTitle"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route
        index
        element={
          <>
            <PageTitle title="VanLife Home" />
            <Home />
          </>
        }
      />
      <Route
        path="login"
        element={
          <>
            <PageTitle title="Login" />
            <Login />
          </>
        }
        loader={loginLoader}
        action={loginAction}
      />
      <Route
        path="about"
        element={
          <>
            <PageTitle title="About VanLife" />
            <About />
          </>
        }
      />
      <Route
        path="vans"
        element={
          <>
            <PageTitle title="List of vans for hire" />
            <Vans />
          </>
        }
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route
        path="vans/:id"
        element={
          <>
            <PageTitle title="Van details" />
            <VanDetail />
          </>
        }
        loader={vanDetailLoader}
        errorElement={<Error />}
      />
      <Route
        path="host"
        element={
          <>
            <PageTitle title="Host dashboard" />
            <LayoutHost />
          </>
        }
      >
        {/* Begin protected routes */}
        <Route
          index
          element={<Dashboard />}
          errorElement={<Error />}
          loader={dashboardLoader}
        />
        <Route
          path="income"
          element={
            <>
              <PageTitle title="Host income" />
              <Income />
            </>
          }
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="host-vans"
          element={
            <>
              <PageTitle title="Host vans" />
              <HostVans />
            </>
          }
          loader={hostVansLoader}
          errorElement={<Error />}
        />
        <Route
          path="host-vans/:id"
          element={
            <>
              <PageTitle title="Host van details" />
              <HostVanDetail />
            </>
          }
          loader={hostVanDetailLoader}
          errorElement={<Error />}
        >
          <Route
            index
            element={
              <>
                <PageTitle title="Host vans details" />
                <HostVanInfo />
              </>
            }
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="pricing"
            element={
              <>
                <PageTitle title="Host van pricing" />
                <HostVanPricing />
              </>
            }
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="photos"
            element={
              <>
                <PageTitle title="Host van photos" />
                <HostVanPhotos />
              </>
            }
            loader={async ({ request }) => await requireAuth(request)}
          />
        </Route>
        <Route
          path="reviews"
          element={
            <>
              <PageTitle title="Host van reviews" />
              <Reviews />
            </>
          }
          loader={async ({ request }) => await requireAuth(request)}
        />
        {/* End protected routes */}
      </Route>
      <Route
        path="*"
        element={
          <>
            <PageTitle title="404 | Page not found" />
            <PageNotFound />
          </>
        }
      />
    </Route>
  ),
  { basename: "/vanlife/" }
)

function App() {
  return <RouterProvider router={router} />
}

export default App
