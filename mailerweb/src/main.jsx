import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { Provider } from "react-redux";
import React from "react";
import HomePage from "./pages/Home-page.tsx";
import {
  createBrowserRouter,
  Router,
  RouterProvider,
  // @ts-ignore
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
]);

// @ts-ignore
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);