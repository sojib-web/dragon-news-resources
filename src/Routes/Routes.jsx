import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/Home/HomeLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
  },
  {
    path: "/auth",
    element: <h2>Authentication layout</h2>,
  },
  {
    path: "/news",
    element: <h2>News layout</h2>,
  },
  {
    path: "",
    element: <h2>Error layout</h2>,
  },
]);
