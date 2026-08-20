import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useContext } from "react";
import { isEmpty } from "lodash";
import Header from "../components/Header";
import { getDecodedToken } from "../Utils/Constant";
const PrivateRoute = () => {
  const token = localStorage.getItem("token");
  const user = token ? getDecodedToken()?.user : null;

  // return !isEmpty(user) ? <Outlet /> : <Navigate to="/login" replace />;
  return <Outlet/>
};

export default PrivateRoute;
