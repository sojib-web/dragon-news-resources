import { use } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import React from "react";
import Loading from "../pages/Home/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  // console.log(user, loading);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }
  if (user && user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/auth/login" />;
};

export default PrivateRoute;
