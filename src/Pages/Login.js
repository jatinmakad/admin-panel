import React from "react";

const Login = () => {
  return (
    <app-login _nghost-serverapp-c88 className="ng-star-inserted">
      <div
        apptheme
        className="over-wrap loading-overlay ng-star-inserted"
        style={{ display: "none" }}
      >
        <div id="loading" className="loading-wrap" style={{ display: "block" }}>
          <ul className="loading">
            <li className="ng-star-inserted">
              <img src="assets/images/loading40.gif" className="loaderclass" />
            </li>

            <li style={{ padding: "10px" }}>Loading... </li>
            <br />
            <li>
              <span id="progress" />
            </li>
          </ul>
        </div>
      </div>
      <div className="dynamicBack ng-star-inserted">
        <div className="scene" />
        <div apptheme className="login-wrap">
          <div className="kv">
            <img src="assets/images/transparent.gif" alt="Logo" />
          </div>
          <form
            noValidate
            className="login-panel ng-invalid ng-dirty ng-touched"
          >
            <div className="header black-text">Agent Login</div>
            <input
              formcontrolname="userName"
              autoComplete="on"
              id="loginName"
              type="text"
              appinputrestriction="noSpecialChars"
              required
              placeholder="Username"
              className="ng-dirty ng-valid ng-touched"
            />
            <div className="password-group">
              <input
                formcontrolname="password"
                autoComplete="on"
                id="Password"
                required
                placeholder="Password"
                type="password"
                className="ng-dirty ng-valid ng-touched"
              />
            </div>

            <button type="submit" className="btn-send">
              {" "}
              Login{" "}
              <a className="login">
                <img
                  src="assets/images/transparent.gif"
                  className="icon-login"
                />
              </a>
            </button>
            <div className="apk-container ng-star-inserted">
              <a
                id="apk"
                href="https://ag.static112233.com/assets/apk/betx365.apk?v=0651651"
                download="betx365.apk"
              >
                <img src="assets/images/android.png" width="auto" />
              </a>
            </div>

            <span id="errorMsg" className="error ng-star-inserted">
              {" "}
            </span>
          </form>
        </div>
      </div>
    </app-login>
  );
};

export default Login;
