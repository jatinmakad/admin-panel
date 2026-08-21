import React from "react";

const Banking = () => {
  return (

      <div _ngcontent-serverapp-c45 className="content-wrapper">
        <router-outlet _ngcontent-serverapp-c45 />
        <app-banking _nghost-serverapp-c87>
          <div _ngcontent-serverapp-c87 className="full-wrap">
            <h2 _ngcontent-serverapp-c87>Banking</h2>
            {/**/}
            <div _ngcontent-serverapp-c87 className="total_all">
              {/**/}
              {/**/}
              <div
                _ngcontent-serverapp-c87
                className="input-list premiun-inputlist"
                style={{ margin: "8px 0" }}
              >
                <div
                  _ngcontent-serverapp-c87
                  id="userSearchUl"
                  className="search-wrap"
                >
                  <input
                    _ngcontent-serverapp-c87
                    appinputrestriction="noSpecialChars"
                    type="text"
                    name="searchUserId"
                    id="searchUserId"
                    className="search-input ng-untouched ng-pristine ng-valid"
                    placeholder="Enter userId..."
                  />
                  <button
                    _ngcontent-serverapp-c87
                    id="searchUserId"
                    className="search-but"
                  >
                    {" "}
                    Search{" "}
                  </button>
                </div>
                <ul
                  _ngcontent-serverapp-c87
                  id="accountStatusUl"
                  className="input-list"
                >
                  <li _ngcontent-serverapp-c87>
                    <strong _ngcontent-serverapp-c87>Status</strong>
                  </li>
                  <li _ngcontent-serverapp-c87>
                    <select
                      _ngcontent-serverapp-c87
                      name="accountStatus"
                      id="accountStatus"
                      className="ng-untouched ng-pristine ng-valid"
                    >
                      <option _ngcontent-serverapp-c87 value="ALL">
                        All{" "}
                      </option>
                      <option _ngcontent-serverapp-c87 value="ACTIVE">
                        Active{" "}
                      </option>
                      <option _ngcontent-serverapp-c87 value="LOCKED">
                        Locked{" "}
                      </option>
                      <option _ngcontent-serverapp-c87 value="SUSPEND">
                        Suspended{" "}
                      </option>
                      {/**/}
                    </select>
                  </li>
                </ul>
                <div _ngcontent-serverapp-c87 className="flex-1" />
              </div>
              <div _ngcontent-serverapp-c87 className="total_alll">
                <button
                  _ngcontent-serverapp-c87
                  id="refresh"
                  className="btn_replay btn"
                >
                  <img
                    _ngcontent-serverapp-c87
                    src="assets/images/transparent.gif"
                  />
                </button>
              </div>
            </div>
            {/**/}
            <div _ngcontent-serverapp-c87 className="function-wrap clearfix">
              <dl _ngcontent-serverapp-c87 className="banking-head float-L">
                <dt _ngcontent-serverapp-c87>Your Balance </dt>
                <dd _ngcontent-serverapp-c87 id="yourBalance">
                  <span _ngcontent-serverapp-c87>
                    {" "}
                    USD {/**/}
                    {/**/}
                    {/**/}
                    {/**/}
                    {/**/}
                  </span>{" "}
                  0.00
                </dd>
              </dl>
              <ul
                _ngcontent-serverapp-c87
                className="input-list float-R"
                style={{ display: "none" }}
              >
                <li _ngcontent-serverapp-c87>
                  <label _ngcontent-serverapp-c87>Sort by </label>
                </li>
                <li _ngcontent-serverapp-c87>
                  <select _ngcontent-serverapp-c87 id="sort">
                    <option _ngcontent-serverapp-c87 value="userId">
                      UID{" "}
                    </option>
                    <option _ngcontent-serverapp-c87 value="site">
                      Site{" "}
                    </option>
                    <option _ngcontent-serverapp-c87 value="currencyType">
                      Currency{" "}
                    </option>
                  </select>
                </li>
              </ul>
            </div>
            {/**/}
            {/**/}
            <div
              _ngcontent-serverapp-c87
              id="totalBox"
              className="total_box filtertotaldivmob"
            >
              <dl
                _ngcontent-serverapp-c87
                id="creditLimitDL"
                className="total_dl_mob"
              >
                <dt _ngcontent-serverapp-c87>Credit Reference</dt>
                <dd
                  _ngcontent-serverapp-c87
                  id="myCreditLimit"
                  className="push"
                >
                  <strong _ngcontent-serverapp-c87> 0.00</strong> (USD) {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                </dd>
              </dl>
              {/**/}
              {/**/}
              {/**/}
              {/**/}
              {/**/}
              {/**/}
              {/**/}
              {/**/}
              {/**/}
              {/**/}
              {/**/}
              <div _ngcontent-serverapp-c87 className="text-center">
                <span _ngcontent-serverapp-c87 id="user">
                  <i _ngcontent-serverapp-c87 className="fa fa-chevron-down" />
                </span>
              </div>
            </div>
            {/**/}
            {/**/}
            {/**/}
            <div _ngcontent-serverapp-c87>
              <form
                _ngcontent-serverapp-c87
                noValidate
                className="ng-untouched ng-pristine ng-invalid"
              >
                <div
                  _ngcontent-serverapp-c87
                  className="over-wrap"
                  style={{ "max-height": "calc(100% - 108px)" }}
                >
                  <ul _ngcontent-serverapp-c87 className="report-tab-wrap box">
                    <li
                      _ngcontent-serverapp-c87
                      id="reportType_sportsBook"
                      className="report-tab select"
                    >
                      {" "}
                      Credit Reference{" "}
                    </li>
                    {/**/}
                  </ul>
                  {/**/}
                  <div
                    _ngcontent-serverapp-c87
                    className="table-responsive data-table"
                  >
                    <table
                      _ngcontent-serverapp-c87
                      id="table_transfer"
                      className="table01 tab-transfer tab-banking"
                    >
                      <tbody _ngcontent-serverapp-c87>
                        <tr _ngcontent-serverapp-c87>
                          <th
                            _ngcontent-serverapp-c87
                            id="userIdTH"
                            width="15%"
                            data-name="userName"
                            className="align-L"
                          >
                            UID
                          </th>
                          <th
                            _ngcontent-serverapp-c87
                            id="siteTH"
                            width="5%"
                            style={{ display: "none" }}
                          >
                            Site
                          </th>
                          <th
                            _ngcontent-serverapp-c87
                            id="currencyTypeTH"
                            width="5%"
                            style={{ display: "none" }}
                          >
                            {" "}
                            Currency{" "}
                          </th>
                          <th
                            _ngcontent-serverapp-c87
                            width="11%"
                            data-name="availableBalance"
                          >
                            Available Balance
                          </th>
                          <th
                            _ngcontent-serverapp-c87
                            width="11%"
                            data-name="downlineBalance"
                          >
                            {" "}
                            Balance in Downline{" "}
                          </th>
                          {/**/}
                          <th
                            _ngcontent-serverapp-c87
                            width="11%"
                            data-name="exposure"
                          >
                            {" "}
                            Exposure in Downline {/**/}
                            {/**/}
                          </th>
                          <th
                            _ngcontent-serverapp-c87
                            width="20%"
                            className="align-C border-l"
                          >
                            Deposit / Withdraw
                          </th>
                          <th
                            _ngcontent-serverapp-c87
                            width="11%"
                            className="border-l"
                          >
                            Credit Reference
                          </th>
                          <th
                            _ngcontent-serverapp-c87
                            width="10%"
                            data-name="refPL"
                          >
                            Reference P/L
                          </th>
                          {/**/}
                          <th
                            _ngcontent-serverapp-c87
                            width={10}
                            className="border-l"
                          >
                            Remark
                          </th>
                          <th
                            _ngcontent-serverapp-c87
                            width={47}
                            className="full-amount"
                          >
                            <a
                              _ngcontent-serverapp-c87
                              id="allLog"
                              routerlink="/banking/bankinglog"
                              className="btn-send"
                              href="#/banking/bankinglog"
                            >
                              All
                            </a>
                          </th>
                        </tr>
                      </tbody>
                      <tbody _ngcontent-serverapp-c87 id="content">
                        {/**/}
                        <tr
                          _ngcontent-serverapp-c87
                          id="totalTempTr"
                          className="total"
                        >
                          <td _ngcontent-serverapp-c87 className="align-L">
                            Total
                          </td>
                          <td
                            _ngcontent-serverapp-c87
                            id="totalAvailableBalance"
                          >
                            {" "}
                            0.00{" "}
                          </td>
                          <td
                            _ngcontent-serverapp-c87
                            id="totalBalanceDownline"
                          >
                            {" "}
                            0.00{" "}
                          </td>
                          {/**/}
                          <td _ngcontent-serverapp-c87 id="totalExposure">
                            <span _ngcontent-serverapp-c87 className="red">
                              (0.00)
                            </span>
                          </td>
                          <td
                            _ngcontent-serverapp-c87
                            id="totalCreditReference"
                            colSpan={2}
                          >
                            {" "}
                            0.00{" "}
                          </td>
                          <td _ngcontent-serverapp-c87 id="totalReferencePL">
                            {/**/}
                            <span _ngcontent-serverapp-c87>0.00 </span>
                            {/**/}
                          </td>
                          <td _ngcontent-serverapp-c87 />
                          <td _ngcontent-serverapp-c87 />
                        </tr>
                        {/**/}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  _ngcontent-serverapp-c87
                  id="settlementBar"
                  className="submit-wrap"
                >
                  <ul _ngcontent-serverapp-c87>
                    <li _ngcontent-serverapp-c87>
                      <a
                        _ngcontent-serverapp-c87
                        id="clearAllBtn"
                        className="btn"
                      >
                        Clear All
                      </a>
                    </li>
                    <li _ngcontent-serverapp-c87 className="submit-payment">
                      <input
                        _ngcontent-serverapp-c87
                        formcontrolname="password"
                        id="paymentPassword"
                        type="password"
                        autoComplete="new-password"
                        placeholder="Password"
                        className="ng-untouched ng-pristine ng-invalid"
                      />
                      <button
                        _ngcontent-serverapp-c87
                        id="submit"
                        className="btn-send"
                      >
                        {" "}
                        Submit{" "}
                        <span _ngcontent-serverapp-c87 id="submitCount">
                          0{" "}
                        </span>{" "}
                        Payment{" "}
                      </button>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
            {/**/}
          </div>
        </app-banking>
        {/**/}
      </div>
   
  );
};

export default Banking;
