import React from "react";
import { Link, useLocation } from "react-router-dom";

const MyAccountLayout = ({ children }) => {
  const location = useLocation();
  return (
  
      <app-my-account _nghost-serverapp-c80>
        <div _ngcontent-serverapp-c80 className="main_wrap">
          <div _ngcontent-serverapp-c80 className="agent_path">
            <ul
              _ngcontent-serverapp-c80
              id="agentPath"
              className="agent_path-L"
            >
              <li _ngcontent-serverapp-c80 className="last_li">
                <a _ngcontent-serverapp-c80 href="#/users/5">
                  <span
                    _ngcontent-serverapp-c80
                    className="Bdlevel lv_4 premium"
                  />
                  <strong _ngcontent-serverapp-c80>testbetx</strong>
                </a>
              </li>
              <ul
                _ngcontent-serverapp-c80
                id="accountPop"
                className="account_pop"
              >
                <li
                  _ngcontent-serverapp-c80
                  id="popTmp"
                  style={{ display: "none" }}
                >
                  <a _ngcontent-serverapp-c80 />
                </li>
              </ul>
            </ul>
          </div>
          <div _ngcontent-serverapp-c80 className="col-left">
            <div _ngcontent-serverapp-c80 className="sub_path">
              <ul _ngcontent-serverapp-c80 className="menu-list">
                <li _ngcontent-serverapp-c80 className="class">
                  Position
                </li>
                <li _ngcontent-serverapp-c80>
                  <Link
                    _ngcontent-serverapp-c80
                    id="accountStatement"
                    to="/my-account/account-statement"
                     className={
                      location?.pathname == "/my-account/account-statement"
                        ? "select"
                        : ""
                    }
                  >
                    Account Statement
                  </Link>
                </li>
                {/**/}
                <li _ngcontent-serverapp-c80>
                  <Link
                    _ngcontent-serverapp-c80
                    id="accountSummary"
                    to="/my-account/account-summary"
                    className={
                      location?.pathname == "/my-account/account-summary"
                        ? "select"
                        : ""
                    }
                  >
                    Account Summary
                  </Link>
                </li>
                <li _ngcontent-serverapp-c80 className="class">
                  Account Details
                </li>
                <li _ngcontent-serverapp-c80>
                  <Link
                    _ngcontent-serverapp-c80
                    id="profile"
                    to="/my-account/profile"
                    className={
                      location?.pathname == "/my-account/profile"
                        ? "select"
                        : ""
                    }
                  >
                    Profile
                  </Link>
                </li>
                {/**/}
                <li _ngcontent-serverapp-c80>
                  <Link
                    _ngcontent-serverapp-c80
                    id="activityLog"
                    to={"/my-account/login-history"}
                    className={
                      location?.pathname == "/my-account/login-history"
                        ? "select"
                        : ""
                    }
                  >
                    Activity Log
                  </Link>
                </li>
                {/**/}
                {/**/}
                {/**/}
                {/**/}
              </ul>
            </div>
          </div>
          {children}
        </div>
      </app-my-account>
   
  );
};

export default MyAccountLayout;
