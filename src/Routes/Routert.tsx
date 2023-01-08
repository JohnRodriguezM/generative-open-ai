import {
  createBrowserRouter,
} from "react-router-dom";

import { App } from "../App";
import { LexicaSearcher } from "../components/LexicaSearcher/LexicaSearcher";
import { useState } from 'react';



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
    path: "/search",
    element: <LexicaSearcher />,

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