import React from "react";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../../Utils/Utils";

export default function IsAuth({ children }) {
  const [token] = useAppContext();

  return token ? { children } : <Navigate to={"/"} />;
}
