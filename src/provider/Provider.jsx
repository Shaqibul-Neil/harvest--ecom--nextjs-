import React from "react";
import AuthProvider from "./AuthProvider";

const Provider = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Provider;
