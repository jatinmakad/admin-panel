import React, { useState } from "react";
import MyAccountLayout from "./MyAccountLayout";
import ChangePassword from "../User/ChangePassword";

const Profile = () => {
  const [show, setShow] = useState(false);
  return (
    <MyAccountLayout>
      <div _ngcontent-serverapp-c80 id="report" className="col-center report">
        <router-outlet _ngcontent-serverapp-c80 />
        <app-profile _nghost-serverapp-c78 className="ng-star-inserted">
          {/**/}
          <h2 _ngcontent-serverapp-c78>Profile</h2>
          <div _ngcontent-serverapp-c78 className="event-left">
            <div _ngcontent-serverapp-c78 className="profile-wrap">
              <h3 _ngcontent-serverapp-c78>About You</h3>
              <dl _ngcontent-serverapp-c78>
                <dd _ngcontent-serverapp-c78>Full Name</dd>
                <dd _ngcontent-serverapp-c78>naim</dd>
                {/**/}
                <dd _ngcontent-serverapp-c78 className="ng-star-inserted">
                  Domain
                </dd>
                <dd _ngcontent-serverapp-c78 className="ng-star-inserted">
                  betx365.in
                </dd>
                {/**/}
                <dd _ngcontent-serverapp-c78>Password</dd>
                <dd _ngcontent-serverapp-c78 className="edit-pass">
                  {" "}
                  ******************************** {/**/}
                  {/**/}
                  <a onClick={() => setShow(true)}
                    _ngcontent-serverapp-c78
                    className="favor-set ng-star-inserted"
                  >
                    Edit
                  </a>
                  {/**/}
                </dd>
              </dl>
            </div>
            {/**/}
          </div>
          <div _ngcontent-serverapp-c78 className="event-right">
            <div _ngcontent-serverapp-c78 className="profile-wrap">
              <h3 _ngcontent-serverapp-c78>Limits &amp; Commission</h3>
              <dl _ngcontent-serverapp-c78>
                <dd _ngcontent-serverapp-c78>Exposure Limit</dd>
                <dd _ngcontent-serverapp-c78 id="mainwalletExposureLimit">
                  5,000.00{" "}
                </dd>
                <dd _ngcontent-serverapp-c78 className="ng-star-inserted">
                  Share(%)
                </dd>
                <dd _ngcontent-serverapp-c78 className="ng-star-inserted">
                  {/**/}
                </dd>
                <dd _ngcontent-serverapp-c78 className="ng-star-inserted">
                  Cricket Share(%)
                </dd>
                <dd _ngcontent-serverapp-c78 className="ng-star-inserted">
                  <span _ngcontent-serverapp-c78>100%</span>
                </dd>
                <dd _ngcontent-serverapp-c78 className="ng-star-inserted">
                  Cricket Fancy Share(%)
                </dd>
                <dd _ngcontent-serverapp-c78 className="ng-star-inserted">
                  <span _ngcontent-serverapp-c78>100%</span>
                </dd>
                <dd _ngcontent-serverapp-c78 className="ng-star-inserted">
                  Soccer Share(%)
                </dd>
                <dd _ngcontent-serverapp-c78 className="ng-star-inserted">
                  <span _ngcontent-serverapp-c78>100%</span>
                </dd>
                <dd _ngcontent-serverapp-c78 className="ng-star-inserted">
                  Soccer Goal Share(%)
                </dd>
                <dd _ngcontent-serverapp-c78 className="ng-star-inserted">
                  <span _ngcontent-serverapp-c78>100%</span>
                </dd>
                <dd _ngcontent-serverapp-c78 className="ng-star-inserted">
                  Tennis Share(%)
                </dd>
                <dd _ngcontent-serverapp-c78 className="ng-star-inserted">
                  <span _ngcontent-serverapp-c78>100%</span>
                </dd>
                <dd _ngcontent-serverapp-c78 className="ng-star-inserted">
                  Indian Casino Share(%)
                </dd>
                <dd _ngcontent-serverapp-c78 className="ng-star-inserted">
                  <span _ngcontent-serverapp-c78>100%</span>
                </dd>
                <dd _ngcontent-serverapp-c78 className="ng-star-inserted">
                  exchange commission (%)
                </dd>
                <dd _ngcontent-serverapp-c78 className="ng-star-inserted">
                  <span _ngcontent-serverapp-c78> 0% </span>
                </dd>
                {/**/}
                {/**/}
                {/**/}
              </dl>
            </div>
            <div
              _ngcontent-serverapp-c78
              className="profile-wrap"
              style={{ display: "none" }}
            >
              <h3 _ngcontent-serverapp-c78>PT</h3>
              <dl _ngcontent-serverapp-c78>
                <dt _ngcontent-serverapp-c78>My PT Allowed</dt>
                <dd _ngcontent-serverapp-c78>0%</dd>
              </dl>
              <dl _ngcontent-serverapp-c78>
                <dt _ngcontent-serverapp-c78>My Fancy Bet PT</dt>
                <dd _ngcontent-serverapp-c78>0%</dd>
              </dl>
              <dl _ngcontent-serverapp-c78>
                <dt _ngcontent-serverapp-c78>Sportsbook PT</dt>
                <dd _ngcontent-serverapp-c78>0%</dd>
              </dl>
              <dl _ngcontent-serverapp-c78>
                <dt _ngcontent-serverapp-c78>Sportsbook Premium PT</dt>
                <dd _ngcontent-serverapp-c78>0%</dd>
              </dl>
              <dl _ngcontent-serverapp-c78>
                <dt _ngcontent-serverapp-c78>My Book Maker PT</dt>
                <dd _ngcontent-serverapp-c78>0%</dd>
              </dl>
              <dl _ngcontent-serverapp-c78>
                <dt _ngcontent-serverapp-c78>Casino PT Allowed</dt>
                <dd _ngcontent-serverapp-c78>
                  LIVE: 0%, RNG: 0%, SLOT: 0%, VIRTUAL: 0%
                </dd>
              </dl>
            </div>
          </div>
          <app-modal _ngcontent-serverapp-c78 _nghost-serverapp-c43>
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
                <form
                  _ngcontent-serverapp-c78
                  noValidate
                  className="ng-untouched ng-pristine ng-invalid"
                >
                  <div _ngcontent-serverapp-c78 className="modal-header">
                    <h3 _ngcontent-serverapp-c78>Change Password</h3>
                  </div>
                  <div _ngcontent-serverapp-c78 className="modal-content">
                    <dl _ngcontent-serverapp-c78 className="form_list">
                      <dt _ngcontent-serverapp-c78>New Password</dt>
                      <dd _ngcontent-serverapp-c78>
                        <input
                          _ngcontent-serverapp-c78
                          appinputrestriction="noSpecialChars2"
                          type="password"
                          formcontrolname="newpassword"
                          aria-autocomplete="list"
                          placeholder="Enter"
                          className="ng-untouched ng-pristine ng-invalid"
                        />
                        <span _ngcontent-serverapp-c78 className="must">
                          ＊
                        </span>
                        {/**/}
                        <span
                          _ngcontent-serverapp-c78
                          id="newPasswordErrorText"
                          className="error-text"
                        />
                      </dd>
                      <dt _ngcontent-serverapp-c78>Confirm password</dt>
                      <dd _ngcontent-serverapp-c78>
                        <input
                          _ngcontent-serverapp-c78
                          appinputrestriction="noSpecialChars2"
                          formcontrolname="confirm"
                          type="password"
                          placeholder="Enter"
                          className="ng-untouched ng-pristine ng-invalid"
                        />
                        <span _ngcontent-serverapp-c78 className="must">
                          ＊
                        </span>
                        {/**/}
                        {/**/}
                      </dd>
                      <dt _ngcontent-serverapp-c78>Your Password</dt>
                      <dd _ngcontent-serverapp-c78>
                        <input
                          _ngcontent-serverapp-c78
                          type="password"
                          formcontrolname="password"
                          placeholder="Enter"
                          className="ng-untouched ng-pristine ng-invalid"
                        />
                        <span _ngcontent-serverapp-c78 className="must">
                          ＊
                        </span>
                        {/**/}
                      </dd>
                      <dd _ngcontent-serverapp-c78>
                        <button
                          _ngcontent-serverapp-c78
                          id="changePasswordBtn"
                          type="submit"
                          className="btn-send"
                        >
                          {" "}
                          Change{" "}
                        </button>
                      </dd>
                    </dl>
                  </div>
                </form>
              </div>
            </div>
          </app-modal>
        </app-profile>
        {/**/}
      </div>  <ChangePassword show={show} setShow={setShow}/>
    </MyAccountLayout>
  );
};

export default Profile;
