import React from "react";

const Risk = () => {
  return (
    <app-risk-management-sky
      _nghost-serverapp-c186
      className="ng-star-inserted"
    >
      <div _ngcontent-serverapp-c186 className="main_wrap">
        <div
          style={{
            margin: "13px 0 5px",
            display: "flow-root",
          }}
          _ngcontent-serverapp-c186
          className="total_all"
        >
          <h2
            style={{
              color: "#243a48",
              fontSize: "16px",
              fontWeight: "700",
            }}
            _ngcontent-serverapp-c186
          >
            Risk Management Summary
          </h2>
          <a
            _ngcontent-serverapp-c186
            id="refresh_Top_Racing"
            className="btn_replay"
            style={{ display: "none" }}
          >
            <img
              _ngcontent-serverapp-c186
              src="data:image/gif;base64,R0lGODdhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAICTAEAOw=="
            />
          </a>
          {/**/}
        </div>
        <div _ngcontent-serverapp-c186 className="play_race-wrap">
          <div _ngcontent-serverapp-c186 className="function-wrap">
            <ul _ngcontent-serverapp-c186 className="input-list">
              <li _ngcontent-serverapp-c186>
                <a _ngcontent-serverapp-c186 id="cricket" className="btn-send">
                  Cricket
                </a>
              </li>
              <li _ngcontent-serverapp-c186>
                <a _ngcontent-serverapp-c186 id="tennis" className="btn-send">
                  Tennis
                </a>
              </li>
              <li _ngcontent-serverapp-c186>
                <a _ngcontent-serverapp-c186 id="soccer" className="btn-send">
                  Soccer
                </a>
              </li>
              <li _ngcontent-serverapp-c186>
                <a
                  _ngcontent-serverapp-c186
                  id="all"
                  className="btn-send selected"
                >
                  All
                </a>
              </li>
            </ul>
          </div>
          <div _ngcontent-serverapp-c186 className="top_player-wrap">
            <h3 _ngcontent-serverapp-c186>
              <ul _ngcontent-serverapp-c186 className="tab-topplay">
                <li
                  _ngcontent-serverapp-c186
                  id="top10MatchedAmountLi"
                  className="select"
                >
                  <a _ngcontent-serverapp-c186>Top 20 Matched Amount Player</a>
                </li>
                <li _ngcontent-serverapp-c186 id="top10ExposureLi">
                  <a _ngcontent-serverapp-c186>Top 20 Exposure Player</a>
                </li>
                <li _ngcontent-serverapp-c186 id="top10WinnersLi">
                  <a _ngcontent-serverapp-c186>Top 20 Winners Player</a>
                </li>
              </ul>
            </h3>
            <div style={{ display: "flex" }}>
              <div
                style={{ width: "50%" }}
                _ngcontent-serverapp-c186
                className="ng-star-inserted"
              >
                <ul _ngcontent-serverapp-c186 className="slip-head">
                  <li _ngcontent-serverapp-c186 className="col-playID">
                    UID
                  </li>
                  <li _ngcontent-serverapp-c186 className="col-exp">
                    Exposure
                  </li>
                  <li
                    style={{ display: "block" }}
                    _ngcontent-serverapp-c186
                    className="col-amount sort-this"
                  >
                    Matched Amount
                  </li>
                </ul>
              </div>
              {/**/}
              <div
                style={{ width: "50%" }}
                _ngcontent-serverapp-c186
                className=" ng-star-inserted"
              >
                <ul _ngcontent-serverapp-c186 className="slip-head">
                  <li _ngcontent-serverapp-c186 className="col-playID">
                    UID
                  </li>
                  <li _ngcontent-serverapp-c186 className="col-exp">
                    Exposure
                  </li>
                  <li
                    style={{ display: "block" }}
                    _ngcontent-serverapp-c186
                    className="col-amount sort-this"
                  >
                    Matched Amount
                  </li>
                </ul>
              </div>{" "}
            </div>
            {/**/}
            {/**/}
            {/**/}
            {/**/}
            {/**/}
          </div>
          <div
            _ngcontent-serverapp-c186
            className="racing-wrap"
            style={{ display: "none" }}
          >
            <h3 _ngcontent-serverapp-c186>
              Horse Racing &amp; Greyhound Racing
            </h3>
            <ul _ngcontent-serverapp-c186 className="slip-head">
              <li _ngcontent-serverapp-c186 className="col-type">
                Type
              </li>
              <li _ngcontent-serverapp-c186 className="col-country">
                Country
              </li>
              <li _ngcontent-serverapp-c186 className="col-local">
                Events
              </li>
              <li _ngcontent-serverapp-c186 className="col-amount">
                Matched Amount
              </li>
            </ul>
            <div
              _ngcontent-serverapp-c186
              className="over-wrap"
              style={{ height: "160px" }}
            >
              <table _ngcontent-serverapp-c186 style={{ display: "none" }}>
                <tbody _ngcontent-serverapp-c186>
                  <tr _ngcontent-serverapp-c186 id="tempTr_racing">
                    <td
                      _ngcontent-serverapp-c186
                      width={30}
                      className="td-type"
                    >
                      <span _ngcontent-serverapp-c186 id="eventType" />
                    </td>
                    <td
                      _ngcontent-serverapp-c186
                      width={60}
                      className="align-L"
                    >
                      <a
                        _ngcontent-serverapp-c186
                        id="country"
                        href="javascript:void (0);"
                      />
                    </td>
                    <td _ngcontent-serverapp-c186 className="align-L">
                      <a
                        _ngcontent-serverapp-c186
                        href="javascript:void (0);"
                        id="eventName"
                      />
                    </td>
                    <td _ngcontent-serverapp-c186 width={100} id="amount" />
                  </tr>
                  <tr _ngcontent-serverapp-c186 id="tempTr_noData_racing">
                    <td _ngcontent-serverapp-c186>&nbsp;</td>
                    <td _ngcontent-serverapp-c186>&nbsp;</td>
                    <td _ngcontent-serverapp-c186>&nbsp;</td>
                    <td _ngcontent-serverapp-c186>&nbsp;</td>
                  </tr>
                </tbody>
              </table>
              <table
                _ngcontent-serverapp-c186
                className="table01 table-responsive"
              >
                <tbody _ngcontent-serverapp-c186 id="content_racing">
                  <tr _ngcontent-serverapp-c186 id="tempTr_noData_racing">
                    <td _ngcontent-serverapp-c186>&nbsp;</td>
                    <td _ngcontent-serverapp-c186>&nbsp;</td>
                    <td _ngcontent-serverapp-c186>&nbsp;</td>
                    <td _ngcontent-serverapp-c186>&nbsp;</td>
                  </tr>
                  <tr _ngcontent-serverapp-c186 id="tempTr_noData_racing">
                    <td _ngcontent-serverapp-c186>&nbsp;</td>
                    <td _ngcontent-serverapp-c186>&nbsp;</td>
                    <td _ngcontent-serverapp-c186>&nbsp;</td>
                    <td _ngcontent-serverapp-c186>&nbsp;</td>
                  </tr>
                  <tr _ngcontent-serverapp-c186 id="tempTr_noData_racing">
                    <td _ngcontent-serverapp-c186>&nbsp;</td>
                    <td _ngcontent-serverapp-c186>&nbsp;</td>
                    <td _ngcontent-serverapp-c186>&nbsp;</td>
                    <td _ngcontent-serverapp-c186>&nbsp;</td>
                  </tr>
                  <tr _ngcontent-serverapp-c186 id="tempTr_noData_racing">
                    <td _ngcontent-serverapp-c186>&nbsp;</td>
                    <td _ngcontent-serverapp-c186>&nbsp;</td>
                    <td _ngcontent-serverapp-c186>&nbsp;</td>
                    <td _ngcontent-serverapp-c186>&nbsp;</td>
                  </tr>
                  <tr _ngcontent-serverapp-c186 id="tempTr_noData_racing">
                    <td _ngcontent-serverapp-c186>&nbsp;</td>
                    <td _ngcontent-serverapp-c186>&nbsp;</td>
                    <td _ngcontent-serverapp-c186>&nbsp;</td>
                    <td _ngcontent-serverapp-c186>&nbsp;</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/**/}
      </div>
      <div
        _ngcontent-serverapp-c186
        className="pop_bg"
        style={{ top: "0px", display: "none" }}
      >
        <div
          _ngcontent-serverapp-c186
          className="log-wrap"
          style={{ "margin-top": "9vh", overflow: "auto" }}
        >
          <table
            _ngcontent-serverapp-c186
            className="game-team table-responsive"
          >
            <tbody _ngcontent-serverapp-c186>
              <tr _ngcontent-serverapp-c186>
                <td _ngcontent-serverapp-c186 className="game-name">
                  <div _ngcontent-serverapp-c186 className="wd">
                    {" "}
                    -{" "}
                  </div>
                  <a
                    _ngcontent-serverapp-c186
                    className="pop-close"
                    style={{ top: "-1px" }}
                  >
                    <img
                      _ngcontent-serverapp-c186
                      src="data:image/gif;base64,R0lGODdhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAICTAEAOw=="
                      className="icon-back"
                    />
                    Close
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div _ngcontent-serverapp-c186 className="agent_path">
            <ul
              _ngcontent-serverapp-c186
              id="agentPath"
              className="agent_path-L"
            >
              <li
                _ngcontent-serverapp-c186
                className="breadcrumb-li ng-star-inserted"
              >
                <a _ngcontent-serverapp-c186>
                  <span _ngcontent-serverapp-c186 className="lv_4" />
                  <strong _ngcontent-serverapp-c186>testbetx</strong>
                </a>
              </li>
              {/**/}
            </ul>
          </div>
          <div _ngcontent-serverapp-c186 className="pop-content">
            <div _ngcontent-serverapp-c186 className="pop-title">
              <div _ngcontent-serverapp-c186>
                <ul
                  _ngcontent-serverapp-c186
                  id="path_tip"
                  className="agent-path"
                  style={{ display: "none" }}
                >
                  <li _ngcontent-serverapp-c186 className="point-agent-path" />
                  <li _ngcontent-serverapp-c186 style={{ display: "none" }}>
                    <span _ngcontent-serverapp-c186 className="lv_1">
                      One
                    </span>
                    <span _ngcontent-serverapp-c186 id="agent_0" />
                  </li>
                  <li _ngcontent-serverapp-c186 style={{ display: "none" }}>
                    <span _ngcontent-serverapp-c186 className="lv_2">
                      SS
                    </span>
                    <span _ngcontent-serverapp-c186 id="agent_1" />
                  </li>
                  <li _ngcontent-serverapp-c186 style={{ display: "none" }}>
                    <span _ngcontent-serverapp-c186 className="lv_3">
                      SUP
                    </span>
                    <span _ngcontent-serverapp-c186 id="agent_2" />
                  </li>
                  <li
                    _ngcontent-serverapp-c186
                    className="last-lv"
                    style={{ display: "none" }}
                  >
                    <span _ngcontent-serverapp-c186 className="lv_4">
                      MA
                    </span>
                    <span _ngcontent-serverapp-c186 id="agent_3" />
                  </li>
                </ul>
              </div>
              <table _ngcontent-serverapp-c186 style={{ display: "none" }}>
                <tbody _ngcontent-serverapp-c186>
                  <tr _ngcontent-serverapp-c186 id="tempTr">
                    <td _ngcontent-serverapp-c186 className="td-UID">
                      <span
                        _ngcontent-serverapp-c186
                        id="number"
                        className="order"
                      />
                      <a _ngcontent-serverapp-c186 id="userId">
                        <strong _ngcontent-serverapp-c186 />
                      </a>
                    </td>
                    <td _ngcontent-serverapp-c186 id="selection_exposure_1">
                      -
                    </td>
                    <td
                      _ngcontent-serverapp-c186
                      id="selection_exposure_3"
                      style={{ display: "none" }}
                    >
                      -
                    </td>
                    <td _ngcontent-serverapp-c186 id="selection_exposure_2">
                      -
                    </td>
                  </tr>
                  <tr
                    _ngcontent-serverapp-c186
                    id="tempTotalTr"
                    className="total"
                  >
                    <td _ngcontent-serverapp-c186 className="align-L">
                      Total
                    </td>
                    <td
                      _ngcontent-serverapp-c186
                      id="total_selection_exposure_1"
                    />
                    <td
                      _ngcontent-serverapp-c186
                      id="total_selection_exposure_3"
                      style={{ display: "none" }}
                    />
                    <td
                      _ngcontent-serverapp-c186
                      id="total_selection_exposure_2"
                    />
                  </tr>
                  <tr _ngcontent-serverapp-c186 id="tempTr_noData">
                    <td
                      _ngcontent-serverapp-c186
                      colSpan={4}
                      className="no-data"
                    >
                      <p _ngcontent-serverapp-c186>No Data</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                _ngcontent-serverapp-c186
                className="table01 table-responsive"
              >
                <tbody _ngcontent-serverapp-c186>
                  {/**/}
                  {/**/}
                </tbody>
                <tbody _ngcontent-serverapp-c186>
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div
        _ngcontent-serverapp-c186
        className="pop_bg"
        style={{ top: "0px", display: "none" }}
      >
        <div
          _ngcontent-serverapp-c186
          className="log-wrap"
          style={{ "margin-top": "9vh", overflow: "auto" }}
        >
          <table
            _ngcontent-serverapp-c186
            className="game-team table-responsive"
          >
            <tbody _ngcontent-serverapp-c186>
              <tr _ngcontent-serverapp-c186>
                <td _ngcontent-serverapp-c186 className="game-name">
                  <div _ngcontent-serverapp-c186 className="wd">
                    {" "}
                    -{" "}
                  </div>
                  <a
                    _ngcontent-serverapp-c186
                    className="pop-close"
                    style={{ top: "-1px" }}
                  >
                    <img
                      _ngcontent-serverapp-c186
                      src="data:image/gif;base64,R0lGODdhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAICTAEAOw=="
                      className="icon-back"
                    />
                    Close
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div _ngcontent-serverapp-c186 className="agent_path">
            <ul
              _ngcontent-serverapp-c186
              id="agentPath"
              className="agent_path-L"
            >
              <li _ngcontent-serverapp-c186 id="path5" className="last_li">
                <a _ngcontent-serverapp-c186>
                  <span
                    _ngcontent-serverapp-c186
                    className="Bdlevel lv_4 premium"
                  />
                  <strong _ngcontent-serverapp-c186>testbetx </strong>
                </a>
              </li>
            </ul>
          </div>
          <div _ngcontent-serverapp-c186 className="pop-content">
            <div _ngcontent-serverapp-c186 className="pop-title">
              <div _ngcontent-serverapp-c186>
                <ul
                  _ngcontent-serverapp-c186
                  id="path_tip"
                  className="agent-path"
                  style={{ display: "none" }}
                >
                  <li _ngcontent-serverapp-c186 className="point-agent-path" />
                  <li _ngcontent-serverapp-c186 style={{ display: "none" }}>
                    <span _ngcontent-serverapp-c186 className="lv_1">
                      One
                    </span>
                    <span _ngcontent-serverapp-c186 id="agent_0" />
                  </li>
                  <li _ngcontent-serverapp-c186 style={{ display: "none" }}>
                    <span _ngcontent-serverapp-c186 className="lv_2">
                      SS
                    </span>
                    <span _ngcontent-serverapp-c186 id="agent_1" />
                  </li>
                  <li _ngcontent-serverapp-c186 style={{ display: "none" }}>
                    <span _ngcontent-serverapp-c186 className="lv_3">
                      SUP
                    </span>
                    <span _ngcontent-serverapp-c186 id="agent_2" />
                  </li>
                  <li
                    _ngcontent-serverapp-c186
                    className="last-lv"
                    style={{ display: "none" }}
                  >
                    <span _ngcontent-serverapp-c186 className="lv_4">
                      MA
                    </span>
                    <span _ngcontent-serverapp-c186 id="agent_3" />
                  </li>
                </ul>
              </div>
              <table _ngcontent-serverapp-c186 style={{ display: "none" }}>
                <tbody _ngcontent-serverapp-c186>
                  <tr _ngcontent-serverapp-c186 id="tempTr">
                    <td _ngcontent-serverapp-c186 className="td-UID">
                      <span
                        _ngcontent-serverapp-c186
                        id="number"
                        className="order"
                      />
                      <a _ngcontent-serverapp-c186 id="userId">
                        <strong _ngcontent-serverapp-c186 />
                      </a>
                    </td>
                    <td _ngcontent-serverapp-c186 id="selection_exposure_1">
                      -
                    </td>
                    <td
                      _ngcontent-serverapp-c186
                      id="selection_exposure_3"
                      style={{ display: "none" }}
                    >
                      -
                    </td>
                    <td _ngcontent-serverapp-c186 id="selection_exposure_2">
                      -
                    </td>
                  </tr>
                  <tr
                    _ngcontent-serverapp-c186
                    id="tempTotalTr"
                    className="total"
                  >
                    <td _ngcontent-serverapp-c186 className="align-L">
                      Total
                    </td>
                    <td
                      _ngcontent-serverapp-c186
                      id="total_selection_exposure_1"
                    />
                    <td
                      _ngcontent-serverapp-c186
                      id="total_selection_exposure_3"
                      style={{ display: "none" }}
                    />
                    <td
                      _ngcontent-serverapp-c186
                      id="total_selection_exposure_2"
                    />
                  </tr>
                  <tr _ngcontent-serverapp-c186 id="tempTr_noData">
                    <td
                      _ngcontent-serverapp-c186
                      colSpan={4}
                      className="no-data"
                    >
                      <p _ngcontent-serverapp-c186>No Data</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                _ngcontent-serverapp-c186
                className="table01 table-responsive"
              >
                <tbody _ngcontent-serverapp-c186>
                  {/**/}
                  {/**/}
                </tbody>
                <tbody _ngcontent-serverapp-c186 id="content">
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                  {/**/}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div
        _ngcontent-serverapp-c186
        className="pop_bg"
        style={{ top: "0px", display: "none" }}
      >
        <div _ngcontent-serverapp-c186 className="pop-content">
          <div
            _ngcontent-serverapp-c186
            id="logWrap"
            className="log-wrap"
            style={{ "margin-top": "9vh", width: "600px", overflow: "auto" }}
          >
            <table
              _ngcontent-serverapp-c186
              className="game-team table-responsive"
            >
              <tbody _ngcontent-serverapp-c186>
                <tr _ngcontent-serverapp-c186>
                  <td _ngcontent-serverapp-c186 className="game-name">
                    <div _ngcontent-serverapp-c186 className="wd" />
                    <a _ngcontent-serverapp-c186 className="pop-close">
                      <img
                        _ngcontent-serverapp-c186
                        src="data:image/gif;base64,R0lGODdhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAICTAEAOw=="
                        className="icon-back"
                      />
                      Close
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div _ngcontent-serverapp-c186 className="pop-content">
              <table
                _ngcontent-serverapp-c186
                id="table"
                className="table01 tab-depth table-responsive"
              >
                <tbody>
                  <tr _ngcontent-serverapp-c186>
                    <th
                      _ngcontent-serverapp-c186
                      width="50%"
                      className="align-L"
                    >
                      Runs
                    </th>
                    <th
                      _ngcontent-serverapp-c186
                      width="50%"
                      className="border-l"
                    >
                      Amount
                    </th>
                  </tr>
                  {/**/}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div
        _ngcontent-serverapp-c186
        className="pop_bg"
        style={{ top: "0px", display: "none" }}
      >
        <div
          _ngcontent-serverapp-c186
          className="log-wrap"
          style={{ "margin-top": "9vh", overflow: "auto" }}
        >
          <table
            _ngcontent-serverapp-c186
            className="game-team table-responsive"
          >
            <tbody _ngcontent-serverapp-c186>
              <tr _ngcontent-serverapp-c186>
                <td _ngcontent-serverapp-c186 className="game-name">
                  <div _ngcontent-serverapp-c186 className="wd">
                    {" "}
                    - Declared Fancy
                  </div>
                  <a
                    _ngcontent-serverapp-c186
                    className="pop-close"
                    style={{ top: "-1px" }}
                  >
                    <img
                      _ngcontent-serverapp-c186
                      src="data:image/gif;base64,R0lGODdhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAICTAEAOw=="
                      className="icon-back"
                    />
                    Close
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div _ngcontent-serverapp-c186 className="pop-content">
            <div _ngcontent-serverapp-c186 className="pop-title">
              <div _ngcontent-serverapp-c186>
                <ul
                  _ngcontent-serverapp-c186
                  id="path_tip"
                  className="agent-path"
                  style={{ display: "none" }}
                >
                  <li _ngcontent-serverapp-c186 className="point-agent-path" />
                  <li _ngcontent-serverapp-c186 style={{ display: "none" }}>
                    <span _ngcontent-serverapp-c186 className="lv_1">
                      One
                    </span>
                    <span _ngcontent-serverapp-c186 id="agent_0" />
                  </li>
                  <li _ngcontent-serverapp-c186 style={{ display: "none" }}>
                    <span _ngcontent-serverapp-c186 className="lv_2">
                      SS
                    </span>
                    <span _ngcontent-serverapp-c186 id="agent_1" />
                  </li>
                  <li _ngcontent-serverapp-c186 style={{ display: "none" }}>
                    <span _ngcontent-serverapp-c186 className="lv_3">
                      SUP
                    </span>
                    <span _ngcontent-serverapp-c186 id="agent_2" />
                  </li>
                  <li
                    _ngcontent-serverapp-c186
                    className="last-lv"
                    style={{ display: "none" }}
                  >
                    <span _ngcontent-serverapp-c186 className="lv_4">
                      MA
                    </span>
                    <span _ngcontent-serverapp-c186 id="agent_3" />
                  </li>
                </ul>
              </div>
              <table _ngcontent-serverapp-c186 style={{ display: "none" }}>
                <tbody _ngcontent-serverapp-c186>
                  <tr _ngcontent-serverapp-c186 id="tempTr">
                    <td _ngcontent-serverapp-c186 className="td-UID">
                      <span
                        _ngcontent-serverapp-c186
                        id="number"
                        className="order"
                      />
                      <a _ngcontent-serverapp-c186 id="userId">
                        <strong _ngcontent-serverapp-c186 />
                      </a>
                    </td>
                    <td _ngcontent-serverapp-c186 id="selection_exposure_1">
                      -
                    </td>
                    <td
                      _ngcontent-serverapp-c186
                      id="selection_exposure_3"
                      style={{ display: "none" }}
                    >
                      -
                    </td>
                    <td _ngcontent-serverapp-c186 id="selection_exposure_2">
                      -
                    </td>
                  </tr>
                  <tr
                    _ngcontent-serverapp-c186
                    id="tempTotalTr"
                    className="total"
                  >
                    <td _ngcontent-serverapp-c186 className="align-L">
                      Total
                    </td>
                    <td
                      _ngcontent-serverapp-c186
                      id="total_selection_exposure_1"
                    />
                    <td
                      _ngcontent-serverapp-c186
                      id="total_selection_exposure_3"
                      style={{ display: "none" }}
                    />
                    <td
                      _ngcontent-serverapp-c186
                      id="total_selection_exposure_2"
                    />
                  </tr>
                  <tr _ngcontent-serverapp-c186 id="tempTr_noData">
                    <td
                      _ngcontent-serverapp-c186
                      colSpan={4}
                      className="no-data"
                    >
                      <p _ngcontent-serverapp-c186>No Data</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                _ngcontent-serverapp-c186
                className="table01 table-responsive"
              >
                <tbody _ngcontent-serverapp-c186>
                  <tr _ngcontent-serverapp-c186>
                    <th
                      _ngcontent-serverapp-c186
                      width
                      rowSpan={2}
                      className="align-L"
                    >
                      Fancy
                    </th>
                    <th
                      _ngcontent-serverapp-c186
                      width="100px"
                      colSpan={1}
                      className="align-C border-l bgcolor-sub"
                    >
                      P/L
                    </th>
                    <th
                      _ngcontent-serverapp-c186
                      width="100px"
                      colSpan={1}
                      className="align-C border-l bgcolor-sub"
                    >
                      Results
                    </th>
                  </tr>
                </tbody>
                <tbody _ngcontent-serverapp-c186 id="content">
                  {/**/}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </app-risk-management-sky>
  );
};

export default Risk;
