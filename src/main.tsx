import React, { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { DataProvider } from "./Context/DataContext";
import "./css/index.css";
import { router } from "./Routes/Router";

/*const root = createRoot(document.getElementById('root'))
*/
createRoot(document.getElementById("root") as Element).render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </StrictMode>
);
