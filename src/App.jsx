import {
  BrowserRouter,
  Routes,
  Route,
  // Navigate,
  // useLocation,
} from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/vans/Vans"
import VanDetails from "./pages/vans/VanDetails"
import LayoutHost from "./layout/LayoutHost"
import Dashboard from "./pages/host/Dashboard"
import Income from "./pages/host/Income"
import Reviews from "./pages/host/Reviews"

function App() {
  // function RedirectIfNoTrailingSlash() {
  //   const location = useLocation()
  //   if (location.pathname === "/vanlife") {
  //     return (
  //       <Navigate
  //         to="/vanlife/"
  //         replace
  //       />
  //     )
  //   }
  //   return null
  // }
  return (
    <BrowserRouter basename="/vanlife">
      {/* <RedirectIfNoTrailingSlash /> */}
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
        </Route>
        <Route
          path="*"
          element={<div>404 Not Found</div>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
