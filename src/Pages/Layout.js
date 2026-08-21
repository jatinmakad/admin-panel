import React from "react";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <app-main _nghost-serverapp-c45>
        <Header />
        <div
          _ngcontent-serverapp-c45
          apptheme
          className="over-wrap loading-overlay"
          style={{ display: "none" }}
        >
          <div
            _ngcontent-serverapp-c45
            id="loading"
            className="loading-wrap"
            style={{ display: "block" }}
          >
            <ul _ngcontent-serverapp-c45 className="loading">
              <li _ngcontent-serverapp-c45>
                <img
                  _ngcontent-serverapp-c45
                  src="assets/images/loading40.gif"
                  className="loaderclass"
                />
              </li>

              <li _ngcontent-serverapp-c45>Loading... </li>
              <br _ngcontent-serverapp-c45 />
              <li _ngcontent-serverapp-c45>
                <span _ngcontent-serverapp-c45 id="progress" />
              </li>
            </ul>
          </div>
        </div>

        <div _ngcontent-serverapp-c45 className="content-wrapper">
          {children}
        </div>
      </app-main>
    </div>
  );
};

export default Layout;
