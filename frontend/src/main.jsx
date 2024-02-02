import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import { JeuxProvider } from "./context/contextJeux";
import CreateJeux from "./components/CreateJeux/CreateJeux";
import UpdateJeux from "./components/UpdateJeux/UpdateJeux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/jeux/create",
    element: <CreateJeux />,
  },
  {
    path: "/jeux/update/:id",
    element: <UpdateJeux />,
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
