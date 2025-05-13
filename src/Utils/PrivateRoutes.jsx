import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserAuthContext } from "../context/UserAuthContext";

const PrivateRoutes = () => {
  const { user } = useContext(UserAuthContext);

  return user ? <Outlet /> : <Navigate to="/register" />;
};

export default PrivateRoutes;
