import { useState, useEffect } from "react";
import { isEmpty, pick } from "lodash";
import { useLocation } from "react-router-dom";
import { apiPost, apiGet } from "../Utils/apiFetch";
import apiPath from "../Utils/apiPath";
import { createContext } from "use-context-selector";
import moment from "moment";
import { getDecodedToken } from "../Utils/Constant";
import { toast } from "react-toastify";
const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  // const navigate = useNavigate();
  const [isRefereshLoader, setRefereshLoader] = useState(false);
  const [bellSound, setBellSound] = useState(false);
  const [count, setCount] = useState({});
  const [agentId, setAgentId] = useState("");
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");
    return token ? (getDecodedToken()?.user ?? {}) : {};
  });
  const [user_coins, setUserCoins] = useState({
    exposure: 0.0,
    totalCoins: 0.0,
  });
  const getCoins = async () => {
    setRefereshLoader(true);
    const { status, data } = await apiGet(apiPath.refreshAmount);
    if (status === 200) {
      if (data.success) {
        setUserCoins(data.results.totalCoins);
        setRefereshLoader(false);
      } else {
        toast.error(data.message);
        setRefereshLoader(false);
      }
    } else {
      toast.error("API Error");
      setRefereshLoader(false);
    }
  };
  const getCount = async () => {
    const { data } = await apiGet(apiPath.notificationCount);
    if (data?.success) {
      setCount((prev) => {
        if (prev?.depositRequests < data?.results?.depositRequests) {
          setBellSound(true);
        }
        if (prev?.withdrawalRequests < data?.results?.withdrawalRequests) {
          setBellSound(true);
        }
        return data?.results;
      });
      setAgentId(data?.results?.default_agentID);
    }
  };
  useEffect(() => {
    if (isEmpty(user)) return;

    getCount();
    const intervalCall = setInterval(getCount, 15000);

    return () => clearInterval(intervalCall);
  }, [user]);

  useEffect(() => {
    if (!isEmpty(user)) {
      if (user?.userType == "owner" || user?.userType == "sub_owner") {
        getCount();
      }
    }
  }, [user]);
  useEffect(() => {
    if (!isEmpty(user)) {
      getCoins();
    }
  }, [user]);
  let logoutUser = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");
    // navigate("/login");
  };

  let contextData = {
    user,
    setUser,
    user_coins,
    setUserCoins,
    logoutUser,
    getCoins,
    isRefereshLoader,
    setRefereshLoader,
    count,
    setCount,
    agentId,
    setAgentId,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
