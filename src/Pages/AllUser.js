import React from "react";

const AllUser = () => {
  return (
  
      <app-searchuser _nghost-serverapp-c139 className="ng-star-inserted">
        <div _ngcontent-serverapp-c139 className="main_wrap">
          {/**/}
          <div _ngcontent-serverapp-c139 className="function-wrap">
            <div
              _ngcontent-serverapp-c139
              className="box"
              style={{ "background-color": "#e0e6e6", "line-height": "25px" }}
            >
              <div _ngcontent-serverapp-c139>
                <input
                  _ngcontent-serverapp-c139
                  type="text"
                  name="userId"
                  id="userId"
                  placeholder="Find member..."
                  className="search-input ng-untouched ng-pristine ng-valid"
                />
              </div>
              {/**/}
              <div _ngcontent-serverapp-c139 className="push">
                <button _ngcontent-serverapp-c139 className="btn-send">
                  Refresh
                </button>
              </div>
            </div>
          </div>
          <div _ngcontent-serverapp-c139 id="totalBox" className="total_box">
            <dl
              _ngcontent-serverapp-c139
              id="totalUsersDL"
              className="total_dl"
            >
              <dt _ngcontent-serverapp-c139>Total Users</dt>
              <dd _ngcontent-serverapp-c139 id="totalUsers">
                {" "}
                0 {/**/}
                {/**/}
                {/**/}
              </dd>
            </dl>
            <dl
              _ngcontent-serverapp-c139
              id="totalAdminDL"
              className="total_dl"
              style={{ display: "block" }}
            >
              <dt _ngcontent-serverapp-c139>Total Admin</dt>
              <dd _ngcontent-serverapp-c139 id="totalAdmin">
                {" "}
                0{" "}
              </dd>
            </dl>
            <dl
              _ngcontent-serverapp-c139
              id="totalPLayerDL"
              className="total_dl"
            >
              <dt _ngcontent-serverapp-c139>Total Players</dt>
              <dd _ngcontent-serverapp-c139 id="totalPLayer">
                {" "}
                0{" "}
              </dd>
            </dl>
            <dl
              _ngcontent-serverapp-c139
              id="totalOnlineDL"
              className="total_dl"
            >
              <dt _ngcontent-serverapp-c139>Online Users</dt>
              <dd _ngcontent-serverapp-c139 id="totalOnline">
                {" "}
                0{" "}
              </dd>
            </dl>
          </div>
        </div>
        <cdk-virtual-scroll-viewport
          _ngcontent-serverapp-c139
          itemsize={18}
          className="cdk-virtual-scroll-viewport cdk-virtual-scroll-orientation-vertical"
          style={{ height: "80vh" }}
        >
          <div
            className="cdk-virtual-scroll-content-wrapper"
            style={{
              "-webkit-transform": "translateY(0px)",
              "-ms-transform": "translateY(0px)",
              transform: "translateY(0px)",
            }}
          >
            <div _ngcontent-serverapp-c139 className="main_wrap">
              <div _ngcontent-serverapp-c139 className="agent_path">
                <div
                  _ngcontent-serverapp-c139
                  className="table-responsive data-table"
                >
                  <table _ngcontent-serverapp-c139 className="table01 table-pt">
                   <tbody>
                     <tr>
                        <th className="align-L sort_asc">Account</th>{" "}
                        <th className="align-L sort_asc">Account</th>{" "}
                        <th className="align-L sort_asc">Account</th>{" "}
                        <th className="align-L sort_asc">Account</th>{" "}
                        <th className="align-L sort_asc">Account</th>
                      </tr>
                   </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="cdk-virtual-scroll-spacer" />
        </cdk-virtual-scroll-viewport>
        <app-modal _ngcontent-serverapp-c139 _nghost-serverapp-c43>
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
              {/**/}
              <div _ngcontent-serverapp-c139 className="modal-header">
                <h3 _ngcontent-serverapp-c139>Change Status</h3>
              </div>
              <div _ngcontent-serverapp-c139 className="modal-content">
                <div _ngcontent-serverapp-c139 className="status_id">
                  <p _ngcontent-serverapp-c139 id="changeAccount">
                    <span
                      _ngcontent-serverapp-c139
                      className="Bdlevel lv_ premium"
                    />{" "}
                  </p>
                  <p _ngcontent-serverapp-c139 id="originalStatus">
                    <img
                      _ngcontent-serverapp-c139
                      src="assets/images/transparent.gif"
                    />{" "}
                  </p>
                </div>
                <div _ngcontent-serverapp-c139 className="white-wrap">
                  <ul
                    _ngcontent-serverapp-c139
                    id="statusBtn"
                    className="status_but"
                  >
                    <li _ngcontent-serverapp-c139>
                      <a
                        _ngcontent-serverapp-c139
                        id="activeBtn"
                        className="but_active"
                        disabled="false"
                      >
                        <img
                          _ngcontent-serverapp-c139
                          src="assets/images/transparent.gif"
                        />{" "}
                        active{" "}
                      </a>
                    </li>
                    <li _ngcontent-serverapp-c139>
                      <a
                        _ngcontent-serverapp-c139
                        id="suspendBtn"
                        className="but_suspend"
                        disabled="false"
                      >
                        <img
                          _ngcontent-serverapp-c139
                          src="assets/images/transparent.gif"
                        />{" "}
                        Suspend{" "}
                      </a>
                    </li>
                    <li _ngcontent-serverapp-c139>
                      <a
                        _ngcontent-serverapp-c139
                        id="lockedBtn"
                        className="but_locked"
                        disabled="false"
                      >
                        <img
                          _ngcontent-serverapp-c139
                          src="assets/images/transparent.gif"
                        />{" "}
                        Locked{" "}
                      </a>
                    </li>
                  </ul>
                </div>
                <div _ngcontent-serverapp-c139 className="modal-footer">
                  <form
                    _ngcontent-serverapp-c139
                    noValidate
                    className="btn_box inline-form ng-untouched ng-pristine ng-invalid"
                  >
                    <div _ngcontent-serverapp-c139 className="form_list">
                      <label _ngcontent-serverapp-c139>Password: </label>
                      <input
                        _ngcontent-serverapp-c139
                        id="changeStatusPassword"
                        type="password"
                        formcontrolname="password"
                        required
                        placeholder="Enter"
                        className="ng-untouched ng-pristine ng-invalid"
                      />
                    </div>
                    <div _ngcontent-serverapp-c139 className="btn_box">
                      <button
                        _ngcontent-serverapp-c139
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
        <app-modal _ngcontent-serverapp-c139 _nghost-serverapp-c43>
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
              {/**/}
              <div _ngcontent-serverapp-c139 className="modal-header">
                <h3 _ngcontent-serverapp-c139>Password</h3>
                {/**/}
              </div>
              <div _ngcontent-serverapp-c139 className="modal-content">
                <div _ngcontent-serverapp-c139 className="status_id">
                  <p _ngcontent-serverapp-c139 id="changeAccount">
                    <span
                      _ngcontent-serverapp-c139
                      className="Bdlevel lv_ premium"
                    />{" "}
                    <a
                      _ngcontent-serverapp-c139
                      id="clip"
                      className="copytoclip"
                    >
                      <i _ngcontent-serverapp-c139 className="fa fa-clone" />
                    </a>
                  </p>
                  <p _ngcontent-serverapp-c139 className="domainname"></p>
                  <p _ngcontent-serverapp-c139 id="originalStatus" />
                  <p _ngcontent-serverapp-c139>
                    {" "}
                    Not Available{" "}
                    <a
                      _ngcontent-serverapp-c139
                      id="clip"
                      className="copytoclip"
                    >
                      <i _ngcontent-serverapp-c139 className="fa fa-clone" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </app-modal>
        <app-modal _ngcontent-serverapp-c139 _nghost-serverapp-c43>
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
              {/**/}
              <div _ngcontent-serverapp-c139 className="modal-header">
                <h3 _ngcontent-serverapp-c139> Deposit </h3>
                <h2 _ngcontent-serverapp-c139>
                  <i
                    _ngcontent-serverapp-c139
                    className="fas fa-user-alt"
                    style={{ "font-size": "15px" }}
                  />{" "}
                  ()&nbsp; :
                </h2>
              </div>
              <div _ngcontent-serverapp-c139 className="modal-content">
                <div _ngcontent-serverapp-c139 className="domain_id">
                  <form
                    _ngcontent-serverapp-c139
                    noValidate
                    data-vv-scope="userdepositeMDL"
                    className="ng-invalid ng-dirty ng-touched"
                  >
                    <div
                      _ngcontent-serverapp-c139
                      className="col-8 form-group-feedback form-group-feedback-right"
                    >
                      <div _ngcontent-serverapp-c139 className="margrp2">
                        <label
                          _ngcontent-serverapp-c139
                          htmlFor="new"
                          style={{ "padding-top": "10px" }}
                        >
                          Amount : &nbsp;
                        </label>
                        <input
                          _ngcontent-serverapp-c139
                          formcontrolname="amount"
                          numberonly
                          type="number"
                          className="form-control ng-untouched ng-pristine ng-invalid"
                          placeholder="Amount"
                        />
                      </div>
                      {/**/}
                      <div _ngcontent-serverapp-c139 className="margrp2">
                        <label
                          _ngcontent-serverapp-c139
                          htmlFor="new"
                          style={{ "padding-top": "10px" }}
                        >
                          Remark : &nbsp;
                        </label>
                        <textarea
                          _ngcontent-serverapp-c139
                          name="userDipositeremark"
                          aria-required="true"
                          aria-invalid="false"
                          formcontrolname="remark"
                          className="form-control remark ng-untouched ng-pristine ng-valid"
                          placeholder="Remark"
                          defaultValue={""}
                        />
                      </div>
                      <div _ngcontent-serverapp-c139 className="margrp2">
                        <label
                          _ngcontent-serverapp-c139
                          htmlFor="new"
                          style={{ "padding-top": "10px" }}
                        >
                          {" "}
                          Password : &nbsp;
                        </label>
                        <input
                          _ngcontent-serverapp-c139
                          name="userDipositempassword"
                          type="Password"
                          formcontrolname="password"
                          aria-required="true"
                          aria-invalid="false"
                          className="form-control ng-dirty ng-valid ng-touched"
                          placeholder="Password"
                        />
                      </div>
                      {/**/}
                    </div>
                    <div _ngcontent-serverapp-c139 className="modal-footer">
                      <div
                        _ngcontent-serverapp-c139
                        className="btn_box"
                        style={{ "padding-top": "5px" }}
                      >
                        <button
                          _ngcontent-serverapp-c139
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
        <app-modal _ngcontent-serverapp-c139 _nghost-serverapp-c43>
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
              {/**/}
              <div _ngcontent-serverapp-c139 className="modal-header">
                <h3 _ngcontent-serverapp-c139> Withdrawal </h3>
                <h2 _ngcontent-serverapp-c139>
                  <i
                    _ngcontent-serverapp-c139
                    className="fas fa-user-alt"
                    style={{ "font-size": "15px" }}
                  />{" "}
                  ()&nbsp; :
                </h2>
              </div>
              <div _ngcontent-serverapp-c139 className="modal-content">
                <div _ngcontent-serverapp-c139 className="domain_id">
                  <form
                    _ngcontent-serverapp-c139
                    noValidate
                    data-vv-scope="userdepositeMDL"
                    className="ng-invalid ng-dirty ng-touched"
                  >
                    <div
                      _ngcontent-serverapp-c139
                      className="col-8 form-group-feedback form-group-feedback-right"
                    >
                      <div _ngcontent-serverapp-c139 className="margrp2">
                        <label
                          _ngcontent-serverapp-c139
                          htmlFor="new"
                          style={{ "padding-top": "10px" }}
                        >
                          {" "}
                          Amount : &nbsp;
                        </label>
                        <input
                          _ngcontent-serverapp-c139
                          formcontrolname="amount"
                          numberonly
                          type="number"
                          className="form-control ng-untouched ng-pristine ng-invalid"
                          placeholder="Amount"
                        />
                      </div>
                      <div _ngcontent-serverapp-c139 className="margrp2">
                        <label
                          _ngcontent-serverapp-c139
                          htmlFor="new"
                          style={{ "padding-top": "10px" }}
                        >
                          {" "}
                          Remark : &nbsp;
                        </label>
                        <textarea
                          _ngcontent-serverapp-c139
                          name="userDipositeremark"
                          aria-required="true"
                          aria-invalid="false"
                          formcontrolname="remark"
                          className="form-control remark ng-untouched ng-pristine ng-valid"
                          placeholder="Remark"
                          defaultValue={""}
                        />
                      </div>
                      <div _ngcontent-serverapp-c139 className="margrp2">
                        <label
                          _ngcontent-serverapp-c139
                          htmlFor="new"
                          style={{ "padding-top": "10px" }}
                        >
                          Password : &nbsp;
                        </label>
                        <input
                          _ngcontent-serverapp-c139
                          name="userDipositempassword"
                          type="Password"
                          formcontrolname="password"
                          aria-required="true"
                          aria-invalid="false"
                          className="form-control ng-dirty ng-valid ng-touched"
                          placeholder="Password"
                        />
                      </div>
                      {/**/}
                      {/**/}
                    </div>
                    <div _ngcontent-serverapp-c139 className="modal-footer">
                      <div
                        _ngcontent-serverapp-c139
                        className="btn_box"
                        style={{ "padding-top": "5px" }}
                      >
                        <button
                          _ngcontent-serverapp-c139
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
        <app-modal
          _ngcontent-serverapp-c139
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
              {/**/}
              <h2 _ngcontent-serverapp-c139> User Name :</h2>
              <h3 _ngcontent-serverapp-c139>Block Market</h3>
              <div
                _ngcontent-serverapp-c139
                id="modalid"
                className="modal-content"
                style={{ "max-height": "400px", "overflow-y": "scroll" }}
              >
                <div _ngcontent-serverapp-c139 className="status_id">
                  <table
                    _ngcontent-serverapp-c139
                    id="table_log"
                    className="table01"
                  >
                    <thead _ngcontent-serverapp-c139>
                      <tr _ngcontent-serverapp-c139>
                        <th
                          _ngcontent-serverapp-c139
                          width="15%"
                          className="align-L"
                        >
                          S.No.
                        </th>
                        <th _ngcontent-serverapp-c139 width="18%">
                          Name
                        </th>
                        <th _ngcontent-serverapp-c139 width="18%">
                          Status
                        </th>
                        <th _ngcontent-serverapp-c139 width="16%">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody _ngcontent-serverapp-c139>{/**/}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </app-modal>
        <app-modal _ngcontent-serverapp-c139 _nghost-serverapp-c43>
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
              {/**/}
              <div _ngcontent-serverapp-c139 className="modal-header">
                <h3 _ngcontent-serverapp-c139>User Info</h3>
              </div>
              <div _ngcontent-serverapp-c139 className="modal-content">
                <div
                  _ngcontent-serverapp-c139
                  className="status_id"
                  style={{ padding: "12px" }}
                >
                  <table
                    _ngcontent-serverapp-c139
                    className="table01"
                    style={{ width: "100%" }}
                  >
                    <thead _ngcontent-serverapp-c139>
                      <tr _ngcontent-serverapp-c139>
                        <th _ngcontent-serverapp-c139 className="align-C">
                          User Name
                        </th>
                        <th _ngcontent-serverapp-c139 className="align-C">
                          Email
                        </th>
                        <th _ngcontent-serverapp-c139 className="align-C">
                          Phone Number
                        </th>
                      </tr>
                    </thead>
                    <tbody _ngcontent-serverapp-c139>
                      <tr _ngcontent-serverapp-c139>
                        <td _ngcontent-serverapp-c139 className="align-C" />
                        <td _ngcontent-serverapp-c139 className="align-C">
                          {" "}
                          — {/**/}
                        </td>
                        <td _ngcontent-serverapp-c139 className="align-C">
                          {" "}
                          — {/**/}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </app-modal>
        <div
          _ngcontent-serverapp-c139
          id="confirmationmodal"
          role="dialog"
          data-backdrop="static"
          data-keyboard="false"
          aria-modal="true"
          className="modal"
          style={{ display: "none" }}
        >
          <div
            _ngcontent-serverapp-c139
            className="modal-md modal-dialog-scrollable pop_box1"
          >
            <span _ngcontent-serverapp-c139 tabIndex={0} />
            <div
              _ngcontent-serverapp-c139
              id="modal_content_"
              tabIndex={-1}
              className="modal-content"
            >
              <header
                _ngcontent-serverapp-c139
                id="modal_header_"
                className="modal-header bg-success top"
              >
                <h4
                  _ngcontent-serverapp-c139
                  id="popup_title"
                  className="modal-title text-uppercase text-white header"
                  style={{
                    "font-weight": "bold",
                    "font-family": "Tahoma, Helvetica, sans-serif",
                  }}
                >
                  Block/Un-Block Sport
                </h4>
              </header>
              <div
                _ngcontent-serverapp-c139
                id="modal_body_"
                className="modal-body"
              >
                <div
                  _ngcontent-serverapp-c139
                  className="form-group"
                  style={{ display: "table", width: "100%", margin: "5px 0px" }}
                >
                  <div
                    _ngcontent-serverapp-c139
                    role="alert"
                    aria-live="polite"
                    aria-atomic="true"
                    style={{ margin: "0" }}
                  >
                    <div _ngcontent-serverapp-c139 direction="right">
                      <span
                        _ngcontent-serverapp-c139
                        id="popup_msg"
                        style={{ "font-size": "15px" }}
                      >
                        You Want toBlock This Game?
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  _ngcontent-serverapp-c139
                  className="col-lg-12 col-12 text-right"
                  style={{
                    display: "flex",
                    "place-content": "center",
                    "margin-top": "20px",
                  }}
                >
                  <button
                    _ngcontent-serverapp-c139
                    type="button"
                    id="popup_confirm"
                    data-dismiss="modal"
                    className="btn-send close_modal"
                    style={{ width: "100px", "margin-right": "12px" }}
                  >
                    <i
                      _ngcontent-serverapp-c139
                      className="fa fa-check-circle"
                    />{" "}
                    Confirm{" "}
                  </button>
                  <button
                    _ngcontent-serverapp-c139
                    type="submit"
                    data-dismiss="modal"
                    className="btn-send close_modal"
                    style={{ width: "100px" }}
                  >
                    <i
                      _ngcontent-serverapp-c139
                      className="fa fa-times-circle"
                    />{" "}
                    Cancel{" "}
                  </button>
                </div>
              </div>
            </div>
            <span _ngcontent-serverapp-c139 tabIndex={0} />
          </div>
        </div>
      </app-searchuser>
 
  );
};

export default AllUser;
