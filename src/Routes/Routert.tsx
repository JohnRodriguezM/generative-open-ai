import {
  createBrowserRouter,
} from "react-router-dom";

import { App } from "../App";
import { About } from "../components/About/About";

export const router = createBrowserRouter([
 /* {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },*/
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About/>,

  }
]);

// Configure nested routes with JSX, and use paramaters
/*createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="contact" element={<Contact />} />
      <Route
        path="dashboard"
        element={<Dashboard />}
        loader={({ request }) =>
          fetch("/api/dashboard.json", {
            signal: request.signal,
          })
        }
      />
      <Route element={<AuthLayout />}>
        <Route
          path="login"
          element={<Login />}
          loader={redirectIfUser}
        />
        <Route path="logout" />
      </Route>
    </Route>
  )
)*/