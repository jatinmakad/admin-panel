import { Navigate, Outlet, useLocation } from "react-router-dom";
import { isEmpty } from "lodash";
import { getDecodedToken } from "../Utils/Constant";
import Layout from "../Pages/Layout";

const PrivateRoute = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  const user = token ? getDecodedToken()?.user : null;
  // if (isEmpty(user)) {
  //   return <Navigate to="/login" replace state={{ from: location }} />;
  // }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default PrivateRoute;