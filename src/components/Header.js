import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <app-header _ngcontent-serverapp-c45 _nghost-serverapp-c44>
      <div _ngcontent-serverapp-c44 className="top">
        <div _ngcontent-serverapp-c44 className="header">
          <div _ngcontent-serverapp-c44 className="bars hideweb">
            <i
              _ngcontent-serverapp-c44
              aria-hidden="true"
              className="fa fa-bars"
            />
          </div>

          <h1 _ngcontent-serverapp-c44>
            <Link _ngcontent-serverapp-c44 to="/">
              <img
                _ngcontent-serverapp-c44
                src="/assets/images/transparent.gif"
                alt
              />
            </Link>
          </h1>

          <div _ngcontent-serverapp-c44 className="spacer" />
          <div _ngcontent-serverapp-c44 className="dropdown hideweb">
            <button
              _ngcontent-serverapp-c44
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              className="btn btn-secondary dropdown-toggle"
              style={{
                "background-color": "#333333",
                color: "white",
                "margin-right": "10px",
              }}
            >
              <i
                _ngcontent-serverapp-c44
                aria-hidden="true"
                className="fa fa-user"
              />{" "}
              testbetx [P]{" "}
            </button>
            <div
              _ngcontent-serverapp-c44
              aria-labelledby="dropdownMenuButton"
              className="dropdown-menu"
            >
              <a _ngcontent-serverapp-c44 className="dropdown-item">
                <strong _ngcontent-serverapp-c44> USD 0.00 </strong>
              </a>

              <Link
                to="/login"
                _ngcontent-serverapp-c44
                className="dropdown-item"
              >
                <i
                  _ngcontent-serverapp-c44
                  aria-hidden="true"
                  className="fa fa-sign-out"
                />
                Logout
              </Link>
              <a
                _ngcontent-serverapp-c44
                id="apk"
                className="dropdown-item"
                href="https://ag.static112233.com/assets/apk/betx365.apk"
                download="betx365.apk"
              >
                <i
                  _ngcontent-serverapp-c44
                  aria-hidden="true"
                  className="fa fa-android"
                />
                Get APK
              </a>
            </div>
          </div>

          <ul _ngcontent-serverapp-c44 className="account-wrap">
            <li _ngcontent-serverapp-c44>
              <span _ngcontent-serverapp-c44 className="Bdlevel lv_4" />
              <strong _ngcontent-serverapp-c44 className="lovetextcolor">
                {" "}
                testbetx [P]
              </strong>
            </li>
            <li _ngcontent-serverapp-c44 className="ng-star-inserted">
              <span _ngcontent-serverapp-c44>Main</span>
              <strong _ngcontent-serverapp-c44 id="mainBalance">
                {" "}
                USD 0.00{" "}
              </strong>
            </li>

            <li _ngcontent-serverapp-c44 className="main-wallet no-multi">
              <a
                _ngcontent-serverapp-c44
                id="topRefresh"
                className="a-refresh"
                style={{ cursor: "pointer" }}
              >
                <img
                  _ngcontent-serverapp-c44
                  src="/assets/images/transparent.gif"
                />
              </a>
            </li>
          </ul>
        </div>

        <div _ngcontent-serverapp-c44 className="menu-wrap">
          <div _ngcontent-serverapp-c44 className="main_wrap">
            <ul _ngcontent-serverapp-c44 className="menu">
              <li _ngcontent-serverapp-c44>
                <Link
                  _ngcontent-serverapp-c44
                  id="menu_my_report"
                  className="menu-drop"
                  // to="/"
                  // className={location?.pathname == "/" ? "select" : ""}
                >
                  Downline{" "}
                </Link>

                <ul _ngcontent-serverapp-c44>
                  <li _ngcontent-serverapp-c44>
                    <Link _ngcontent-serverapp-c44 to="/">
                      Sub Admin
                    </Link>
                  </li>

                  <li _ngcontent-serverapp-c44>
                    <Link _ngcontent-serverapp-c44 to="/alluser">
                      Search
                    </Link>
                  </li>
                </ul>
              </li>

              <li _ngcontent-serverapp-c44>
                <Link
                  _ngcontent-serverapp-c44
                  routerlinkactive="select"
                  id="menu_my_account"
                  to="/my-account/account-summary"
                  className={
                    location?.pathname == "/my-account/account-summary"
                      ? "select"
                      : ""
                  }
                >
                  {" "}
                  My Account
                </Link>
              </li>

              <li _ngcontent-serverapp-c44>
                <a
                  _ngcontent-serverapp-c44
                  className="menu-drop"
                  id="menu_my_report"
                >
                  {" "}
                  My Report
                </a>

                <ul _ngcontent-serverapp-c44>
                  <li _ngcontent-serverapp-c44>
                    <Link _ngcontent-serverapp-c44 to="/reports/pl-downline">
                      Profit and Loss Report by Downline
                    </Link>
                  </li>

                  <li _ngcontent-serverapp-c44>
                    <Link
                      _ngcontent-serverapp-c44
                      to="/reports/parlay-Downline"
                    >
                      Profit/Loss Report by parlay Downline
                    </Link>
                  </li>

                  <li _ngcontent-serverapp-c44>
                    <Link _ngcontent-serverapp-c44 to="/reports/pl-market">
                      Profit/Loss Report by Event
                    </Link>
                  </li>

                  <li _ngcontent-serverapp-c44>
                    <Link _ngcontent-serverapp-c44 to="/reports/pnl-match">
                      Profit/Loss Report by Market
                    </Link>
                  </li>

                  <li _ngcontent-serverapp-c44>
                    <Link _ngcontent-serverapp-c44 to="/reports/pl-player">
                      Profit/Loss Exchange Report by Player
                    </Link>
                  </li>

                  <li _ngcontent-serverapp-c44>
                    <Link
                      _ngcontent-serverapp-c44
                      to="/reports/pnl-casino-downline"
                    >
                      Profit/Loss Report by Casino Downline
                    </Link>
                  </li>

                  <li _ngcontent-serverapp-c44>
                    <Link _ngcontent-serverapp-c44 to="/reports/pnl-downline">
                      Profit/Loss Report by All Casino
                    </Link>
                  </li>

                  <li _ngcontent-serverapp-c44>
                    <Link _ngcontent-serverapp-c44 to="/reports/pl-awccasino">
                      Profit/Loss Report by AWC
                    </Link>
                  </li>

                  <li _ngcontent-serverapp-c44>
                    <Link _ngcontent-serverapp-c44 to="/reports/pl-bogcasino">
                      Profit/Loss Report by BO
                    </Link>
                  </li>
                </ul>
              </li>

              <li _ngcontent-serverapp-c44>
                <Link
                  _ngcontent-serverapp-c44
                  routerlinkactive="select"
                  id="menu_bet_list"
                  to="/betList"
                  className={location?.pathname == "/betList" ? "select" : ""}
                >
                  {" "}
                  Bet List
                </Link>
              </li>

              <li _ngcontent-serverapp-c44>
                <Link
                  _ngcontent-serverapp-c44
                  routerlinkactive="select"
                  id="menu_live_bet"
                  to="/betList-live"
                  className={
                    location?.pathname == "/betList-live" ? "select" : ""
                  }
                >
                  {" "}
                  Live Bet
                </Link>
              </li>

              <li _ngcontent-serverapp-c44>
                <a
                  _ngcontent-serverapp-c44
                  className="menu-drop"
                  id="menu_risk"
                >
                  {" "}
                  Risk
                </a>
                <ul _ngcontent-serverapp-c44>
                  <li _ngcontent-serverapp-c44>
                    <Link
                      _ngcontent-serverapp-c44
                      to="/risk-management/riskManagement"
                    >
                      Risk Management
                    </Link>
                  </li>

                  <li _ngcontent-serverapp-c44>
                    <Link _ngcontent-serverapp-c44 to="/parlaybetlist">
                      Parlay-Bets
                    </Link>
                  </li>
                </ul>
              </li>

              <li _ngcontent-serverapp-c44>
                <Link
                  _ngcontent-serverapp-c44
                  routerlinkactive="select"
                  id="menu_banking"
                  to="/banking"
                  className={location?.pathname == "/banking" ? "select" : ""}
                >
                  {" "}
                  Banking
                </Link>
              </li>

              <li _ngcontent-serverapp-c44>
                <a
                  _ngcontent-serverapp-c44
                  className="menu-drop"
                  id="menu_casino_control"
                >
                  {" "}
                  Casino Control
                </a>

                  <ul _ngcontent-serverapp-c44>
                  <li _ngcontent-serverapp-c44>
                    <Link _ngcontent-serverapp-c44 to="/awcCasino">
                      Awc Casino Bets
                    </Link>
                  </li>

                  <li _ngcontent-serverapp-c44>
                    <Link _ngcontent-serverapp-c44 to="/bogCasino">
                      Bo Casino Bets
                    </Link>
                  </li>
                </ul>
              </li>

              <li _ngcontent-serverapp-c44>
                <Link
                  _ngcontent-serverapp-c44
                 
                  id="menu_block_market"
                  to="/block-market"
                    className={
                    location?.pathname == "/block-market" ? "select" : ""
                  }
              
                >
                  {" "}
                  Block Market
                </Link>
              </li>

              <li _ngcontent-serverapp-c44>
                <a
                  _ngcontent-serverapp-c44
                  className="menu-drop"
                  id="menu_more"
                >
                  {" "}
                  More
                </a>
                
                  <ul _ngcontent-serverapp-c44>
                  <li _ngcontent-serverapp-c44>
                    <Link _ngcontent-serverapp-c44 to="/messages/ticker">
                    Ticker
                    </Link>
                  </li>

                 
                </ul>
              </li>

              <li _ngcontent-serverapp-c44 className="time_zone">
                <span _ngcontent-serverapp-c44>Timezone :</span> GMT+5:30{" "}
              </li>

              <li _ngcontent-serverapp-c44 className="logout">
                <Link to="/login" _ngcontent-serverapp-c44 id="logout">
                  Logout
                  <img
                    _ngcontent-serverapp-c44
                    src="assets/images/transparent.gif"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <app-modal _ngcontent-serverapp-c44 _nghost-serverapp-c43>
        <div
          _ngcontent-serverapp-c43
          id="createModal"
          className="pop_bg"
          style={{ height: "100%", width: "100%", display: "none" }}
        >
          <div _ngcontent-serverapp-c43 className="pop_box pop_refer">
            <a
              _ngcontent-serverapp-c43
              href="#"
              className="close_pop ng-star-inserted"
            >
              close_pop
            </a>

            <div _ngcontent-serverapp-c44 className="modal-header">
              <h3 _ngcontent-serverapp-c44>Confirm Bets</h3>
            </div>
            <div
              _ngcontent-serverapp-c44
              className="modal-content mdclass"
              style={{ "box-shadow": "none" }}
            >
              <p _ngcontent-serverapp-c44>
                {" "}
                Are you sure you want to Unlock bets{" "}
              </p>
            </div>
            <ul _ngcontent-serverapp-c44 className="btn-wrap">
              <li _ngcontent-serverapp-c44>
                <button _ngcontent-serverapp-c44 className="btn">
                  Cancel
                </button>
              </li>
              <li _ngcontent-serverapp-c44>
                <button
                  _ngcontent-serverapp-c44
                  id="Btn"
                  type="submit"
                  className="btn-send"
                  style={{ width: "84px" }}
                >
                  {" "}
                  Unlock{" "}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </app-modal>
      <app-modal _ngcontent-serverapp-c44 _nghost-serverapp-c43>
        <div
          _ngcontent-serverapp-c43
          id="createModal"
          className="pop_bg"
          style={{ height: "100%", width: "100%", display: "none" }}
        >
          <div _ngcontent-serverapp-c43 className="pop_box pop_refer">
            <a
              _ngcontent-serverapp-c43
              href="#"
              className="close_pop ng-star-inserted"
            >
              close_pop
            </a>

            <div _ngcontent-serverapp-c44 className="modal-header">
              <h3 _ngcontent-serverapp-c44>Confirm Transfer</h3>
            </div>
            <div
              _ngcontent-serverapp-c44
              className="modal-content mdclass"
              style={{ "box-shadow": "none" }}
            >
              <p _ngcontent-serverapp-c44>
                {" "}
                Are you sure you want to unlock transfer{" "}
              </p>
            </div>
            <ul _ngcontent-serverapp-c44 className="btn-wrap">
              <li _ngcontent-serverapp-c44>
                <button _ngcontent-serverapp-c44 className="btn">
                  Cancel
                </button>
              </li>
              <li _ngcontent-serverapp-c44>
                <button
                  _ngcontent-serverapp-c44
                  id="Btn"
                  type="submit"
                  className="btn-send"
                  style={{ width: "84px" }}
                >
                  {" "}
                  Unlock{" "}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </app-modal>
      <app-modal _ngcontent-serverapp-c44 _nghost-serverapp-c43>
        <div
          _ngcontent-serverapp-c43
          id="createModal"
          className="pop_bg"
          style={{ height: "100%", width: "100%", display: "none" }}
        >
          <div _ngcontent-serverapp-c43 className="pop_box pop_refer">
            <a
              _ngcontent-serverapp-c43
              href="#"
              className="close_pop ng-star-inserted"
            >
              close_pop
            </a>

            <div _ngcontent-serverapp-c44 className="modal-header">
              <h3 _ngcontent-serverapp-c44>Confirm Restart</h3>
            </div>
            <div
              _ngcontent-serverapp-c44
              className="modal-content mdclass"
              style={{ "box-shadow": "none" }}
            >
              <p _ngcontent-serverapp-c44>
                {" "}
                Are You sure you want restart Games management{" "}
              </p>
            </div>
            <ul _ngcontent-serverapp-c44 className="btn-wrap">
              <li _ngcontent-serverapp-c44>
                <button _ngcontent-serverapp-c44 className="btn">
                  Cancel
                </button>
              </li>
              <li _ngcontent-serverapp-c44>
                <button
                  _ngcontent-serverapp-c44
                  id="Btn"
                  type="submit"
                  className="btn-send"
                  style={{ width: "84px" }}
                >
                  {" "}
                  Restart{" "}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </app-modal>
    </app-header>
  );
};

export default Header;
