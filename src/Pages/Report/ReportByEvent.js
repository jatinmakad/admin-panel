import React, { useState } from "react";
import DateTimePicker from "../../components/DateTimePicker";

const ReportByEvent = () => {
  const [date, setDate] = useState("");
  return (
    <app-pl-market _nghost-serverapp-c110 className="ng-star-inserted">
      <div _ngcontent-serverapp-c110 className="main_wrap">
        <div _ngcontent-serverapp-c110 className="box">
          <h2 _ngcontent-serverapp-c110>Profit/Loss Report by Event</h2>
        </div>
        <div _ngcontent-serverapp-c110 className="function-wrap">
          <ul _ngcontent-serverapp-c110 className="input-list flowroot">
            <div
              _ngcontent-serverapp-c110
              id="statusCondition"
              style={{ display: "none" }}
            >
              <li _ngcontent-serverapp-c110>
                <label _ngcontent-serverapp-c110>Bet Status:</label>
              </li>
              <li _ngcontent-serverapp-c110>
                <select
                  _ngcontent-serverapp-c110
                  name="betStatus"
                  id="betStatus"
                />
              </li>
            </div>
            <li _ngcontent-serverapp-c110>
              <label _ngcontent-serverapp-c110>Sports</label>
            </li>
            <li _ngcontent-serverapp-c110>
              <select _ngcontent-serverapp-c110 id="func_sports">
                <option _ngcontent-serverapp-c110 value selected="selected">
                  All
                </option>
                <option _ngcontent-serverapp-c110 value="soccer">
                  SOCCER
                </option>
                <option _ngcontent-serverapp-c110 value="tennis">
                  TENNIS
                </option>
                <option _ngcontent-serverapp-c110 value="cricket">
                  CRICKET
                </option>
                <option _ngcontent-serverapp-c110 value="SRLT20">
                  SRL T20
                </option>
                <option _ngcontent-serverapp-c110 value="T10">
                  Virtual T10
                </option>
                <option _ngcontent-serverapp-c110 value="horseracing">
                  HORSE_RACING
                </option>
                <option _ngcontent-serverapp-c110 value="greyhound">
                  GREYHOUND_RACING
                </option>
                <option _ngcontent-serverapp-c110 value="casino">
                  CASINO
                </option>
              </select>
            </li>
            <li _ngcontent-serverapp-c110 />
            <li _ngcontent-serverapp-c110>
              <input
                _ngcontent-serverapp-c110
                type="text"
                name
                id
                placeholder="search"
                className="ng-untouched ng-pristine ng-valid"
              />
            </li>
            <li _ngcontent-serverapp-c110>
              <label _ngcontent-serverapp-c110>Period</label>
            </li>
            <li _ngcontent-serverapp-c110 className="blockdis">
              <div _ngcontent-serverapp-c110 className="webhide">
                <DateTimePicker
                  onChange={(dateObj) => console.log(dateObj)} // full Date with picked date+time
                  min={new Date(2026, 0, 1)}
                  max={new Date()}
                  timeInputId="startTime"
                />
              </div>{" "}
              to{" "}
              <DateTimePicker
                onChange={(dateObj) => console.log(dateObj)} // full Date with picked date+time
                min={new Date(2026, 0, 1)}
                max={new Date()}
                timeInputId="endTime"
              />
            </li>
            <li _ngcontent-serverapp-c110 style={{ display: "none" }}>
              (Timezone:IST)
            </li>
            {/**/}
          </ul>
          <ul _ngcontent-serverapp-c110 className="input-list flowroot">
            <li _ngcontent-serverapp-c110>
              <a _ngcontent-serverapp-c110 id="today" className="btn">
                Just for today
              </a>
            </li>
            <li _ngcontent-serverapp-c110>
              <a _ngcontent-serverapp-c110 id="yesterday" className="btn">
                From yesterday
              </a>
            </li>
            <li _ngcontent-serverapp-c110 style={{ display: "none" }}>
              <a
                _ngcontent-serverapp-c110
                id="last7days"
                href="#"
                className="btn"
              >
                Last 7 days
              </a>
            </li>
            <li _ngcontent-serverapp-c110 style={{ display: "none" }}>
              <a
                _ngcontent-serverapp-c110
                id="last30days"
                href="#"
                className="btn"
              >
                Last 30 days
              </a>
            </li>
            <li _ngcontent-serverapp-c110 style={{ display: "none" }}>
              <a
                _ngcontent-serverapp-c110
                id="last2months"
                href="#"
                className="btn"
              >
                {" "}
                Last 2 Months
              </a>
            </li>
            <li _ngcontent-serverapp-c110 style={{ display: "none" }}>
              <a
                _ngcontent-serverapp-c110
                id="last3months"
                href="#"
                className="btn"
              >
                {" "}
                Last 3 Months
              </a>
            </li>
            <li _ngcontent-serverapp-c110>
              <a _ngcontent-serverapp-c110 id="getPL" className="btn-send">
                Get P &amp; L
              </a>
            </li>
          </ul>
        </div>
        <div _ngcontent-serverapp-c110 className="total_all">
          <span _ngcontent-serverapp-c110>
            <label _ngcontent-serverapp-c110>Last:</label>
            <select _ngcontent-serverapp-c110 name="limit" id="limit">
              <option _ngcontent-serverapp-c110 value={100}>
                100 Txn
              </option>
              <option _ngcontent-serverapp-c110 value={50}>
                50 Txn
              </option>
              <option _ngcontent-serverapp-c110 value={25}>
                25 Txn
              </option>
              <option _ngcontent-serverapp-c110 value={10} selected>
                10 Txn
              </option>
              <option _ngcontent-serverapp-c110 value="marketReport.length">
                Full
              </option>
            </select>
          </span>
          <div _ngcontent-serverapp-c110 className="spacer" />
          <span
            _ngcontent-serverapp-c110
            className="total-users"
            style={{ "font-weight": "600" }}
          >
            {" "}
            Total Records: 0{" "}
          </span>
          <div _ngcontent-serverapp-c110 className="download-reports">
            <button
              _ngcontent-serverapp-c110
              title="Export Excel"
              className="excel btn"
            >
              <img
                _ngcontent-serverapp-c110
                src="/assets/images/transparent.gif"
                alt
              />
            </button>
            <button
              _ngcontent-serverapp-c110
              title="Export Pdf"
              className="pdf btn"
            >
              <img
                _ngcontent-serverapp-c110
                src="/assets/images/transparent.gif"
                alt
              />
            </button>
            <button
              _ngcontent-serverapp-c110
              title="Export Csv"
              className="csv btn"
            >
              <img
                _ngcontent-serverapp-c110
                src="/assets/images/transparent.gif"
                alt
              />
            </button>
          </div>
        </div>
        <div
          _ngcontent-serverapp-c110
          id="reportDiv"
          className="over-wrap"
          style={{ "max-height": "calc(100% - 32px - 93px)" }}
        >
          <div
            _ngcontent-serverapp-c110
            className="table-responsive data-table"
          >
            <table
              _ngcontent-serverapp-c110
              id="table_DL"
              className="table01 table-pt"
            >
              <tbody _ngcontent-serverapp-c110>
                <tr _ngcontent-serverapp-c110 id="head">
                  <th
                    _ngcontent-serverapp-c110
                    id="header_eventName"
                    width
                    data-order="asc"
                    data-name="sport"
                    className="align-L sort_asc"
                  >
                    Event
                  </th>
                  <th
                    _ngcontent-serverapp-c110
                    width="18%"
                    data-order="asc"
                    data-name="competitionName"
                    className="align-L sort_asc"
                  >
                    Competition
                  </th>
                  <th
                    _ngcontent-serverapp-c110
                    width="15%"
                    data-order="asc"
                    data-name="stake"
                    className="sort_asc"
                  >
                    Stake
                  </th>
                  <th
                    _ngcontent-serverapp-c110
                    width="15%"
                    data-order="asc"
                    data-name="playerPL"
                    className="sort_asc"
                  >
                    {" "}
                    Player P/L
                  </th>
                  <th
                    _ngcontent-serverapp-c110
                    id="header_profitLoss_downLine"
                    width="15%"
                    data-order="asc"
                    data-name="downLinePL"
                    className="sort_asc"
                  >
                    {" "}
                    Downline P/L{" "}
                  </th>
                  <th
                    _ngcontent-serverapp-c110
                    id="header_tax_agent_3"
                    width="15%"
                    style={{ display: "none" }}
                  >
                    {" "}
                    Master Comm.{" "}
                  </th>
                  <th
                    _ngcontent-serverapp-c110
                    id="header_rebate_agent_3"
                    width="15%"
                    style={{ display: "none" }}
                  >
                    {" "}
                    Master Rebate{" "}
                  </th>
                  <th
                    _ngcontent-serverapp-c110
                    id="header_tax_agent_2"
                    width="15%"
                    data-order="asc"
                    data-name="commision"
                    className="sort_asc"
                  >
                    Super Comm.
                  </th>
                  <th
                    _ngcontent-serverapp-c110
                    id="header_rebate_agent_2"
                    width="15%"
                    style={{ display: "none" }}
                  >
                    {" "}
                    Super Rebate{" "}
                  </th>
                  <th
                    _ngcontent-serverapp-c110
                    id="header_payout_agent_1"
                    width="15%"
                    style={{ display: "none" }}
                  >
                    {" "}
                    SS PT{" "}
                  </th>
                  <th
                    _ngcontent-serverapp-c110
                    id="header_tax_agent_1"
                    width="15%"
                    style={{ display: "none" }}
                  >
                    {" "}
                    SS Comm.{" "}
                  </th>
                  <th
                    _ngcontent-serverapp-c110
                    id="header_rebate_agent_1"
                    width="15%"
                    style={{ display: "none" }}
                  >
                    {" "}
                    SS Rebate{" "}
                  </th>
                  <th
                    _ngcontent-serverapp-c110
                    id="header_profitLoss_agent_1"
                    width="15%"
                    style={{ display: "none" }}
                  >
                    {" "}
                    SS Total{" "}
                  </th>
                  <th
                    _ngcontent-serverapp-c110
                    width="15%"
                    data-order="asc"
                    data-name="upLinePL"
                    className="sort_asc"
                  >
                    {" "}
                    Upline P/L
                  </th>
                </tr>
              </tbody>
              <tbody _ngcontent-serverapp-c110 id="content">
                {/**/}
                <tr _ngcontent-serverapp-c110 className="total">
                  <td _ngcontent-serverapp-c110 className="align-L">
                    Total
                  </td>
                  <td _ngcontent-serverapp-c110 />
                  <td _ngcontent-serverapp-c110 id="_totalStake">
                    <span
                      _ngcontent-serverapp-c110
                      className="ng-star-inserted"
                    >
                      {" "}
                      0.00{" "}
                    </span>
                    {/**/}
                    {/**/}
                  </td>
                  <td _ngcontent-serverapp-c110 id="_totalProfitLoss">
                    <span
                      _ngcontent-serverapp-c110
                      className="ng-star-inserted"
                    >
                      {" "}
                      0.00{" "}
                    </span>
                    {/**/}
                    {/**/}
                  </td>
                  <td _ngcontent-serverapp-c110 id="_totalProfitLossDownLine">
                    <span
                      _ngcontent-serverapp-c110
                      className="ng-star-inserted"
                    >
                      {" "}
                      0.00{" "}
                    </span>
                    {/**/}
                    {/**/}
                  </td>
                  <td
                    _ngcontent-serverapp-c110
                    id="_totalTax3"
                    style={{ display: "none" }}
                  >
                    0.00
                  </td>
                  <td
                    _ngcontent-serverapp-c110
                    id="_totalRebate3"
                    style={{ display: "none" }}
                  >
                    0.00
                  </td>
                  <td _ngcontent-serverapp-c110 id="_totalTax2">
                    <span
                      _ngcontent-serverapp-c110
                      className="ng-star-inserted"
                    >
                      {" "}
                      0.00{" "}
                    </span>
                    {/**/}
                    {/**/}
                  </td>
                  <td
                    _ngcontent-serverapp-c110
                    id="_totalRebate2"
                    style={{ display: "none" }}
                  >
                    0.00
                  </td>
                  <td
                    _ngcontent-serverapp-c110
                    id="_totalPayout1"
                    style={{ display: "none" }}
                  >
                    0.00
                  </td>
                  <td
                    _ngcontent-serverapp-c110
                    id="_totalTax1"
                    style={{ display: "none" }}
                  >
                    0.00
                  </td>
                  <td
                    _ngcontent-serverapp-c110
                    id="_totalRebate1"
                    style={{ display: "none" }}
                  >
                    0.00
                  </td>
                  <td
                    _ngcontent-serverapp-c110
                    id="_totalProfitLoss1"
                    style={{ display: "none" }}
                  >
                    0.00
                  </td>
                  <td _ngcontent-serverapp-c110 id="_totalProfitLossUpLine">
                    <span
                      _ngcontent-serverapp-c110
                      className="ng-star-inserted"
                    >
                      {" "}
                      0.00{" "}
                    </span>
                    {/**/}
                    {/**/}
                  </td>
                </tr>
              </tbody>
            </table>
            {/**/}
            {/**/}
          </div>
        </div>
      </div>
    </app-pl-market>
  );
};

export default ReportByEvent;
