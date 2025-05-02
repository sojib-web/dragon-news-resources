// @ts-nocheck
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";
import { RouterProvider } from "react-router";
import { router } from "./Routes/Routes.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";

// @ts-ignore
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
