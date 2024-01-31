import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import { JeuxProvider } from "./context/contextJeux";
import CreateJeux from "./components/CreateJeux/CreateJeux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/jeux/create",
    element: <CreateJeux />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <JeuxProvider>
      <RouterProvider router={router} />
    </JeuxProvider>
  </React.StrictMode>
);
