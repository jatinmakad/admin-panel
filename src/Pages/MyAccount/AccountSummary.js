import React from "react";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import MyAccountLayout from "./MyAccountLayout";

const AccountSummary = () => {
  return (
    <MyAccountLayout>
     
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
        
    </MyAccountLayout>
  );
};

export default AccountSummary;
