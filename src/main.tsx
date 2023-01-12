import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { App } from "./App";
import { DataProvider } from "./Context/DataContext";
import "./css/index.css";
import { router } from "./Routes/Router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <DataProvider>
    <RouterProvider router={router} />
    </DataProvider>
  </StrictMode>
);
