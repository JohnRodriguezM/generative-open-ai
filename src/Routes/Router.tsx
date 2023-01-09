import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";

import { App } from "../App";
import { Header } from "../components/Atoms/Header/Header";
import { LexicaSearcher } from "../components/LexicaSearcher/LexicaSearcher";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <>
            <Header />
            <App />
          </>
        }
      />
      <Route
        path="/search"
        element={
          <>
            <Header />
            <LexicaSearcher />
          </>
        }
      />
    </>
  )
);

/*export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "search",
        element: <LexicaSearcher />,
      },
    ],
  },
  {
    path: "/search",
    element: <LexicaSearcher />,
  },
]);*/

// Configure nested routes with JSX, and use paramaters
