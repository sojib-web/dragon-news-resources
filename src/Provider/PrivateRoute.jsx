import { use } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import React from "react";
import Loading from "../pages/Home/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  console.log(user, loading);

  if (loading) {
    return <Loading></Loading>;
  }
  if (user && user?.email) {
    return children;
  }

  return <Navigate to="/auth/login" />;
};

export default PrivateRoute;
