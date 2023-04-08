import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Compound/Home/Home";
import Order from "./Compound/Order/Order";
import About from "./Compound/About/About";
import Contact from "./Compound/Contact/Contact";
import Menu from "./Compound/Layout/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu></Menu>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("products.json"),
      },
      {
        path: "/order",
        element: <Order></Order>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
