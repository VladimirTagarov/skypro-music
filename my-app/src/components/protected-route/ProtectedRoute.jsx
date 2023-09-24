import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({
  children,
  redirectPath = "/login",
  isAllowed,
}) => {
  if (!localStorage.getItem("user")) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return children;
};
