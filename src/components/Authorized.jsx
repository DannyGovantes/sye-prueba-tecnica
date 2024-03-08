/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

export function Authorized({ children, roles }) {
  if (!roles.includes(localStorage.getItem("role"))) {
    return <Navigate to={"/"} />;
  }
  return <>{children}</>;
}
