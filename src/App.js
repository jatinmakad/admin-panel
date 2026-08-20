import "./App.css";
import "./Style.css";
import { useMemo } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./Pages/Home";
import AccountSummary from "./Pages/MyAccount/AccountSummary";
import { getDecodedToken } from "./Utils/Constant";
import Login from "./Pages/Login";
import BetList from "./Pages/BetList";
import BetListLive from "./Pages/BetListLive";

const getAuthorizedRoutes = () => {
  const user = getDecodedToken()?.user;
  return routes.filter(
    (item) =>
      !item.permission?.length || item.permission.includes(user?.userType),
  );
};

function App() {
  const router = useMemo(() => {
    return createBrowserRouter(
      createRoutesFromElements(
        <>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            {getAuthorizedRoutes().map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>
        </>,
      ),
    );
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
const routes = [
  { path: "/", Component: Home, permission: [] },
  {
    path: "/account-summary/:id/:type",
    Component: AccountSummary,
    permission: [],
  },
  { path: "/account-summary", Component: AccountSummary, permission: [] },
  { path: "/betList", Component: BetList, permission: [] }, { path: "/betList-live", Component: BetListLive, permission: [] },
];
