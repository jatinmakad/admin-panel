import React from "react";

const Ticket = () => {
  return (
    <app-ticker _nghost-serverapp-c94 className="ng-star-inserted">
      <div _ngcontent-serverapp-c94 className="main_wrap">
        <h2 _ngcontent-serverapp-c94>Ticker</h2>
        {/**/}
        <div _ngcontent-serverapp-c94 className="function-wrap funwrap">
          <div _ngcontent-serverapp-c94>
            <button _ngcontent-serverapp-c94 className="btn">
              Delete
            </button>
            <span _ngcontent-serverapp-c94 className="spacer" />
            <a _ngcontent-serverapp-c94 className="btn-send">
              Add New
            </a>
          </div>
          <div _ngcontent-serverapp-c94>
            <span _ngcontent-serverapp-c94 className="spacer" />
            <p _ngcontent-serverapp-c94 className="vertical-align: middle">
              Total Records: 0
            </p>
          </div>
        </div>
        <div _ngcontent-serverapp-c94 className="table-container">
          <table _ngcontent-serverapp-c94 className="table01">
            <thead _ngcontent-serverapp-c94>
              <tr _ngcontent-serverapp-c94 className="ng-table-sort-header">
                <th _ngcontent-serverapp-c94 width="3%">
                  <div
                    _ngcontent-serverapp-c94
                    ng-if="template"
                    ng-include="template"
                  >
                    <input
                      _ngcontent-serverapp-c94
                      type="checkbox"
                      id="select_all"
                      name="filter-checkbox"
                    />
                  </div>
                </th>
                <th _ngcontent-serverapp-c94 width="3%">
                  Edit
                </th>
                <th _ngcontent-serverapp-c94 width="10%" className="align-L">
                  id
                </th>
                <th _ngcontent-serverapp-c94 className="align-L">
                  Ticker
                </th>
                <th _ngcontent-serverapp-c94 width="8%" className="align-L">
                  Is Active
                </th>
              </tr>
            </thead>
            <tbody _ngcontent-serverapp-c94 className="ng-star-inserted">
              <tr _ngcontent-serverapp-c94>
                <td _ngcontent-serverapp-c94 colSpan={5} className="align-C">
                  <em _ngcontent-serverapp-c94>No Tickers</em>
                </td>
              </tr>
            </tbody>
            {/**/}
            {/**/}
          </table>
        </div>
      </div>
      <app-modal _ngcontent-serverapp-c94 _nghost-serverapp-c43>
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
            <div _ngcontent-serverapp-c94 className="modal-header">
              <h3 _ngcontent-serverapp-c94>Add New Ticker</h3>
            </div>
            <div _ngcontent-serverapp-c94 className="modal-content">
              <div _ngcontent-serverapp-c94 className="ticker-details">
                <div _ngcontent-serverapp-c94 className="input-group">
                  <label
                    _ngcontent-serverapp-c94
                    htmlFor="title"
                    style={{ display: "block" }}
                  >
                    Title:{" "}
                  </label>
                  <textarea
                    _ngcontent-serverapp-c94
                    rows={10}
                    cols={50}
                    className="ng-untouched ng-pristine ng-valid"
                    defaultValue={""}
                  />
                </div>
                <div _ngcontent-serverapp-c94 className="containerisactive">
                  <label _ngcontent-serverapp-c94 htmlFor="isActive">
                    <input
                      _ngcontent-serverapp-c94
                      type="checkbox"
                      name="isActive"
                      id="isActive"
                      className="ng-untouched ng-pristine ng-valid"
                    />{" "}
                    Is Active{" "}
                  </label>
                </div>
              </div>
            </div>
            <div _ngcontent-serverapp-c94 className="modal-footer">
              <div _ngcontent-serverapp-c94 className="btn_box">
                <button _ngcontent-serverapp-c94 className="btn-send">
                  Add New
                </button>
              </div>
            </div>
          </div>
        </div>
      </app-modal>
      <app-modal _ngcontent-serverapp-c94 _nghost-serverapp-c43>
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
            <div _ngcontent-serverapp-c94 className="modal-header">
              <h3 _ngcontent-serverapp-c94>Edit Ticker</h3>
            </div>
            <div _ngcontent-serverapp-c94 className="modal-content">
              <div _ngcontent-serverapp-c94 className="ticker-details">
                <div _ngcontent-serverapp-c94 className="input-group">
                  <label
                    _ngcontent-serverapp-c94
                    htmlFor="title"
                    style={{ display: "block" }}
                  >
                    Title:{" "}
                  </label>
                  <textarea
                    _ngcontent-serverapp-c94
                    rows={10}
                    cols={50}
                    className="ng-untouched ng-pristine ng-valid"
                    defaultValue={""}
                  />
                </div>
                <div _ngcontent-serverapp-c94 className="container">
                  <label _ngcontent-serverapp-c94 htmlFor="isActive">
                    <input
                      _ngcontent-serverapp-c94
                      type="checkbox"
                      name="isActive"
                      id="isActive"
                      className="ng-untouched ng-pristine ng-valid"
                    />{" "}
                    Is Active{" "}
                  </label>
                </div>
              </div>
            </div>
            <div _ngcontent-serverapp-c94 className="modal-footer">
              <div _ngcontent-serverapp-c94 className="btn_box">
                <button _ngcontent-serverapp-c94 className="btn-send">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </app-modal>
    </app-ticker>
  );
};

export default Ticket;
