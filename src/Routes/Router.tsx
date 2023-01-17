import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { App } from "../App";
import { Footer } from "../Atoms/Footer/Footer";
import { Header } from "../Atoms/Header/Header";
import { EthContributions } from "../components/Contributions/Contributions";
import { LexicaSearcher } from "../components/LexicaSearcher/LexicaSearcher";
import { Instructions } from './../components/Instructions/Instructions';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <>
            <Header />
            <LexicaSearcher />
            <Footer/>
          </>
        }
      />
      <Route
        path="/create"
        element={
          <>
            <Header />
            <App />
            <Footer/>
          </>
        }
      />
      <Route
        path="/instructions"
        element={
          <>
            <Header />
            <Instructions />
            <Footer/>
          </>
        }
      />
      <Route
        path="/contributions"
        element={
          <>
            <Header />
            <EthContributions />
            <Footer/>
          </>
        }
      />
    </>
  )
);
