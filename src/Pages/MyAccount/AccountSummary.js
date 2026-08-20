import React from "react";
import Layout from "../../Layout";

const AccountSummary = () => {
  return (
    <Layout>
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
          {/**/}
          <div _ngcontent-serverapp-c80 className="col-left">
            <div _ngcontent-serverapp-c80 className="sub_path">
              <ul _ngcontent-serverapp-c80 className="menu-list">
                <li _ngcontent-serverapp-c80 className="class">
                  Position
                </li>
                <li _ngcontent-serverapp-c80>
                  <a
                    _ngcontent-serverapp-c80
                    id="accountStatement"
                    routerlink="/my-account/account-statement"
                    routerlinkactive="select"
                    href="#/my-account/account-statement"
                  >
                    Account Statement
                  </a>
                </li>
                {/**/}
                <li _ngcontent-serverapp-c80>
                  <a
                    _ngcontent-serverapp-c80
                    id="accountSummary"
                    routerlink="/my-account/account-summary"
                    routerlinkactive="select"
                    href="#/my-account/account-summary"
                    className="select"
                  >
                    Account Summary
                  </a>
                </li>
                <li _ngcontent-serverapp-c80 className="class">
                  Account Details
                </li>
                <li _ngcontent-serverapp-c80>
                  <a
                    _ngcontent-serverapp-c80
                    id="profile"
                    routerlink="/my-account/profile"
                    routerlinkactive="select"
                    href="#/my-account/profile"
                  >
                    Profile
                  </a>
                </li>
                {/**/}
                <li _ngcontent-serverapp-c80>
                  <a
                    _ngcontent-serverapp-c80
                    id="activityLog"
                    routerlink="/my-account/login-history"
                    routerlinkactive="select"
                    href="#/my-account/login-history"
                  >
                    Activity Log
                  </a>
                </li>
                {/**/}
                {/**/}
                {/**/}
                {/**/}
              </ul>
            </div>
          </div>
          <div
            _ngcontent-serverapp-c80
            id="report"
            className="col-center report"
          >
            <router-outlet _ngcontent-serverapp-c80 />
            <app-account-summary _nghost-serverapp-c73>
              <h2 _ngcontent-serverapp-c73>Account Statement</h2>
              <div _ngcontent-serverapp-c73 className="white-wrap">
                <dl _ngcontent-serverapp-c73 className="head-balance">
                  <dt _ngcontent-serverapp-c73>Your Balances</dt>
                  <dd _ngcontent-serverapp-c73 id="yourBalance">
                    <span _ngcontent-serverapp-c73>
                      {" "}
                      USD {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                      {/**/}
                    </span>{" "}
                    0.00{" "}
                  </dd>
                </dl>
              </div>
            </app-account-summary>
            {/**/}
          </div>
        </div>
      </app-my-account>
    </Layout>
  );
};

export default AccountSummary;
