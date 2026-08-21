import React from "react";

const MyAccountFilter = () => {
  return (
    <div _ngcontent-serverapp-c79 className="push">
      <div _ngcontent-serverapp-c79 className="download-reports">
        <div _ngcontent-serverapp-c79 className="spacer" />
        <label _ngcontent-serverapp-c79 style={{ "padding-top": "5px" }}>
          Last:
        </label>
        <select _ngcontent-serverapp-c79 name="limit" id="limit">
          <option _ngcontent-serverapp-c79 value={100}>
            100 Txn
          </option>
          <option _ngcontent-serverapp-c79 value={50}>
            50 Txn
          </option>
          <option _ngcontent-serverapp-c79 value={25}>
            25 Txn
          </option>
          <option _ngcontent-serverapp-c79 value={10} selected>
            10 Txn
          </option>
          <option _ngcontent-serverapp-c79 value={7}>
            All 7
          </option>
        </select>
        <button
          _ngcontent-serverapp-c79
          title="Export Excel"
          className="excel btn"
        >
          <img
            _ngcontent-serverapp-c79
            src="/assets/images/transparent.gif"
            alt
          />
        </button>
        <button _ngcontent-serverapp-c79 title="Export Pdf" className="pdf btn">
          <img
            _ngcontent-serverapp-c79
            src="/assets/images/transparent.gif"
            alt
          />
        </button>
        <button _ngcontent-serverapp-c79 title="Export Csv" className="csv btn">
          <img
            _ngcontent-serverapp-c79
            src="/assets/images/transparent.gif"
            alt
          />
        </button>
        <a
          _ngcontent-serverapp-c79
          id="refresh_loginHistory"
          className="btn_replay"
          title="Show Default"
        >
          <i
            _ngcontent-serverapp-c79
            className="fas fa-redo-alt"
            style={{ "margin-top": "9px" }}
          />
        </a>
      </div>
    </div>
  );
};

export default MyAccountFilter;
