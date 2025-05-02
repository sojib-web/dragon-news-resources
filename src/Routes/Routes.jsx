// @ts-nocheck
import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/Home/HomeLayout";
import Home from "../pages/Home/Home";
import CategoryNews from "../pages/Home/Category/CategoryNews";
import SignUp from "../Components/SignUp/SignUp";
import Login from "../Components/Login/Login";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import NewsDetails from "../Components/News_details/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: CategoryNews,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },

      {
        path: "/auth/signup",
        Component: SignUp,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivateRoute>
        <NewsDetails />
      </PrivateRoute>
    ),
    loader: () => fetch("/news.json"),
  },
]);
