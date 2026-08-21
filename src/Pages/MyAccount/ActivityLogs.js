import React from "react";
import MyAccountLayout from "./MyAccountLayout";
import MyAccountFilter from "./MyAccountFilter";

const ActivityLogs = () => {
  return (
    <MyAccountLayout>
        <div className="col-center report">
      <app-login-history _nghost-serverapp-c79 className="ng-star-inserted">
        <div
          _ngcontent-serverapp-c79
          className="box"
          style={{
            "-webkit-align-items": "baseline",
            "-webkit-box-align": "baseline",
            "-ms-flex-align": "baseline",
            "align-items": "baseline",
          }}
        >
          <h2 _ngcontent-serverapp-c79>Activity Log</h2>
           <MyAccountFilter/>
        </div>
        <div _ngcontent-serverapp-c79 className="table-responsive data-table">
          <table _ngcontent-serverapp-c79 id="table01" className="table01">
            <tbody _ngcontent-serverapp-c79>
              <tr _ngcontent-serverapp-c79>
                <th
                  _ngcontent-serverapp-c79
                  width="15%"
                  data-order="asc"
                  data-name="loginTime"
                  className="align-L sort_asc"
                >
                  {" "}
                  Login Date &amp; Time
                </th>
                <th
                  _ngcontent-serverapp-c79
                  width="15%"
                  data-order="asc"
                  data-name="loginStatus"
                  className="align-L sort_asc"
                >
                  {" "}
                  Login Status
                </th>
                <th
                  _ngcontent-serverapp-c79
                  width="12%"
                  data-order="asc"
                  data-name="loginIp"
                  className="sort_asc"
                >
                  IP Address{" "}
                </th>
                <th
                  _ngcontent-serverapp-c79
                  width="15%"
                  data-order="asc"
                  data-name="ISP"
                  className="sort_asc"
                >
                  ISP
                </th>
                <th
                  _ngcontent-serverapp-c79
                  width
                  data-order="asc"
                  data-name="origin"
                  className="sort_asc"
                >
                  {" "}
                  City/State/Country
                </th>
                <th _ngcontent-serverapp-c79 width data-name="origin">
                  {" "}
                  Action
                </th>
              </tr>
            </tbody>
            <tbody _ngcontent-serverapp-c79 id="content">
              <tr
                _ngcontent-serverapp-c79
                id="tempTr"
                className="ng-star-inserted"
              >
                {/**/}
                <td
                  _ngcontent-serverapp-c79
                  id="loginDate"
                  className="align-L ng-star-inserted"
                >
                  {" "}
                  2026-08-20 22:29:49{" "}
                </td>
                {/**/}
                {/**/}
                <td
                  _ngcontent-serverapp-c79
                  id="loginMessage"
                  className="align-L success ng-star-inserted"
                >
                  {" "}
                  Login Success{" "}
                </td>
                {/**/}
                {/**/}
                {/**/}
                <td _ngcontent-serverapp-c79 id="ipAddress">
                  187.40.240.98
                </td>
                <td _ngcontent-serverapp-c79 id="isp">
                  *****{/**/}
                  {/**/}
                </td>
                <td _ngcontent-serverapp-c79 id="location">
                  *****{/**/}
                  {/**/}
                </td>
                <td _ngcontent-serverapp-c79 id="action">
                  <button _ngcontent-serverapp-c79 className="btn">
                    View
                  </button>
                </td>
              </tr>
              <tr
                _ngcontent-serverapp-c79
                id="tempTr"
                className="ng-star-inserted"
              >
                {/**/}
                <td
                  _ngcontent-serverapp-c79
                  id="loginDate"
                  className="align-L ng-star-inserted"
                >
                  {" "}
                  2026-08-20 22:29:13{" "}
                </td>
                {/**/}
                {/**/}
                {/**/}
                <td
                  _ngcontent-serverapp-c79
                  id="loginMessage"
                  className="align-L danger ng-star-inserted"
                >
                  {" "}
                  Login Failed{" "}
                </td>
                {/**/}
                {/**/}
                <td _ngcontent-serverapp-c79 id="ipAddress">
                  187.14.255.19
                </td>
                <td _ngcontent-serverapp-c79 id="isp">
                  *****{/**/}
                  {/**/}
                </td>
                <td _ngcontent-serverapp-c79 id="location">
                  *****{/**/}
                  {/**/}
                </td>
                <td _ngcontent-serverapp-c79 id="action">
                  <button _ngcontent-serverapp-c79 className="btn">
                    View
                  </button>
                </td>
              </tr>
              <tr
                _ngcontent-serverapp-c79
                id="tempTr"
                className="ng-star-inserted"
              >
                {/**/}
                <td
                  _ngcontent-serverapp-c79
                  id="loginDate"
                  className="align-L ng-star-inserted"
                >
                  {" "}
                  2026-08-20 21:51:09{" "}
                </td>
                {/**/}
                {/**/}
                <td
                  _ngcontent-serverapp-c79
                  id="loginMessage"
                  className="align-L success ng-star-inserted"
                >
                  {" "}
                  Login Success{" "}
                </td>
                {/**/}
                {/**/}
                {/**/}
                <td _ngcontent-serverapp-c79 id="ipAddress">
                  173.239.236.190
                </td>
                <td _ngcontent-serverapp-c79 id="isp">
                  *****{/**/}
                  {/**/}
                </td>
                <td _ngcontent-serverapp-c79 id="location">
                  *****{/**/}
                  {/**/}
                </td>
                <td _ngcontent-serverapp-c79 id="action">
                  <button _ngcontent-serverapp-c79 className="btn">
                    View
                  </button>
                </td>
              </tr>
              <tr
                _ngcontent-serverapp-c79
                id="tempTr"
                className="ng-star-inserted"
              >
                {/**/}
                <td
                  _ngcontent-serverapp-c79
                  id="loginDate"
                  className="align-L ng-star-inserted"
                >
                  {" "}
                  2026-08-20 16:28:27{" "}
                </td>
                {/**/}
                {/**/}
                <td
                  _ngcontent-serverapp-c79
                  id="loginMessage"
                  className="align-L success ng-star-inserted"
                >
                  {" "}
                  Login Success{" "}
                </td>
                {/**/}
                {/**/}
                {/**/}
                <td _ngcontent-serverapp-c79 id="ipAddress">
                  173.239.236.182
                </td>
                <td _ngcontent-serverapp-c79 id="isp">
                  *****{/**/}
                  {/**/}
                </td>
                <td _ngcontent-serverapp-c79 id="location">
                  *****{/**/}
                  {/**/}
                </td>
                <td _ngcontent-serverapp-c79 id="action">
                  <button _ngcontent-serverapp-c79 className="btn">
                    View
                  </button>
                </td>
              </tr>
              <tr
                _ngcontent-serverapp-c79
                id="tempTr"
                className="ng-star-inserted"
              >
                {/**/}
                <td
                  _ngcontent-serverapp-c79
                  id="loginDate"
                  className="align-L ng-star-inserted"
                >
                  {" "}
                  2026-08-20 15:58:34{" "}
                </td>
                {/**/}
                {/**/}
                {/**/}
                <td
                  _ngcontent-serverapp-c79
                  id="loginMessage"
                  className="align-L danger ng-star-inserted"
                >
                  {" "}
                  Login Failed{" "}
                </td>
                {/**/}
                {/**/}
                <td _ngcontent-serverapp-c79 id="ipAddress">
                  173.239.236.5
                </td>
                <td _ngcontent-serverapp-c79 id="isp">
                  *****{/**/}
                  {/**/}
                </td>
                <td _ngcontent-serverapp-c79 id="location">
                  *****{/**/}
                  {/**/}
                </td>
                <td _ngcontent-serverapp-c79 id="action">
                  <button _ngcontent-serverapp-c79 className="btn">
                    View
                  </button>
                </td>
              </tr>
              <tr
                _ngcontent-serverapp-c79
                id="tempTr"
                className="ng-star-inserted"
              >
                {/**/}
                <td
                  _ngcontent-serverapp-c79
                  id="loginDate"
                  className="align-L ng-star-inserted"
                >
                  {" "}
                  2026-08-20 13:57:02{" "}
                </td>
                {/**/}
                {/**/}
                <td
                  _ngcontent-serverapp-c79
                  id="loginMessage"
                  className="align-L success ng-star-inserted"
                >
                  {" "}
                  Login Success{" "}
                </td>
                {/**/}
                {/**/}
                {/**/}
                <td _ngcontent-serverapp-c79 id="ipAddress">
                  173.239.236.5
                </td>
                <td _ngcontent-serverapp-c79 id="isp">
                  *****{/**/}
                  {/**/}
                </td>
                <td _ngcontent-serverapp-c79 id="location">
                  *****{/**/}
                  {/**/}
                </td>
                <td _ngcontent-serverapp-c79 id="action">
                  <button _ngcontent-serverapp-c79 className="btn">
                    View
                  </button>
                </td>
              </tr>
              <tr
                _ngcontent-serverapp-c79
                id="tempTr"
                className="ng-star-inserted"
              >
                {/**/}
                <td
                  _ngcontent-serverapp-c79
                  id="loginDate"
                  className="align-L ng-star-inserted"
                >
                  {" "}
                  2026-08-20 13:40:14{" "}
                </td>
                {/**/}
                {/**/}
                <td
                  _ngcontent-serverapp-c79
                  id="loginMessage"
                  className="align-L success ng-star-inserted"
                >
                  {" "}
                  Login Success{" "}
                </td>
                {/**/}
                {/**/}
                {/**/}
                <td _ngcontent-serverapp-c79 id="ipAddress">
                  187.14.255.19
                </td>
                <td _ngcontent-serverapp-c79 id="isp">
                  *****{/**/}
                  {/**/}
                </td>
                <td _ngcontent-serverapp-c79 id="location">
                  *****{/**/}
                  {/**/}
                </td>
                <td _ngcontent-serverapp-c79 id="action">
                  <button _ngcontent-serverapp-c79 className="btn">
                    View
                  </button>
                </td>
              </tr>
              {/**/}
            </tbody>
          </table>
          {/**/}
        </div>
      </app-login-history></div>
    </MyAccountLayout>
  );
};

export default ActivityLogs;
