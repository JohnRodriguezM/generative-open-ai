import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { App } from "../App";
import { Header } from "../Atoms/Header/Header";
import { LexicaSearcher } from "../components/LexicaSearcher/LexicaSearcher";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <>
            <Header />
            <LexicaSearcher />
          </>
        }
      />
      <Route
        path="/create"
        element={
          <>
            <Header />
            <App />
          </>
        }
      />
    </>
  )
);
