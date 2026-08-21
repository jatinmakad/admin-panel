import React from "react";
import MyAccountLayout from "./MyAccountLayout";
import MyAccountFilter from "./MyAccountFilter";

const AccountStatement = () => {
  return (
    <MyAccountLayout>
      <div _ngcontent-serverapp-c80 id="report" className="col-center report">
        <router-outlet _ngcontent-serverapp-c80 />
        <app-account-statement
          _nghost-serverapp-c76
          className="ng-star-inserted"
        >
          <div _ngcontent-serverapp-c76 className="total_all box">
            <h2 _ngcontent-serverapp-c76>Account Statement</h2>
            <div _ngcontent-serverapp-c79 className="push">
        <MyAccountFilter/>
          </div>
          </div>
          <div _ngcontent-serverapp-c76 className="table-responsive data-table">
            <table _ngcontent-serverapp-c76 id="table_log" className="table01">
              <tbody _ngcontent-serverapp-c76>
                <tr _ngcontent-serverapp-c76>
                  <th
                    _ngcontent-serverapp-c76
                    width="12%"
                    data-order="asc"
                    data-name="dateTime"
                    className="align-L sort_asc"
                  >
                    Date/Time{" "}
                  </th>
                  <th
                    _ngcontent-serverapp-c76
                    width="13%"
                    data-order="asc"
                    data-name="amount"
                    className="sort_asc"
                  >
                    Deposit by Upline
                  </th>
                  <th
                    _ngcontent-serverapp-c76
                    width="13%"
                    data-order="asc"
                    data-name="amount"
                    className="sort_asc"
                  >
                    Deposit to Downline{" "}
                  </th>
                  <th
                    _ngcontent-serverapp-c76
                    width="13%"
                    data-order="asc"
                    data-name="amount"
                    className="sort_asc"
                  >
                    Withdraw by Upline{" "}
                  </th>
                  <th
                    _ngcontent-serverapp-c76
                    width="13%"
                    data-order="asc"
                    data-name="amount"
                    className="sort_asc"
                  >
                    Withdraw from Downline{" "}
                  </th>
                  <th
                    _ngcontent-serverapp-c76
                    width="13%"
                    data-order="asc"
                    data-name="balance"
                    className="sort_asc"
                  >
                    Balance
                  </th>
                  <th
                    _ngcontent-serverapp-c76
                    width="13%"
                    data-order="asc"
                    data-name="description"
                    className="sort_asc"
                  >
                    Remark
                  </th>
                  <th
                    _ngcontent-serverapp-c76
                    width
                    data-order="asc"
                    data-name="from"
                    className="sort_asc"
                  >
                    From/To
                  </th>
                  {/**/}
                </tr>
              </tbody>
              <tbody _ngcontent-serverapp-c76 id="content">
                {/**/}
                <tr _ngcontent-serverapp-c76 className="total">
                  <td _ngcontent-serverapp-c76 className="align-L">
                    Total
                  </td>
                  <td _ngcontent-serverapp-c76 id="_totalDepositbyUpline">
                    <span _ngcontent-serverapp-c76 className="ng-star-inserted">
                      {" "}
                      0.00{" "}
                    </span>
                    {/**/}
                    {/**/}
                  </td>
                  <td _ngcontent-serverapp-c76 id="_totalDepositbyDownline">
                    <span _ngcontent-serverapp-c76 className="ng-star-inserted">
                      {" "}
                      0.00{" "}
                    </span>
                    {/**/}
                    {/**/}
                  </td>
                  <td _ngcontent-serverapp-c76 id="_totalWithdrawUpline">
                    <span _ngcontent-serverapp-c76 className="ng-star-inserted">
                      {" "}
                      0.00{" "}
                    </span>
                    {/**/}
                    {/**/}
                  </td>
                  <td _ngcontent-serverapp-c76 id="_totalWithdrawDownline">
                    <span _ngcontent-serverapp-c76 className="ng-star-inserted">
                      {" "}
                      0.00{" "}
                    </span>
                    {/**/}
                    {/**/}
                  </td>
                  <td _ngcontent-serverapp-c76 />
                  <td _ngcontent-serverapp-c76 />
                  <td _ngcontent-serverapp-c76 />
                  {/**/}
                </tr>
              </tbody>
            </table>
            <div _ngcontent-serverapp-c76>{/**/}</div>
          </div>
        </app-account-statement>
        {/**/}
      </div>
    </MyAccountLayout>
  );
};

export default AccountStatement;
