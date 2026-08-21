import "./App.css";
import "./Style.css";
import "./Style2.css";
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
import Banking from "./Pages/Banking/Banking";
import ActivityLogs from "./Pages/MyAccount/ActivityLogs";
import Profile from "./Pages/MyAccount/Profile";
import AccountStatement from "./Pages/MyAccount/AccountStatement";
import AllUser from "./Pages/AllUser";
import ReportByDownline from "./Pages/Report/ReportByDownline";
import { AuthProvider } from "./context/AuthContext";
import BlockMarket from "./Pages/BlockMarket";
import ReportByEvent from "./Pages/Report/ReportByEvent";
import ReportByParlayDownline from "./Pages/Report/ReportByParlayDownline";
import ReportByMarket from "./Pages/Report/ReportByMarket";
import ReportByPlayer from "./Pages/Report/ReportByPlayer";
import ReportByCasinoDownline from "./Pages/Report/ReportByCasinoDownline";
import ReaportByAllCasino from "./Pages/Report/ReaportByAllCasino";
import ReportByAWCcasino from "./Pages/Report/ReportByAWCcasino";
import Risk from "./Pages/RiskManagement/Risk";
import ParlayBetList from "./Pages/RiskManagement/ParlayBetList";
import CasinoBetList from "./Pages/CasinoBetList";
import BoCasinoBets from "./Pages/BoCasinoBets";
import Ticket from "./Pages/Ticket";

const getAuthorizedRoutes = () => {
  const user = getDecodedToken()?.user;
  return routes.filter(
    (item) =>
      !item.permission?.length || item.permission.includes(user?.userType),
  );
};

function App() {
  const router = createBrowserRouter(
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

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
const routes = [
  { path: "/", Component: Home, permission: [] },
  {
    path: "/my-account/account-summary/:id/:type",
    Component: AccountSummary,
    permission: [],
  },
  {
    path: "/my-account/account-summary",
    Component: AccountSummary,
    permission: [],
  },
  { path: "/alluser", Component: AllUser, permission: [] },
  { path: "/banking", Component: Banking, permission: [] },
  { path: "/betList", Component: BetList, permission: [] },
  { path: "/betList-live", Component: BetListLive, permission: [] },
  {
    path: "/my-account/login-history",
    Component: ActivityLogs,
    permission: [],
  },
  { path: "/my-account/profile", Component: Profile, permission: [] },
  {
    path: "/my-account/account-statement",
    Component: AccountStatement,
    permission: [],
  },
  {
    path: "/reports/pl-downline",
    Component: ReportByDownline,
    permission: [],
  },
  {
    path: "/reports/pl-market",
    Component: ReportByEvent,
    permission: [],
  },
  {
    path: "/reports/parlay-Downline",
    Component: ReportByParlayDownline,
    permission: [],
  },
  {
    path: "/reports/pnl-match",
    Component: ReportByMarket,
    permission: [],
  },
  {
    path: "/reports/pl-player",
    Component: ReportByPlayer,
    permission: [],
  },
  {
    path: "/reports/pnl-casino-downline",
    Component: ReportByCasinoDownline,
    permission: [],
  },
  {
    path: "/reports/pnl-downline",
    Component: ReaportByAllCasino,
    permission: [],
  },
  {
    path: "/reports/pl-awccasino",
    Component: ReportByAWCcasino,
    permission: [],
  },
  {
    path: "/reports/pl-bogcasino",
    Component: ReportByAWCcasino,
    permission: [],
  },
  {
    path: "/risk-management/riskManagement",
    Component: Risk,
    permission: [],
  },

  {
    path: "/parlaybetlist",
    Component: ParlayBetList,
    permission: [],
  },
  {
    path: "/awcCasino",
    Component: CasinoBetList,
    permission: [],
  },
  {
    path: "/bogCasino",
    Component: BoCasinoBets,
    permission: [],
  },
  {
    path: "/messages/ticker",
    Component: Ticket,
    permission: [],
  },

  {
    path: "/block-market",
    Component: BlockMarket,
    permission: [],
  },
];
