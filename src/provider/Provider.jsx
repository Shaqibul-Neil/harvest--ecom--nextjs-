import React from "react";
import AuthProvider from "./AuthProvider";
import { CartProvider } from "@/context/CartContext";

const Provider = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  );
};

export default Provider;
