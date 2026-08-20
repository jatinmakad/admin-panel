import React from "react";
import Layout from "../Layout";

const Home = () => {
  return (
    <Layout>
      <app-users-list _nghost-serverapp-c112 className="ng-star-inserted">
        <div _ngcontent-serverapp-c112 className="main_wrap">
          <div _ngcontent-serverapp-c112 className="marquee-box">
            <h4 _ngcontent-serverapp-c112>News</h4>
            <div _ngcontent-serverapp-c112 className="marquee">
              <div _ngcontent-serverapp-c112 className="marquee-content">
                <span
                  _ngcontent-serverapp-c112
                  className="ticker-item ng-star-inserted"
                >
                  Welcome to Exchange
                </span>
              </div>
            </div>
          </div>
        </div>
        <div _ngcontent-serverapp-c112 className="main_wrap">
          <div _ngcontent-serverapp-c112 className="total_all">
            <div _ngcontent-serverapp-c112 className="agent_path">
              <div
                _ngcontent-serverapp-c112
                id="userSearchUl"
                className="search-wrap ng-star-inserted"
              >
                <input
                  _ngcontent-serverapp-c112
                  appinputrestriction="noSpecialChars"
                  type="text"
                  name="userId"
                  id="userId"
                  className="search-input ng-untouched ng-valid ng-dirty"
                  placeholder="Find member..."
                />
                <button
                  _ngcontent-serverapp-c112
                  id="searchUserId"
                  className="search-but"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <router-outlet _ngcontent-serverapp-c112 />
          <app-children className="ng-star-inserted">
            <router-outlet />
            <app-sub _nghost-serverapp-c111 className="ng-star-inserted">
              <div _ngcontent-serverapp-c111 className="total_all">
                <ng-select
                  _ngcontent-serverapp-c111
                  className="ng-select ng-select-single ng-select-searchable ng-select-clearable ng-untouched ng-pristine ng-valid"
                >
                  <div className="ng-select-container ng-has-value">
                    <div className="ng-value-container">
                      <div className="ng-placeholder" />
                      <div className="ng-value ng-star-inserted">
                        <span
                          aria-hidden="true"
                          className="ng-value-icon left ng-star-inserted"
                        >
                          ×
                        </span>
                        <span className="ng-value-label ng-star-inserted">
                          {" "}
                          Active{" "}
                        </span>
                      </div>

                      <div
                        role="combobox"
                        aria-haspopup="listbox"
                        className="ng-input"
                        aria-expanded="false"
                      >
                        <input
                          aria-autocomplete="list"
                          type="text"
                          autoCorrect="off"
                          autoCapitalize="off"
                          autoComplete="a8c8a7de7c87"
                        />
                      </div>
                    </div>

                    <span
                      className="ng-clear-wrapper ng-star-inserted"
                      title="Clear all"
                    >
                      <span aria-hidden="true" className="ng-clear">
                        ×
                      </span>
                    </span>

                    <span className="ng-arrow-wrapper">
                      <span className="ng-arrow" />
                    </span>
                  </div>
                </ng-select>

                <span _ngcontent-serverapp-c111 className="spacer" />

                <button
                  _ngcontent-serverapp-c111
                  className="add_member btn ng-star-inserted"
                >
                  <img
                    _ngcontent-serverapp-c111
                    src="assets/images/transparent.gif"
                  />
                  Add Sub Admin{" "}
                </button>

                <button
                  _ngcontent-serverapp-c111
                  id="refresh"
                  className="btn_replay btn"
                >
                  <img
                    _ngcontent-serverapp-c111
                    src="assets/images/transparent.gif"
                  />
                </button>
              </div>
              <div _ngcontent-serverapp-c111 style={{ display: "flex" }}>
                <div
                  _ngcontent-serverapp-c111
                  style={{
                    "-webkit-box-pack": "start",
                    "-webkit-justify-content": "flex-start",
                    "-ms-flex-pack": "start",
                    "justify-content": "flex-start",
                  }}
                />
              </div>
              <div
                _ngcontent-serverapp-c111
                id="totalBox"
                className="total_box filtertotaldivweb"
              >
                <dl
                  _ngcontent-serverapp-c111
                  id="creditLimitDL"
                  className="total_dl ng-star-inserted"
                >
                  <dt _ngcontent-serverapp-c111> Total Balance</dt>
                  <dd _ngcontent-serverapp-c111 id="myCreditLimit">
                    {" "}
                    USD
                    <span
                      _ngcontent-serverapp-c111
                      className="ng-star-inserted"
                    >
                      {" "}
                      0.00
                    </span>
                  </dd>
                </dl>

                <dl
                  _ngcontent-serverapp-c111
                  id="totalExposureDL"
                  className="total_dl"
                >
                  <dt _ngcontent-serverapp-c111>Net Exposure</dt>
                  <dd _ngcontent-serverapp-c111 id="totalExposure">
                    {" "}
                    USD
                    <span _ngcontent-serverapp-c111 className="red">
                      (0.00)
                    </span>
                  </dd>
                </dl>

                <dl
                  _ngcontent-serverapp-c111
                  id="availableBalanceDL"
                  className="total_dl"
                >
                  <dt _ngcontent-serverapp-c111> Balance</dt>
                  <dd _ngcontent-serverapp-c111 id="totalAvailBal">
                    {" "}
                    USD
                    <span
                      _ngcontent-serverapp-c111
                      className="ng-star-inserted"
                    >
                      {" "}
                      0.00
                    </span>
                  </dd>
                </dl>
                <dl
                  _ngcontent-serverapp-c111
                  id="balanceDownline"
                  className="total_dl"
                >
                  <dt _ngcontent-serverapp-c111>Balance in Downline</dt>
                  <dd _ngcontent-serverapp-c111 id="myCreditLimit">
                    {" "}
                    USD
                    <span
                      _ngcontent-serverapp-c111
                      className="ng-star-inserted"
                    >
                      {" "}
                      0.00
                    </span>
                  </dd>
                </dl>

                <dl
                  _ngcontent-serverapp-c111
                  id="creditGivenOutDL"
                  className="total_dl"
                >
                  <dt _ngcontent-serverapp-c111>
                    Transferable P/L with Upline
                  </dt>
                  <dd _ngcontent-serverapp-c111 id="totalCreditGivenOut">
                    {" "}
                    USD
                    <span
                      _ngcontent-serverapp-c111
                      className="ng-star-inserted"
                    >
                      <span
                        _ngcontent-serverapp-c111
                        className="ng-star-inserted"
                      >
                        0.00{" "}
                      </span>
                    </span>
                  </dd>
                </dl>
                <dl
                  _ngcontent-serverapp-c111
                  className="total_dl ng-star-inserted"
                >
                  <dt _ngcontent-serverapp-c111>Total Users</dt>
                  <dd _ngcontent-serverapp-c111> 0 </dd>
                </dl>
              </div>
              <div
                _ngcontent-serverapp-c111
                id="totalBox"
                className="total_box filtertotaldivmob ng-star-inserted"
              >
                <dl
                  _ngcontent-serverapp-c111
                  id="creditLimitDL"
                  className="total_dl_mob"
                >
                  <dt _ngcontent-serverapp-c111>Total Balance</dt>
                  <dd
                    _ngcontent-serverapp-c111
                    id="myCreditLimit"
                    className="push"
                  >
                    <strong _ngcontent-serverapp-c111> 0.00</strong> (USD){" "}
                  </dd>
                </dl>

                <div _ngcontent-serverapp-c111 className="text-center">
                  <span _ngcontent-serverapp-c111 id="user">
                    <i
                      _ngcontent-serverapp-c111
                      className="fa fa-chevron-down"
                    />
                  </span>
                </div>
              </div>

              <div
                _ngcontent-serverapp-c111
                className="table-responsive data-table"
              >
                <div
                  _ngcontent-serverapp-c111
                  id="widthAll"
                  className="width-all"
                >
                  <app-table
                    _ngcontent-serverapp-c111
                    id="resultTable"
                    className="table01 margin-table sortable"
                    style={{ display: "table" }}
                    _nghost-serverapp-c108
                  >
                    <tbody>
                      <tr>
                        <th className="align-L sort_asc">Account</th>{" "}
                        <th className="align-L sort_asc">Account</th>{" "}
                        <th className="align-L sort_asc">Account</th>{" "}
                        <th className="align-L sort_asc">Account</th>{" "}
                        <th className="align-L sort_asc">Account</th>
                      </tr>
                      <tr style={{ fontWeight: "600" }}>
                        <td className="align-L">Total</td>{" "}
                        <td className="align-L">Total</td>{" "}
                        <td className="align-L">Total</td>{" "}
                        <td className="align-L">Total</td>{" "}
                        <td className="align-L">Total</td>{" "}
                      </tr>
                    </tbody>
                  </app-table>
                </div>
              </div>
              <div
                _ngcontent-serverapp-c111
                className="footer_info ng-star-inserted"
              >
                <div _ngcontent-serverapp-c111 className="main_wrap">
                  <ul _ngcontent-serverapp-c111 className="action">
                    <li _ngcontent-serverapp-c111 className="f-tab">
                      <span _ngcontent-serverapp-c111 className="timeuserlock">
                        F
                      </span>
                      <p
                        _ngcontent-serverapp-c111
                        className="data_line data-text"
                      >
                        User Locked{" "}
                      </p>
                    </li>

                    <li
                      _ngcontent-serverapp-c111
                      className="lock 111 ng-star-inserted"
                    >
                      <p
                        _ngcontent-serverapp-c111
                        className="data_line data-text1"
                      >
                        Block Market{" "}
                      </p>
                    </li>

                    <li _ngcontent-serverapp-c111 className="p_l">
                      <p
                        _ngcontent-serverapp-c111
                        className="data_line data-text1"
                      >
                        Betting Profit Loss{" "}
                      </p>
                    </li>
                    <li _ngcontent-serverapp-c111 className="betting_history">
                      <p
                        _ngcontent-serverapp-c111
                        className="data_line data-text1"
                      >
                        Betting History{" "}
                      </p>
                    </li>
                    <li _ngcontent-serverapp-c111 className="profile">
                      <p
                        _ngcontent-serverapp-c111
                        className="data_line data-text1"
                      >
                        Profile{" "}
                      </p>
                    </li>
                    <li _ngcontent-serverapp-c111 className="status">
                      <p
                        _ngcontent-serverapp-c111
                        className="data_line data-text1"
                      >
                        Change status{" "}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <app-modal _ngcontent-serverapp-c111 _nghost-serverapp-c43>
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

                    <h3 _ngcontent-serverapp-c111 className="modal-header">
                      {" "}
                      Do you want to delete{" "}
                    </h3>
                    <div _ngcontent-serverapp-c111 className="modal-footer">
                      <form
                        _ngcontent-serverapp-c111
                        noValidate
                        className="ng-untouched ng-pristine ng-invalid"
                      >
                        <ul _ngcontent-serverapp-c111 className="btn-wrap">
                          <li _ngcontent-serverapp-c111>
                            <label _ngcontent-serverapp-c111 htmlFor="password">
                              {" "}
                              Password:{" "}
                            </label>
                            <input
                              _ngcontent-serverapp-c111
                              id="password"
                              type="password"
                              formcontrolname="password"
                              placeholder="Enter"
                              className="ng-untouched ng-pristine ng-invalid"
                            />
                            <button
                              _ngcontent-serverapp-c111
                              type="submit"
                              className="btn-send"
                            >
                              Submit{" "}
                            </button>
                          </li>
                        </ul>
                      </form>
                    </div>
                  </div>
                </div>
              </app-modal>
              <app-modal _ngcontent-serverapp-c111 _nghost-serverapp-c43>
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

                    <h3 _ngcontent-serverapp-c111 className="modal-header">
                      Add sub admin
                    </h3>
                    <form
                      _ngcontent-serverapp-c111
                      noValidate
                      style={{
                        display: "flex",
                        "-webkit-flex-flow": "column",
                        "-ms-flex-flow": "column",
                        "flex-flow": "column",
                      }}
                      className="ng-dirty ng-touched ng-valid"
                    >
                      <div
                        _ngcontent-serverapp-c111
                        id="modalid"
                        className="modal-content"
                        style={{
                          "max-height": "400px",
                          "overflow-y": "scroll",
                        }}
                      >
                        <ul
                          _ngcontent-serverapp-c111
                          className="half_box add-member-box"
                        >
                          <li
                            _ngcontent-serverapp-c111
                            className="add_account_box"
                          >
                            <dl _ngcontent-serverapp-c111>
                              <dt _ngcontent-serverapp-c111>Username</dt>
                              <dd _ngcontent-serverapp-c111>
                                <input
                                  _ngcontent-serverapp-c111
                                  id="userName"
                                  type="text"
                                  formcontrolname="userName"
                                  maxLength={20}
                                  appinputrestriction="noSpecialChars"
                                  required
                                  style={{ display: "none" }}
                                  placeholder="Enter"
                                  className="ng-dirty ng-valid ng-touched"
                                />
                                <input
                                  _ngcontent-serverapp-c111
                                  id="userNameInput"
                                  type="text"
                                  formcontrolname="userName"
                                  maxLength={20}
                                  appinputrestriction="noSpecialChars"
                                  required
                                  placeholder="Enter"
                                  className="ng-dirty ng-valid ng-touched"
                                />
                                <span
                                  _ngcontent-serverapp-c111
                                  className="must rg-mark"
                                >
                                  ＊
                                </span>
                                <span
                                  _ngcontent-serverapp-c111
                                  id="userNameErrorText"
                                  className="error-text"
                                  style={{ display: "none" }}
                                />
                              </dd>
                              <dt _ngcontent-serverapp-c111>Password</dt>
                              <dd _ngcontent-serverapp-c111>
                                <input
                                  _ngcontent-serverapp-c111
                                  appinputrestriction="noSpecialChars2"
                                  id="userPassword"
                                  type="password"
                                  formcontrolname="password"
                                  maxLength={20}
                                  required
                                  style={{ display: "none" }}
                                  placeholder="Enter"
                                  className="ng-dirty ng-valid ng-touched"
                                />
                                <input
                                  _ngcontent-serverapp-c111
                                  appinputrestriction="noSpecialChars2"
                                  id="userPassword"
                                  type="password"
                                  formcontrolname="password"
                                  maxLength={20}
                                  required
                                  placeholder="Enter"
                                  className="ng-dirty ng-valid ng-touched"
                                />
                                <span
                                  _ngcontent-serverapp-c111
                                  className="must rg-mark"
                                >
                                  ＊
                                </span>

                                <span
                                  _ngcontent-serverapp-c111
                                  id="passwordErrorText"
                                  className="error-text"
                                  style={{ display: "none" }}
                                />
                                <i
                                  _ngcontent-serverapp-c111
                                  aria-hidden="true"
                                  className="fa fa-eye-slash fa-xs pass-eye ng-star-inserted"
                                  style={{
                                    color: "#000",
                                    top: "7px",
                                    left: "22.5rem",
                                    position: "absolute",
                                    opacity: "0.9",
                                  }}
                                />
                              </dd>
                            </dl>

                            <dl _ngcontent-serverapp-c111>
                              <dt
                                _ngcontent-serverapp-c111
                                className="ng-star-inserted"
                              >
                                Full Name
                              </dt>

                              <dd
                                _ngcontent-serverapp-c111
                                className="ng-star-inserted"
                              >
                                <input
                                  _ngcontent-serverapp-c111
                                  id="firstName 1"
                                  type="text"
                                  maxLength={50}
                                  appinputrestriction="noSpecialCharFN"
                                  formcontrolname="fullName"
                                  placeholder="Enter"
                                  className="ng-untouched ng-pristine ng-valid"
                                />
                              </dd>
                            </dl>
                          </li>
                        </ul>
                      </div>
                      <div _ngcontent-serverapp-c111 className="modal-footer">
                        <div _ngcontent-serverapp-c111 className="btn_box">
                          <button
                            _ngcontent-serverapp-c111
                            type="submit"
                            className="btn-send size-btn"
                          >
                            Create
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </app-modal>
              <app-modal _ngcontent-serverapp-c111 _nghost-serverapp-c43>
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

                    <h3 _ngcontent-serverapp-c111>Credit Reference Edit</h3>
                    <form
                      _ngcontent-serverapp-c111
                      noValidate
                      className="ng-invalid ng-dirty ng-touched"
                    >
                      <div
                        _ngcontent-serverapp-c111
                        className="wrap-refer_edit"
                      >
                        <div _ngcontent-serverapp-c111>
                          <dl _ngcontent-serverapp-c111>
                            <dt _ngcontent-serverapp-c111>Current</dt>
                            <dd _ngcontent-serverapp-c111>
                              <a
                                _ngcontent-serverapp-c111
                                id="creditReferenceLog"
                                className="btn"
                              >
                                Log
                              </a>
                              <strong
                                _ngcontent-serverapp-c111
                                id="creditReference"
                              />
                            </dd>
                          </dl>
                          <dl _ngcontent-serverapp-c111>
                            <dt _ngcontent-serverapp-c111>New</dt>
                            <dd _ngcontent-serverapp-c111>
                              <input
                                _ngcontent-serverapp-c111
                                type="number"
                                id="newCreditReference"
                                formcontrolname="newCreditRef"
                                min={0}
                                max={1000000}
                                placeholder="Enter"
                                className="ng-untouched ng-pristine ng-invalid"
                              />
                            </dd>
                          </dl>
                          <dl _ngcontent-serverapp-c111>
                            <dt _ngcontent-serverapp-c111> Password</dt>
                            <dd _ngcontent-serverapp-c111>
                              <input
                                _ngcontent-serverapp-c111
                                id="changeCreditReferencePassword"
                                type="password"
                                formcontrolname="password"
                                placeholder="Enter"
                                className="ng-dirty ng-valid ng-touched"
                              />
                            </dd>
                          </dl>
                        </div>
                      </div>
                      <ul _ngcontent-serverapp-c111 className="btn-wrap">
                        <li _ngcontent-serverapp-c111>
                          <button
                            _ngcontent-serverapp-c111
                            id="changeCreditReferenceBtn"
                            type="submit"
                            className="btn-send"
                          >
                            {" "}
                            submit{" "}
                          </button>
                        </li>
                      </ul>
                    </form>
                  </div>
                </div>
              </app-modal>
              <app-modal _ngcontent-serverapp-c111 _nghost-serverapp-c43>
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

                    <div _ngcontent-serverapp-c111 className="modal-header">
                      <h3 _ngcontent-serverapp-c111>Change status</h3>
                    </div>
                    <div _ngcontent-serverapp-c111 className="modal-content">
                      <div _ngcontent-serverapp-c111 className="status_id">
                        <p _ngcontent-serverapp-c111 id="changeAccount">
                          <span
                            _ngcontent-serverapp-c111
                            className="Bdlevel lv_ premium"
                          />{" "}
                        </p>
                        <p _ngcontent-serverapp-c111 id="originalStatus">
                          <img
                            _ngcontent-serverapp-c111
                            src="assets/images/transparent.gif"
                          />{" "}
                        </p>
                      </div>
                      <div _ngcontent-serverapp-c111 className="white-wrap">
                        <ul
                          _ngcontent-serverapp-c111
                          id="statusBtn"
                          className="status_but"
                        >
                          <li _ngcontent-serverapp-c111>
                            <a
                              _ngcontent-serverapp-c111
                              id="activeBtn"
                              className="but_active betgameactive"
                              disabled="false"
                            >
                              <img
                                _ngcontent-serverapp-c111
                                src="assets/images/transparent.gif"
                              />{" "}
                              Active{" "}
                            </a>
                          </li>
                          <li _ngcontent-serverapp-c111>
                            <a
                              _ngcontent-serverapp-c111
                              id="suspendBtn"
                              className="but_suspend betgameLocked"
                              disabled="false"
                            >
                              <img
                                _ngcontent-serverapp-c111
                                src="assets/images/transparent.gif"
                              />{" "}
                              Suspend{" "}
                            </a>
                          </li>
                          <li _ngcontent-serverapp-c111>
                            <a
                              _ngcontent-serverapp-c111
                              id="lockedBtn"
                              className="but_locked betgamesuspend"
                              disabled="false"
                            >
                              <img
                                _ngcontent-serverapp-c111
                                src="assets/images/transparent.gif"
                              />{" "}
                              Locked{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div _ngcontent-serverapp-c111 className="modal-footer">
                        <form
                          _ngcontent-serverapp-c111
                          noValidate
                          className="btn_box inline-form ng-untouched ng-pristine ng-invalid"
                        >
                          <div _ngcontent-serverapp-c111 className="form_list">
                            <label _ngcontent-serverapp-c111> Password: </label>
                            <input
                              _ngcontent-serverapp-c111
                              id="changeStatusPassword"
                              type="password"
                              formcontrolname="password"
                              required
                              placeholder="Enter"
                              className="ng-untouched ng-pristine ng-invalid"
                            />
                          </div>
                          <div _ngcontent-serverapp-c111 className="btn_box">
                            <button
                              _ngcontent-serverapp-c111
                              id="changeStatusBtn"
                              type="submit"
                              className="btn-send"
                            >
                              {" "}
                              Change{" "}
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </app-modal>
              <app-modal _ngcontent-serverapp-c111 _nghost-serverapp-c43>
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

                    <div _ngcontent-serverapp-c111 className="modal-header">
                      <h3 _ngcontent-serverapp-c111> Lock / Unlock casino</h3>
                    </div>
                    <div _ngcontent-serverapp-c111 className="modal-content">
                      <div
                        _ngcontent-serverapp-c111
                        className="status_id"
                        style={{ padding: "22px 7px" }}
                      >
                        <p _ngcontent-serverapp-c111>
                          {" "}
                          Are you sure you want Unlock casino
                        </p>
                      </div>
                      <div _ngcontent-serverapp-c111 className="modal-footer">
                        <div
                          _ngcontent-serverapp-c111
                          className="btn_box"
                          style={{ "padding-top": "5px" }}
                        >
                          <button
                            _ngcontent-serverapp-c111
                            id="changeStatusBtn"
                            className="btn-send"
                            style={{ width: "55px" }}
                          >
                            {" "}
                            OK{" "}
                          </button>
                          <button
                            _ngcontent-serverapp-c111
                            id="changeStatusBtn"
                            className="btn-send"
                          >
                            {" "}
                            Cancel{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </app-modal>
              <app-modal _ngcontent-serverapp-c111 _nghost-serverapp-c43>
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

                    <div _ngcontent-serverapp-c111 className="modal-header">
                      <h3 _ngcontent-serverapp-c111>
                        {" "}
                        Activate / Deactivate Delay
                      </h3>
                    </div>
                    <div _ngcontent-serverapp-c111 className="modal-content">
                      <div
                        _ngcontent-serverapp-c111
                        className="status_id"
                        style={{ padding: "22px 7px" }}
                      >
                        <p _ngcontent-serverapp-c111>
                          {" "}
                          Are you sure you wantDeactivate 1.5 min delay between
                          back/lay
                        </p>
                      </div>
                      <div _ngcontent-serverapp-c111 className="modal-footer">
                        <div
                          _ngcontent-serverapp-c111
                          className="btn_box"
                          style={{ "padding-top": "5px" }}
                        >
                          <button
                            _ngcontent-serverapp-c111
                            id="changeStatusBtn"
                            className="btn-send"
                          >
                            {" "}
                            OK{" "}
                          </button>
                          <button
                            _ngcontent-serverapp-c111
                            id="changeStatusBtn"
                            className="btn-send"
                          >
                            {" "}
                            Cancel{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </app-modal>
              <app-modal _ngcontent-serverapp-c111 _nghost-serverapp-c43>
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

                    <div _ngcontent-serverapp-c111 className="modal-header">
                      <h3 _ngcontent-serverapp-c111>
                        Activate / Deactivate Parlay
                      </h3>
                    </div>
                    <div _ngcontent-serverapp-c111 className="modal-content">
                      <div
                        _ngcontent-serverapp-c111
                        className="status_id"
                        style={{ padding: "22px 7px" }}
                      >
                        <p _ngcontent-serverapp-c111>
                          {" "}
                          Are you sure you want Deactivate Parlay
                        </p>
                      </div>
                      <div _ngcontent-serverapp-c111 className="modal-footer">
                        <div
                          _ngcontent-serverapp-c111
                          className="btn_box"
                          style={{ "padding-top": "5px" }}
                        >
                          <button
                            _ngcontent-serverapp-c111
                            id="changeStatusBtn"
                            className="btn-send"
                          >
                            {" "}
                            OK{" "}
                          </button>
                          <button
                            _ngcontent-serverapp-c111
                            id="changeStatusBtn"
                            className="btn-send"
                          >
                            {" "}
                            Cancel{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </app-modal>
              <app-modal _ngcontent-serverapp-c111 _nghost-serverapp-c43>
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

                    <div _ngcontent-serverapp-c111 className="modal-header">
                      <h3 _ngcontent-serverapp-c111> Add Domain</h3>
                    </div>
                    <div _ngcontent-serverapp-c111 className="modal-content">
                      <div _ngcontent-serverapp-c111 className="domain_id">
                        <div
                          _ngcontent-serverapp-c111
                          className="form-group margrp"
                        >
                          <label
                            _ngcontent-serverapp-c111
                            htmlFor="new"
                            style={{ "padding-top": "10px" }}
                          >
                            New Domain : &nbsp;
                          </label>
                          <input
                            _ngcontent-serverapp-c111
                            type="text"
                            className="form-control ng-untouched ng-pristine ng-valid"
                          />
                        </div>
                      </div>
                      <div _ngcontent-serverapp-c111 className="modal-footer">
                        <div
                          _ngcontent-serverapp-c111
                          className="btn_box"
                          style={{ "padding-top": "5px" }}
                        >
                          <button
                            _ngcontent-serverapp-c111
                            id="changeStatusBtn"
                            className="btn-send"
                          >
                            {" "}
                            OK{" "}
                          </button>
                          <button
                            _ngcontent-serverapp-c111
                            id="changeStatusBtn"
                            className="btn-send"
                          >
                            {" "}
                            Cancel{" "}
                          </button>
                        </div>
                      </div>
                      <hr _ngcontent-serverapp-c111 />
                      <div _ngcontent-serverapp-c111 className="popcls">
                        <h3 _ngcontent-serverapp-c111 className="hcls">
                          {" "}
                          Added Domain List
                        </h3>
                        <b
                          _ngcontent-serverapp-c111
                          style={{ "padding-left": "20px" }}
                        >
                          Main Domain : &nbsp;
                        </b>
                        <span _ngcontent-serverapp-c111>()</span>
                      </div>
                      <div
                        _ngcontent-serverapp-c111
                        className="table-responsive data-table"
                      >
                        <table
                          _ngcontent-serverapp-c111
                          id="table01"
                          className="table01"
                        >
                          <tbody _ngcontent-serverapp-c111>
                            <tr _ngcontent-serverapp-c111>
                              <th _ngcontent-serverapp-c111 className="align-L">
                                Domain name
                              </th>
                              <th _ngcontent-serverapp-c111>Action</th>
                            </tr>
                          </tbody>
                          <tbody _ngcontent-serverapp-c111 id="content"></tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </app-modal>
              <app-modal _ngcontent-serverapp-c111 _nghost-serverapp-c43>
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

                    <div _ngcontent-serverapp-c111 className="modal-header">
                      <h3 _ngcontent-serverapp-c111> Set Spin Loss</h3>
                    </div>
                    <div _ngcontent-serverapp-c111 className="modal-content">
                      <div _ngcontent-serverapp-c111 className="domain_id">
                        <div
                          _ngcontent-serverapp-c111
                          className="form-group margrp"
                        >
                          <label
                            _ngcontent-serverapp-c111
                            htmlFor="new"
                            style={{ "padding-top": "10px" }}
                          >
                            Set Loss : &nbsp;
                          </label>
                          <input
                            _ngcontent-serverapp-c111
                            type="number"
                            className="form-control ng-untouched ng-pristine ng-valid"
                          />
                        </div>
                        <div
                          _ngcontent-serverapp-c111
                          className="form-group margrp"
                        >
                          <label
                            _ngcontent-serverapp-c111
                            htmlFor="new"
                            style={{ "padding-top": "10px" }}
                          >
                            {" "}
                            Set Multiplier: &nbsp;
                          </label>
                          <input
                            _ngcontent-serverapp-c111
                            type="number"
                            className="form-control ng-untouched ng-pristine ng-valid"
                          />
                        </div>
                        <div
                          _ngcontent-serverapp-c111
                          className="form-group margrp"
                        >
                          <label
                            _ngcontent-serverapp-c111
                            htmlFor="new"
                            style={{ "padding-top": "10px" }}
                          >
                            Set Max Limit : &nbsp;
                          </label>
                          <input
                            _ngcontent-serverapp-c111
                            type="number"
                            className="form-control ng-untouched ng-pristine ng-valid"
                          />
                        </div>
                      </div>
                      <div _ngcontent-serverapp-c111 className="modal-footer">
                        <div
                          _ngcontent-serverapp-c111
                          className="btn_box"
                          style={{ "padding-top": "5px" }}
                        >
                          <button
                            _ngcontent-serverapp-c111
                            id="changeStatusBtn"
                            className="btn-send"
                          >
                            {" "}
                            OK{" "}
                          </button>
                          <button
                            _ngcontent-serverapp-c111
                            id="changeStatusBtn"
                            className="btn-send"
                          >
                            {" "}
                            Cancel{" "}
                          </button>
                        </div>
                      </div>
                      <hr _ngcontent-serverapp-c111 />
                      <div
                        _ngcontent-serverapp-c111
                        className="table-responsive data-table"
                      >
                        <table
                          _ngcontent-serverapp-c111
                          id="table01"
                          className="table01"
                        >
                          <tbody _ngcontent-serverapp-c111>
                            <tr _ngcontent-serverapp-c111>
                              <th _ngcontent-serverapp-c111 className="align-C">
                                User Name
                              </th>
                              <th _ngcontent-serverapp-c111 className="align-C">
                                Loss
                              </th>
                              <th _ngcontent-serverapp-c111 className="align-C">
                                Currency
                              </th>
                              <th _ngcontent-serverapp-c111 className="align-C">
                                Multiplier
                              </th>
                              <th _ngcontent-serverapp-c111 className="align-C">
                                Max Limit
                              </th>
                            </tr>
                          </tbody>
                          <tbody _ngcontent-serverapp-c111 id="content"></tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </app-modal>
              <app-modal _ngcontent-serverapp-c111 _nghost-serverapp-c43>
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

                    <div _ngcontent-serverapp-c111 className="modal-header">
                      <h3 _ngcontent-serverapp-c111> Deposit </h3>
                      <h2 _ngcontent-serverapp-c111>
                        {" "}
                        : &nbsp;{" "}
                        <i
                          _ngcontent-serverapp-c111
                          className="fas fa-user-alt"
                          style={{ "font-size": "15px" }}
                        />{" "}
                        ()
                      </h2>
                    </div>
                    <div _ngcontent-serverapp-c111 className="modal-content">
                      <div _ngcontent-serverapp-c111 className="domain_id">
                        <form
                          _ngcontent-serverapp-c111
                          noValidate
                          data-vv-scope="userdepositeMDL"
                          className="ng-invalid ng-dirty ng-touched"
                        >
                          <div
                            _ngcontent-serverapp-c111
                            className="col-8 form-group-feedback form-group-feedback-right"
                          >
                            <div _ngcontent-serverapp-c111 className="margrp2">
                              <label
                                _ngcontent-serverapp-c111
                                htmlFor="new"
                                style={{ "padding-top": "10px" }}
                              >
                                Amount : &nbsp;
                              </label>
                              <input
                                _ngcontent-serverapp-c111
                                formcontrolname="amount"
                                numberonly
                                type="number"
                                className="form-control ng-untouched ng-pristine ng-invalid"
                                placeholder="Amount"
                              />
                            </div>
                            <div _ngcontent-serverapp-c111 className="margrp2">
                              <label
                                _ngcontent-serverapp-c111
                                htmlFor="new"
                                style={{ "padding-top": "10px" }}
                              >
                                Remark : &nbsp;
                              </label>
                              <textarea
                                _ngcontent-serverapp-c111
                                name="userDipositeremark"
                                aria-required="true"
                                aria-invalid="false"
                                formcontrolname="remark"
                                className="form-control remark ng-untouched ng-pristine ng-valid"
                                placeholder="Remark"
                                defaultValue={""}
                              />
                            </div>
                            <div _ngcontent-serverapp-c111 className="margrp2">
                              <label
                                _ngcontent-serverapp-c111
                                htmlFor="new"
                                style={{ "padding-top": "10px" }}
                              >
                                Password : &nbsp;
                              </label>
                              <input
                                _ngcontent-serverapp-c111
                                name="userDipositempassword"
                                type="Password"
                                formcontrolname="password"
                                aria-required="true"
                                aria-invalid="false"
                                className="form-control ng-dirty ng-valid ng-touched"
                                placeholder="Password"
                              />
                            </div>
                          </div>
                          <div
                            _ngcontent-serverapp-c111
                            className="modal-footer"
                          >
                            <div
                              _ngcontent-serverapp-c111
                              className="btn_box"
                              style={{ "padding-top": "5px" }}
                            >
                              <button
                                _ngcontent-serverapp-c111
                                id="changeStatusBtn"
                                className="btn-send"
                              >
                                {" "}
                                Deposit{" "}
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </app-modal>
              <app-modal _ngcontent-serverapp-c111 _nghost-serverapp-c43>
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

                    <div _ngcontent-serverapp-c111 className="modal-header">
                      <h3 _ngcontent-serverapp-c111> Withdrawal </h3>
                      <h2 _ngcontent-serverapp-c111>
                        {" "}
                        : &nbsp;{" "}
                        <i
                          _ngcontent-serverapp-c111
                          className="fas fa-user-alt"
                          style={{ "font-size": "15px" }}
                        />{" "}
                        ()
                      </h2>
                    </div>
                    <div _ngcontent-serverapp-c111 className="modal-content">
                      <div _ngcontent-serverapp-c111 className="domain_id">
                        <form
                          _ngcontent-serverapp-c111
                          noValidate
                          data-vv-scope="userdepositeMDL"
                          className="ng-invalid ng-dirty ng-touched"
                        >
                          <div
                            _ngcontent-serverapp-c111
                            className="col-8 form-group-feedback form-group-feedback-right"
                          >
                            <div _ngcontent-serverapp-c111 className="margrp2">
                              <label
                                _ngcontent-serverapp-c111
                                htmlFor="new"
                                style={{ "padding-top": "10px" }}
                              >
                                Amount: &nbsp;
                              </label>
                              <input
                                _ngcontent-serverapp-c111
                                formcontrolname="amount"
                                numberonly
                                type="number"
                                className="form-control ng-untouched ng-pristine ng-invalid"
                                placeholder="Amount"
                              />
                            </div>
                            <div _ngcontent-serverapp-c111 className="margrp2">
                              <label
                                _ngcontent-serverapp-c111
                                htmlFor="new"
                                style={{ "padding-top": "10px" }}
                              >
                                {" "}
                                Remark: &nbsp;
                              </label>
                              <textarea
                                _ngcontent-serverapp-c111
                                name="userDipositeremark"
                                aria-required="true"
                                aria-invalid="false"
                                formcontrolname="remark"
                                className="form-control remark ng-untouched ng-pristine ng-valid"
                                placeholder="Remark"
                                defaultValue={""}
                              />
                            </div>
                            <div _ngcontent-serverapp-c111 className="margrp2">
                              <label
                                _ngcontent-serverapp-c111
                                htmlFor="new"
                                style={{ "padding-top": "10px" }}
                              >
                                {" "}
                                Password : &nbsp;
                              </label>
                              <input
                                _ngcontent-serverapp-c111
                                name="userDipositempassword"
                                type="Password"
                                formcontrolname="password"
                                aria-required="true"
                                aria-invalid="false"
                                className="form-control ng-dirty ng-valid ng-touched"
                                placeholder="Password"
                              />
                            </div>
                          </div>
                          <div
                            _ngcontent-serverapp-c111
                            className="modal-footer"
                          >
                            <div
                              _ngcontent-serverapp-c111
                              className="btn_box"
                              style={{ "padding-top": "5px" }}
                            >
                              <button
                                _ngcontent-serverapp-c111
                                id="changeStatusBtn"
                                className="btn-send"
                              >
                                {" "}
                                Withdrawal{" "}
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </app-modal>
              <app-modal _ngcontent-serverapp-c111 _nghost-serverapp-c43>
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

                    <div _ngcontent-serverapp-c111 className="modal-header">
                      <h2 _ngcontent-serverapp-c111>
                        {" "}
                        &nbsp;{" "}
                        <i
                          _ngcontent-serverapp-c111
                          className="fas fa-user-alt"
                          style={{ "font-size": "14px" }}
                        />{" "}
                        (){" "}
                      </h2>
                    </div>
                    <div _ngcontent-serverapp-c111 className="modal-content">
                      <div _ngcontent-serverapp-c111 className="grid">
                        <div
                          _ngcontent-serverapp-c111
                          style={{ display: "flex", "padding-top": "10px" }}
                        >
                          <h5 _ngcontent-serverapp-c111 className="padleft">
                            {" "}
                            To allow LCBD1 flag :{" "}
                          </h5>
                          <div
                            _ngcontent-serverapp-c111
                            className="form-group margrp1"
                          ></div>
                        </div>
                        <hr _ngcontent-serverapp-c111 />
                        <h5 _ngcontent-serverapp-c111 className="padleft">
                          {" "}
                          To allow B2C:{" "}
                        </h5>
                        <div
                          _ngcontent-serverapp-c111
                          className="form-group margrp1"
                        >
                          <label
                            _ngcontent-serverapp-c111
                            htmlFor="comm1"
                            className="compad"
                          >
                            Set Comm
                          </label>
                          <input
                            _ngcontent-serverapp-c111
                            type="number"
                            id="comm1"
                            className="form-control ng-untouched ng-pristine ng-valid"
                          />
                          <button
                            _ngcontent-serverapp-c111
                            className="btn btn-secondary"
                          >
                            Add B2C Domain
                          </button>
                        </div>
                        <hr _ngcontent-serverapp-c111 />
                        <h5 _ngcontent-serverapp-c111 className="padleft">
                          {" "}
                          To add 1st deposit commssion :
                        </h5>
                        <div
                          _ngcontent-serverapp-c111
                          className="form-group margrp1"
                        >
                          <label
                            _ngcontent-serverapp-c111
                            htmlFor="comm2"
                            className="compad"
                          >
                            Set Comm
                          </label>
                          <input
                            _ngcontent-serverapp-c111
                            type="number"
                            id="comm2"
                            className="form-control ng-untouched ng-pristine ng-valid"
                          />
                          <button
                            _ngcontent-serverapp-c111
                            className="btn btn-secondary"
                          >
                            Add Deposit comm
                          </button>
                        </div>
                        <hr _ngcontent-serverapp-c111 />
                        <div
                          _ngcontent-serverapp-c111
                          className="form-group margrp1"
                        >
                          <button
                            _ngcontent-serverapp-c111
                            className="btn btn-secondary"
                          >
                            ALL Deposit comm
                          </button>
                        </div>
                        <hr _ngcontent-serverapp-c111 />
                      </div>
                    </div>
                  </div>
                </div>
              </app-modal>
              <app-modal _ngcontent-serverapp-c111 _nghost-serverapp-c43>
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

                    <div _ngcontent-serverapp-c111 className="modal-header">
                      <h3 _ngcontent-serverapp-c111>Confirm Domain</h3>
                    </div>
                    <h5 _ngcontent-serverapp-c111>
                      <i
                        _ngcontent-serverapp-c111
                        className="fa fa-globe"
                        style={{ "font-size": "18px" }}
                      />{" "}
                    </h5>
                    <div
                      _ngcontent-serverapp-c111
                      className="modal-content mdclass"
                      style={{ "box-shadow": "none" }}
                    >
                      <p _ngcontent-serverapp-c111>
                        {" "}
                        Are you sure you want to delete this domain{" "}
                      </p>
                    </div>
                    <ul _ngcontent-serverapp-c111 className="btn-wrap">
                      <li _ngcontent-serverapp-c111>
                        <button _ngcontent-serverapp-c111 className="btn">
                          Cancel
                        </button>
                      </li>
                      <li _ngcontent-serverapp-c111>
                        <button
                          _ngcontent-serverapp-c111
                          id="Btn"
                          type="submit"
                          className="btn-send"
                          style={{ width: "84px" }}
                        >
                          {" "}
                          Delete{" "}
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </app-modal>
              <app-modal _ngcontent-serverapp-c111 _nghost-serverapp-c43>
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

                    <div _ngcontent-serverapp-c111 className="modal-header">
                      <h3 _ngcontent-serverapp-c111>visitorId</h3>
                    </div>
                    <div
                      _ngcontent-serverapp-c111
                      className="modal-content mdclass"
                      style={{ "box-shadow": "none" }}
                    >
                      <p _ngcontent-serverapp-c111 className="space-visitor">
                        {" "}
                        false{" "}
                        <a
                          _ngcontent-serverapp-c111
                          id="clip"
                          className="copytoclip"
                        >
                          <i
                            _ngcontent-serverapp-c111
                            className="fa fa-clone"
                          />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </app-modal>
              <app-modal _ngcontent-serverapp-c111 _nghost-serverapp-c43>
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

                    <h3 _ngcontent-serverapp-c111 style={{ margin: "0" }}>
                      Exposure Information
                    </h3>
                    <div _ngcontent-serverapp-c111>
                      <div
                        _ngcontent-serverapp-c111
                        className="modal-body"
                        style={{ padding: "10px 0px 0px 0px" }}
                      >
                        <section
                          _ngcontent-serverapp-c111
                          className="panel panel-default"
                        >
                          <input
                            _ngcontent-serverapp-c111
                            type="hidden"
                            id="cp_UserId"
                            required
                            className="text-right"
                          />
                          <div
                            _ngcontent-serverapp-c111
                            className="panel-body"
                            style={{ padding: "0" }}
                          >
                            <div
                              _ngcontent-serverapp-c111
                              id="DataTables_Table_0_wrapper"
                              className="dataTables_wrapper form-inline dt-bootstrap no-footer"
                              style={{
                                "max-height": "400px",
                                overflow: "auto",
                              }}
                            >
                              <table
                                _ngcontent-serverapp-c111
                                id="DataTables_Table_0"
                                role="grid"
                                aria-describedby="DataTables_Table_0_info"
                                className="table-s tableboreder"
                              >
                                <thead _ngcontent-serverapp-c111>
                                  <tr _ngcontent-serverapp-c111 role="row">
                                    <th
                                      _ngcontent-serverapp-c111
                                      className="align-L"
                                    >
                                      Match Name
                                    </th>
                                    <th
                                      _ngcontent-serverapp-c111
                                      className="align-L"
                                    >
                                      Market/FancyName
                                    </th>
                                    <th
                                      _ngcontent-serverapp-c111
                                      className="align-L"
                                    >
                                      SourceId
                                    </th>
                                    <th
                                      _ngcontent-serverapp-c111
                                      className="align-L"
                                    >
                                      Exposure
                                    </th>
                                  </tr>
                                </thead>
                              </table>
                            </div>
                          </div>
                        </section>
                      </div>
                      <div
                        _ngcontent-serverapp-c111
                        style={{ display: "flex", "place-content": "end" }}
                      >
                        <button
                          _ngcontent-serverapp-c111
                          type="button"
                          className="btn-send"
                          style={{ width: "80px", margin: "0" }}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </app-modal>
              <app-modal
                _ngcontent-serverapp-c111
                style={{ top: "32px!important", width: "564px !important" }}
                _nghost-serverapp-c43
              >
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

                    <h2 _ngcontent-serverapp-c111> User Name :</h2>
                    <h3 _ngcontent-serverapp-c111>Block Market</h3>
                    <div
                      _ngcontent-serverapp-c111
                      id="modalid"
                      className="modal-content"
                      style={{
                        "max-height": "400px",
                        "overflow-y": "scroll",
                      }}
                    >
                      <div _ngcontent-serverapp-c111 className="status_id">
                        <table
                          _ngcontent-serverapp-c111
                          id="table_log"
                          className="table01"
                        >
                          <thead _ngcontent-serverapp-c111>
                            <tr _ngcontent-serverapp-c111>
                              <th
                                _ngcontent-serverapp-c111
                                width="15%"
                                className="align-L"
                              >
                                S.No.
                              </th>
                              <th _ngcontent-serverapp-c111 width="18%">
                                Name
                              </th>
                              <th _ngcontent-serverapp-c111 width="18%">
                                Status
                              </th>
                              <th _ngcontent-serverapp-c111 width="16%">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody _ngcontent-serverapp-c111></tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </app-modal>
              <app-modal _ngcontent-serverapp-c111 _nghost-serverapp-c43>
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

                    <h3 _ngcontent-serverapp-c111>
                      <strong _ngcontent-serverapp-c111>User Name: </strong>
                    </h3>
                    <div _ngcontent-serverapp-c111 className="wrap-refer_edit">
                      <div _ngcontent-serverapp-c111>
                        <dl _ngcontent-serverapp-c111>
                          <dt _ngcontent-serverapp-c111>
                            <strong _ngcontent-serverapp-c111 className="strng">
                              <b _ngcontent-serverapp-c111 /> will get ( %)
                              commission on every agent referal{" "}
                            </strong>
                            <hr _ngcontent-serverapp-c111 className="hrcls" />
                          </dt>
                          <dt _ngcontent-serverapp-c111 />
                          <dd
                            _ngcontent-serverapp-c111
                            style={{ "padding-left": "109px" }}
                          />
                        </dl>
                        <dl _ngcontent-serverapp-c111>
                          <dt _ngcontent-serverapp-c111> Agent commission </dt>
                          <dd
                            _ngcontent-serverapp-c111
                            style={{ "padding-left": "109px" }}
                          >
                            <input
                              _ngcontent-serverapp-c111
                              type="number"
                              style={{ width: "85%" }}
                              placeholder="Enter commission"
                              className="ng-untouched ng-pristine ng-valid"
                            />
                            <a
                              _ngcontent-serverapp-c111
                              className="btn tiptool"
                            >
                              <i
                                _ngcontent-serverapp-c111
                                className="fa fa-info-circle"
                              />
                            </a>
                          </dd>
                        </dl>
                        <dl _ngcontent-serverapp-c111>
                          <dt _ngcontent-serverapp-c111>
                            {" "}
                            Agent referral Comm{" "}
                          </dt>
                          <dd
                            _ngcontent-serverapp-c111
                            style={{ "padding-left": "109px" }}
                          >
                            <input
                              _ngcontent-serverapp-c111
                              type="number"
                              style={{ width: "85%" }}
                              placeholder="Enter commission"
                              className="ng-untouched ng-pristine ng-valid"
                            />
                            <a
                              _ngcontent-serverapp-c111
                              className="btn tiptool"
                            >
                              <i
                                _ngcontent-serverapp-c111
                                className="fa fa-info-circle"
                              />
                            </a>
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <ul _ngcontent-serverapp-c111 className="btn-wrap">
                      <li _ngcontent-serverapp-c111>
                        <button
                          _ngcontent-serverapp-c111
                          id="changeCreditReferenceBtn"
                          type="submit"
                          className="btn-send"
                        >
                          {" "}
                          Submit{" "}
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </app-modal>
              <app-modal _ngcontent-serverapp-c111 _nghost-serverapp-c43>
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

                    <h3 _ngcontent-serverapp-c111>
                      <strong _ngcontent-serverapp-c111>All Agents</strong>
                    </h3>
                    <div _ngcontent-serverapp-c111 className="wrap-refer_edit">
                      <div _ngcontent-serverapp-c111>
                        <dl _ngcontent-serverapp-c111>
                          <dd
                            _ngcontent-serverapp-c111
                            style={{ "padding-left": "109px" }}
                          />
                        </dl>
                        <dl _ngcontent-serverapp-c111>
                          <dt
                            _ngcontent-serverapp-c111
                            style={{ "margin-right": "9px" }}
                          >
                            All agent commission.{" "}
                          </dt>
                          <dd
                            _ngcontent-serverapp-c111
                            style={{ "padding-left": "109px" }}
                          >
                            <input
                              _ngcontent-serverapp-c111
                              type="number"
                              style={{ width: "85%" }}
                              placeholder="Enter commission"
                              className="ng-untouched ng-pristine ng-valid"
                            />
                            <a
                              _ngcontent-serverapp-c111
                              className="btn tiptool"
                            >
                              <i
                                _ngcontent-serverapp-c111
                                className="fa fa-info-circle"
                              />
                            </a>
                          </dd>
                        </dl>
                        <dl _ngcontent-serverapp-c111>
                          <dt _ngcontent-serverapp-c111>
                            All agent referal comm.{" "}
                          </dt>
                          <dd
                            _ngcontent-serverapp-c111
                            style={{ "padding-left": "109px" }}
                          >
                            <input
                              _ngcontent-serverapp-c111
                              type="number"
                              style={{ width: "85%" }}
                              placeholder="Enter commission"
                              className="ng-untouched ng-pristine ng-valid"
                            />
                            <a
                              _ngcontent-serverapp-c111
                              className="btn tiptool"
                            >
                              <i
                                _ngcontent-serverapp-c111
                                className="fa fa-info-circle"
                              />
                            </a>
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <ul _ngcontent-serverapp-c111 className="btn-wrap">
                      <li _ngcontent-serverapp-c111>
                        <button
                          _ngcontent-serverapp-c111
                          id="changeCreditReferenceBtn"
                          type="submit"
                          className="btn-send"
                        >
                          {" "}
                          Submit{" "}
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </app-modal>
              <app-modal _ngcontent-serverapp-c111 _nghost-serverapp-c43>
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

                    <h3 _ngcontent-serverapp-c111>
                      <strong _ngcontent-serverapp-c111>
                        User Name : [object Object]
                      </strong>
                    </h3>
                    <div _ngcontent-serverapp-c111 className="wrap-refer_edit">
                      <div _ngcontent-serverapp-c111>
                        <dl _ngcontent-serverapp-c111>
                          <dd
                            _ngcontent-serverapp-c111
                            style={{ "padding-left": "109px" }}
                          />
                        </dl>
                        <dl _ngcontent-serverapp-c111>
                          <dt _ngcontent-serverapp-c111>Commision </dt>
                          <dd
                            _ngcontent-serverapp-c111
                            style={{ "padding-left": "109px" }}
                          >
                            <input
                              _ngcontent-serverapp-c111
                              type="number"
                              style={{ width: "85%" }}
                              placeholder="Enter commission"
                              className="ng-untouched ng-pristine ng-valid"
                            />
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <ul _ngcontent-serverapp-c111 className="btn-wrap">
                      <li _ngcontent-serverapp-c111>
                        <button
                          _ngcontent-serverapp-c111
                          id="changeCreditReferenceBtn"
                          type="submit"
                          className="btn-send"
                        >
                          {" "}
                          Submit{" "}
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </app-modal>
              <app-modal _ngcontent-serverapp-c111 _nghost-serverapp-c43>
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

                    <div _ngcontent-serverapp-c111 className="modal-header">
                      <h3 _ngcontent-serverapp-c111>Set Cash Back </h3>
                    </div>
                    <div _ngcontent-serverapp-c111 className="modal-content">
                      <div _ngcontent-serverapp-c111 className="domain_id">
                        <div
                          _ngcontent-serverapp-c111
                          className="form-group margrp"
                        >
                          <label
                            _ngcontent-serverapp-c111
                            htmlFor="new"
                            style={{ "padding-top": "10px" }}
                          >
                            Set CashBack : &nbsp;
                          </label>
                          <input
                            _ngcontent-serverapp-c111
                            type="number"
                            className="form-control ng-untouched ng-pristine ng-valid"
                          />
                        </div>
                      </div>
                      <div _ngcontent-serverapp-c111 className="domain_id">
                        <div
                          _ngcontent-serverapp-c111
                          className="form-group margrp"
                        >
                          <label
                            _ngcontent-serverapp-c111
                            htmlFor="new"
                            style={{ "padding-top": "10px" }}
                          >
                            Set Amount : &nbsp;
                          </label>
                          <input
                            _ngcontent-serverapp-c111
                            type="number"
                            className="form-control ng-untouched ng-pristine ng-valid"
                          />
                        </div>
                      </div>
                      <div _ngcontent-serverapp-c111 className="domain_id">
                        <div
                          _ngcontent-serverapp-c111
                          className="form-group margrp"
                        >
                          <label
                            _ngcontent-serverapp-c111
                            htmlFor="new"
                            style={{ "padding-top": "10px" }}
                          >
                            Set Limit : &nbsp;
                          </label>
                          <input
                            _ngcontent-serverapp-c111
                            type="number"
                            className="form-control ng-untouched ng-pristine ng-valid"
                          />
                        </div>
                      </div>
                      <div _ngcontent-serverapp-c111 className="status_id">
                        <table
                          _ngcontent-serverapp-c111
                          id="table_log"
                          className="table01"
                        >
                          <thead _ngcontent-serverapp-c111>
                            <tr _ngcontent-serverapp-c111>
                              <th _ngcontent-serverapp-c111 className="align-L">
                                Name
                              </th>
                              <th _ngcontent-serverapp-c111 className="align-r">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody _ngcontent-serverapp-c111>
                            <tr _ngcontent-serverapp-c111>
                              <td _ngcontent-serverapp-c111 className="align-L">
                                <span
                                  _ngcontent-serverapp-c111
                                  className="red;"
                                >
                                  Weekly
                                </span>
                              </td>
                              <td
                                _ngcontent-serverapp-c111
                                title="Status"
                                className="align-r"
                              >
                                <label
                                  _ngcontent-serverapp-c111
                                  className="xyz"
                                >
                                  <input
                                    _ngcontent-serverapp-c111
                                    type="checkbox"
                                    className="ng-untouched ng-pristine ng-valid"
                                  />
                                  <span
                                    _ngcontent-serverapp-c111
                                    className="slider round"
                                  />
                                </label>
                              </td>
                            </tr>
                            <tr _ngcontent-serverapp-c111>
                              <td _ngcontent-serverapp-c111 className="align-L">
                                <span
                                  _ngcontent-serverapp-c111
                                  className="red;"
                                >
                                  {" "}
                                  Monthly
                                </span>
                              </td>
                              <td
                                _ngcontent-serverapp-c111
                                title="Status"
                                className="align-r"
                              >
                                <label
                                  _ngcontent-serverapp-c111
                                  className="xyz"
                                >
                                  <input
                                    _ngcontent-serverapp-c111
                                    type="checkbox"
                                    className="ng-untouched ng-pristine ng-valid"
                                  />
                                  <span
                                    _ngcontent-serverapp-c111
                                    className="slider round"
                                  />
                                </label>
                              </td>
                            </tr>
                            <tr _ngcontent-serverapp-c111>
                              <td _ngcontent-serverapp-c111 className="align-L">
                                <span
                                  _ngcontent-serverapp-c111
                                  className="red;"
                                >
                                  Cut From WL
                                </span>
                              </td>
                              <td
                                _ngcontent-serverapp-c111
                                title="Status"
                                className="align-r"
                              >
                                <label
                                  _ngcontent-serverapp-c111
                                  className="xyz"
                                >
                                  <input
                                    _ngcontent-serverapp-c111
                                    type="checkbox"
                                    className="ng-untouched ng-pristine ng-valid"
                                  />
                                  <span
                                    _ngcontent-serverapp-c111
                                    className="slider round"
                                  />
                                </label>
                              </td>
                            </tr>
                            <tr _ngcontent-serverapp-c111>
                              <td _ngcontent-serverapp-c111 className="align-L">
                                <span
                                  _ngcontent-serverapp-c111
                                  className="red;"
                                >
                                  Cut From AG
                                </span>
                              </td>
                              <td
                                _ngcontent-serverapp-c111
                                title="Status"
                                className="align-r"
                              >
                                <label
                                  _ngcontent-serverapp-c111
                                  className="xyz"
                                >
                                  <input
                                    _ngcontent-serverapp-c111
                                    type="checkbox"
                                    className="ng-untouched ng-pristine ng-valid"
                                  />
                                  <span
                                    _ngcontent-serverapp-c111
                                    className="slider round"
                                  />
                                </label>
                              </td>
                            </tr>
                            <tr _ngcontent-serverapp-c111>
                              <td _ngcontent-serverapp-c111 className="align-L">
                                <span
                                  _ngcontent-serverapp-c111
                                  className="red;"
                                >
                                  {" "}
                                  Special
                                </span>
                              </td>
                              <td
                                _ngcontent-serverapp-c111
                                title="Status"
                                className="align-r"
                              >
                                <label
                                  _ngcontent-serverapp-c111
                                  className="xyz"
                                >
                                  <input
                                    _ngcontent-serverapp-c111
                                    type="checkbox"
                                    className="ng-untouched ng-pristine ng-valid"
                                  />
                                  <span
                                    _ngcontent-serverapp-c111
                                    className="slider round"
                                  />
                                </label>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div _ngcontent-serverapp-c111 className="modal-footer">
                        <div
                          _ngcontent-serverapp-c111
                          className="btn_box"
                          style={{ "padding-top": "5px" }}
                        >
                          <button
                            _ngcontent-serverapp-c111
                            id="changeStatusBtn"
                            className="btn-send"
                          >
                            {" "}
                            OK{" "}
                          </button>
                          <button
                            _ngcontent-serverapp-c111
                            id="changeStatusBtn"
                            className="btn-send"
                          >
                            {" "}
                            Cancel{" "}
                          </button>
                        </div>
                      </div>
                      <hr _ngcontent-serverapp-c111 />
                      <div
                        _ngcontent-serverapp-c111
                        className="table-responsive data-table"
                      >
                        <table
                          _ngcontent-serverapp-c111
                          id="table01"
                          className="table01"
                        >
                          <tbody _ngcontent-serverapp-c111>
                            <tr _ngcontent-serverapp-c111>
                              <th _ngcontent-serverapp-c111 className="align-C">
                                Cash back%
                              </th>
                              <th _ngcontent-serverapp-c111 className="align-C">
                                Amount
                              </th>
                              <th _ngcontent-serverapp-c111 className="align-C">
                                Limit
                              </th>
                              <th _ngcontent-serverapp-c111 className="align-C">
                                CutFromAG
                              </th>
                              <th _ngcontent-serverapp-c111 className="align-C">
                                CutFromWL
                              </th>
                              <th _ngcontent-serverapp-c111 className="align-C">
                                Monthly
                              </th>
                              <th _ngcontent-serverapp-c111 className="align-C">
                                Weekly
                              </th>
                              <th _ngcontent-serverapp-c111 className="align-C">
                                {" "}
                                Special
                              </th>
                            </tr>
                          </tbody>
                          <tbody _ngcontent-serverapp-c111 id="content">
                            <tr
                              _ngcontent-serverapp-c111
                              className="ng-star-inserted"
                            >
                              <td
                                _ngcontent-serverapp-c111
                                colSpan={6}
                                className="align-C"
                              >
                                {" "}
                                No Data
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </app-modal>
              <app-modal _ngcontent-serverapp-c111 _nghost-serverapp-c43>
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

                    <div _ngcontent-serverapp-c111 className="modal-header">
                      <h3 _ngcontent-serverapp-c111>Set Cash Back</h3>
                    </div>
                    <div
                      _ngcontent-serverapp-c111
                      className="modal-content cashback-modal"
                    >
                      <div _ngcontent-serverapp-c111 className="toggle-box">
                        <div _ngcontent-serverapp-c111 className="toggle-row">
                          <span _ngcontent-serverapp-c111>Weekly</span>
                          <input
                            _ngcontent-serverapp-c111
                            type="checkbox"
                            className="ng-untouched ng-pristine ng-valid"
                          />
                        </div>
                        <div _ngcontent-serverapp-c111 className="toggle-row">
                          <span _ngcontent-serverapp-c111>Monthly</span>
                          <input
                            _ngcontent-serverapp-c111
                            type="checkbox"
                            className="ng-untouched ng-pristine ng-valid"
                          />
                        </div>
                        <div _ngcontent-serverapp-c111 className="toggle-row">
                          <span _ngcontent-serverapp-c111>Cut From WL</span>
                          <input
                            _ngcontent-serverapp-c111
                            type="checkbox"
                            className="ng-untouched ng-pristine ng-valid"
                          />
                        </div>
                        <div _ngcontent-serverapp-c111 className="toggle-row">
                          <span _ngcontent-serverapp-c111>Cut From AG</span>
                          <input
                            _ngcontent-serverapp-c111
                            type="checkbox"
                            className="ng-untouched ng-pristine ng-valid"
                          />
                        </div>
                        <div _ngcontent-serverapp-c111 className="toggle-row">
                          <span _ngcontent-serverapp-c111>Cut from AD</span>
                          <input
                            _ngcontent-serverapp-c111
                            type="checkbox"
                            className="ng-untouched ng-pristine ng-valid"
                          />
                        </div>
                      </div>
                      <div _ngcontent-serverapp-c111 className="tier-box">
                        <table
                          _ngcontent-serverapp-c111
                          className="table tier-table"
                        >
                          <thead _ngcontent-serverapp-c111>
                            <tr _ngcontent-serverapp-c111>
                              <th _ngcontent-serverapp-c111>Tier</th>
                              <th _ngcontent-serverapp-c111>Min Stake</th>
                              <th _ngcontent-serverapp-c111>Min Loss</th>
                              <th _ngcontent-serverapp-c111>Cashback %</th>
                              <th _ngcontent-serverapp-c111>Max Cashback</th>
                            </tr>
                          </thead>
                          <tbody _ngcontent-serverapp-c111 />
                        </table>
                      </div>
                      <div
                        _ngcontent-serverapp-c111
                        className="modal-footer right"
                      >
                        <button
                          _ngcontent-serverapp-c111
                          className="btn btn-success"
                        >
                          {" "}
                          OK{" "}
                        </button>
                        <button
                          _ngcontent-serverapp-c111
                          className="btn btn-secondary"
                        >
                          {" "}
                          Cancel{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </app-modal>
              <div
                _ngcontent-serverapp-c111
                id="confirmationmodal"
                role="dialog"
                data-backdrop="static"
                data-keyboard="false"
                aria-modal="true"
                className="modal"
                style={{ display: "none" }}
              >
                <div
                  _ngcontent-serverapp-c111
                  className="modal-md modal-dialog-scrollable pop_box1"
                >
                  <span _ngcontent-serverapp-c111 tabIndex={0} />
                  <div
                    _ngcontent-serverapp-c111
                    id="modal_content_"
                    tabIndex={-1}
                    className="modal-content"
                  >
                    <header
                      _ngcontent-serverapp-c111
                      id="modal_header_"
                      className="modal-header bg-success top"
                    >
                      <h4
                        _ngcontent-serverapp-c111
                        id="popup_title"
                        className="modal-title text-uppercase text-white header"
                        style={{
                          "font-weight": "bold",
                          "font-family": "Tahoma, Helvetica, sans-serif",
                        }}
                      >
                        {" "}
                        Block/Un-Block Sport
                      </h4>
                    </header>
                    <div
                      _ngcontent-serverapp-c111
                      id="modal_body_"
                      className="modal-body"
                    >
                      <div
                        _ngcontent-serverapp-c111
                        className="form-group"
                        style={{
                          display: "table",
                          width: "100%",
                          margin: "5px 0px",
                        }}
                      >
                        <div
                          _ngcontent-serverapp-c111
                          role="alert"
                          aria-live="polite"
                          aria-atomic="true"
                          style={{ margin: "0" }}
                        >
                          <div _ngcontent-serverapp-c111 direction="right">
                            <span
                              _ngcontent-serverapp-c111
                              id="popup_msg"
                              style={{ "font-size": "15px" }}
                            >
                              {" "}
                              You Want to Block This Game?
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        _ngcontent-serverapp-c111
                        className="col-lg-12 col-12 text-right"
                        style={{
                          display: "flex",
                          "place-content": "center",
                          "margin-top": "20px",
                        }}
                      >
                        <button
                          _ngcontent-serverapp-c111
                          type="button"
                          id="popup_confirm"
                          data-dismiss="modal"
                          className="btn-send close_modal"
                          style={{ width: "100px", "margin-right": "12px" }}
                        >
                          <i
                            _ngcontent-serverapp-c111
                            className="fa fa-check-circle"
                          />{" "}
                          Confirm{" "}
                        </button>
                        <button
                          _ngcontent-serverapp-c111
                          type="submit"
                          data-dismiss="modal"
                          className="btn-send close_modal"
                          style={{ width: "100px" }}
                        >
                          <i
                            _ngcontent-serverapp-c111
                            className="fa fa-times-circle"
                          />{" "}
                          Cancel{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  <span _ngcontent-serverapp-c111 tabIndex={0} />
                </div>
              </div>
            </app-sub>
          </app-children>
        </div>
      </app-users-list>
    </Layout>
  );
};

export default Home;
