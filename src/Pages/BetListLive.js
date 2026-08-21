import React from "react";

const BetListLive = () => {
  return (

      <app-bet-list-live _nghost-serverapp-c86 className="ng-star-inserted">
        <div _ngcontent-serverapp-c86 className="full-wrap">
          <div _ngcontent-serverapp-c86 className="over-wrap">
            <div _ngcontent-serverapp-c86 className="total_all">
              <h2 _ngcontent-serverapp-c86>Live Bet</h2>
              {/**/}
              <span _ngcontent-serverapp-c86 className="spacer" />
              <span
                _ngcontent-serverapp-c86
                style={{ "margin-left": "auto", "white-space": "nowrap" }}
              >
                {" "}
                Total Records: <strong _ngcontent-serverapp-c86> 0</strong>
              </span>{" "}
              &nbsp; &nbsp; {/**/}
            </div>
            <div
              _ngcontent-serverapp-c86
              id="limitCondition"
              className="function-wrap"
            >
              <ul
                _ngcontent-serverapp-c86
                className="input-list diaplayflex"
             
              >
                <li _ngcontent-serverapp-c86 id="eventType_checkBox">
                  <input
                    _ngcontent-serverapp-c86
                    id="All"
                    type="radio"
                    name="events"
                    defaultValue
                    defaultChecked
                  />
                  <label _ngcontent-serverapp-c86 htmlFor="All">
                    All
                  </label>
                  <input
                    _ngcontent-serverapp-c86
                    type="radio"
                    name="events"
                    className="ng-star-inserted"
                    id="Soccer"
                    defaultValue="soccer"
                  />
                  <label
                    _ngcontent-serverapp-c86
                    className="ng-star-inserted"
                    htmlFor="Soccer"
                  >
                    Soccer
                  </label>
                  {/**/}
                  <input
                    _ngcontent-serverapp-c86
                    type="radio"
                    name="events"
                    className="ng-star-inserted"
                    id="Tennis"
                    defaultValue="tennis"
                  />
                  <label
                    _ngcontent-serverapp-c86
                    className="ng-star-inserted"
                    htmlFor="Tennis"
                  >
                    Tennis
                  </label>
                  {/**/}
                  <input
                    _ngcontent-serverapp-c86
                    type="radio"
                    name="events"
                    className="ng-star-inserted"
                    id="Cricket"
                    defaultValue="cricket"
                  />
                  <label
                    _ngcontent-serverapp-c86
                    className="ng-star-inserted"
                    htmlFor="Cricket"
                  >
                    Cricket
                  </label>
                  {/**/}
                  <input
                    _ngcontent-serverapp-c86
                    type="radio"
                    name="events"
                    className="ng-star-inserted"
                    id="Premium"
                    defaultValue="premium"
                  />
                  <label
                    _ngcontent-serverapp-c86
                    className="ng-star-inserted"
                    htmlFor="Premium"
                  >
                    Premium
                  </label>
                  {/**/}
                  <input
                    _ngcontent-serverapp-c86
                    type="radio"
                    name="events"
                    className="ng-star-inserted"
                    id="Bookmaker"
                    defaultValue="bookmaker"
                  />
                  <label
                    _ngcontent-serverapp-c86
                    className="ng-star-inserted"
                    htmlFor="Bookmaker"
                  >
                    Bookmaker
                  </label>
                  {/**/}
                  <input
                    _ngcontent-serverapp-c86
                    type="radio"
                    name="events"
                    className="ng-star-inserted"
                    id="Fancy"
                    defaultValue="fancy"
                  />
                  <label
                    _ngcontent-serverapp-c86
                    className="ng-star-inserted"
                    htmlFor="Fancy"
                  >
                    Fancy
                  </label>
                  {/**/}
                  <input
                    _ngcontent-serverapp-c86
                    type="radio"
                    name="events"
                    className="ng-star-inserted"
                    id="parlay"
                    defaultValue="parlay"
                  />
                  <label
                    _ngcontent-serverapp-c86
                    className="ng-star-inserted"
                    htmlFor="parlay"
                  >
                    parlay
                  </label>
                  {/**/}
                  <input
                    _ngcontent-serverapp-c86
                    type="radio"
                    name="events"
                    className="ng-star-inserted"
                    id="Live Casino"
                    defaultValue="Live Casino"
                  />
                  <label
                    _ngcontent-serverapp-c86
                    className="ng-star-inserted"
                    htmlFor="Live Casino"
                  >
                    Live Casino
                  </label>
                  {/**/}
                  <input
                    _ngcontent-serverapp-c86
                    type="radio"
                    name="events"
                    className="ng-star-inserted"
                    id="Horse Racing"
                    defaultValue="horseracing"
                  />
                  <label
                    _ngcontent-serverapp-c86
                    className="ng-star-inserted"
                    htmlFor="Horse Racing"
                  >
                    Horse Racing
                  </label>
                  {/**/}
                  <input
                    _ngcontent-serverapp-c86
                    type="radio"
                    name="events"
                    className="ng-star-inserted"
                    id="Greyhound Racing"
                    defaultValue="greyhound"
                  />
                  <label
                    _ngcontent-serverapp-c86
                    className="ng-star-inserted"
                    htmlFor="Greyhound Racing"
                  >
                    Greyhound Racing
                  </label>
                  {/**/}
                  <input
                    _ngcontent-serverapp-c86
                    type="radio"
                    name="events"
                    className="ng-star-inserted"
                    id="Kabaddi"
                    defaultValue="kabaddi"
                  />
                  <label
                    _ngcontent-serverapp-c86
                    className="ng-star-inserted"
                    htmlFor="Kabaddi"
                  >
                    Kabaddi
                  </label>
                  {/**/}
                  <input
                    _ngcontent-serverapp-c86
                    type="radio"
                    name="events"
                    className="ng-star-inserted"
                    id="Election"
                    defaultValue="election"
                  />
                  <label
                    _ngcontent-serverapp-c86
                    className="ng-star-inserted"
                    htmlFor="Election"
                  >
                    Election
                  </label>
                  {/**/}
                  {/**/}
                </li>
                <span _ngcontent-serverapp-c86 className="spacer" />
                {/**/}
              </ul>
              <ul
                _ngcontent-serverapp-c86
                className="input-list contentclass wrapInput"
              >
                <li _ngcontent-serverapp-c86>
                  <input
                    _ngcontent-serverapp-c86
                    type="text"
                    appinputrestriction="noSpecialChars3"
                    name
                    id
                    className="widthfull ng-untouched ng-pristine ng-valid"
                    placeholder="Search Here"
                  />
                </li>
                <div _ngcontent-serverapp-c86 className="diaplayflex1 divblock">
                  <li _ngcontent-serverapp-c86 className="widthfull">
                    <ng-select
                      _ngcontent-serverapp-c86
                      className="widthfull ng-select ng-select-single ng-select-searchable ng-select-clearable ng-untouched ng-pristine ng-valid"
                    >
                      <div className="ng-select-container ng-has-value">
                        <div className="ng-value-container">
                          <div className="ng-placeholder" />
                          <div className="ng-value ng-star-inserted">
                            {/**/}
                            <span
                              aria-hidden="true"
                              className="ng-value-icon left ng-star-inserted"
                            >
                              ×
                            </span>
                            <span className="ng-value-label ng-star-inserted">
                              Select User
                            </span>
                            {/**/}
                          </div>
                          {/**/}
                          {/**/}
                          {/**/}
                          {/**/}
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
                              autoComplete="ab35edf67e65"
                            />
                          </div>
                        </div>
                        {/**/}
                        <span
                          className="ng-clear-wrapper ng-star-inserted"
                          title="Clear all"
                        >
                          <span aria-hidden="true" className="ng-clear">
                            ×
                          </span>
                        </span>
                        {/**/}
                        <span className="ng-arrow-wrapper">
                          <span className="ng-arrow" />
                        </span>
                      </div>
                      {/**/}
                    </ng-select>
                  </li>
                  <li _ngcontent-serverapp-c86>{/**/}</li>
                  <li _ngcontent-serverapp-c86 className="widthfull">
                    <ng-select
                      _ngcontent-serverapp-c86
                      className="widthfull ng-select ng-select-single ng-select-searchable ng-select-clearable ng-untouched ng-pristine ng-valid"
                    >
                      <div className="ng-select-container ng-has-value">
                        <div className="ng-value-container">
                          <div className="ng-placeholder" />
                          <div className="ng-value ng-star-inserted">
                            {/**/}
                            <span
                              aria-hidden="true"
                              className="ng-value-icon left ng-star-inserted"
                            >
                              ×
                            </span>
                            <span className="ng-value-label ng-star-inserted">
                              {" "}
                              Select Event{" "}
                            </span>
                            {/**/}
                          </div>
                          {/**/}
                          {/**/}
                          {/**/}
                          {/**/}
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
                              autoComplete="ab39750191e9"
                            />
                          </div>
                        </div>
                        {/**/}
                        <span
                          className="ng-clear-wrapper ng-star-inserted"
                          title="Clear all"
                        >
                          <span aria-hidden="true" className="ng-clear">
                            ×
                          </span>
                        </span>
                        {/**/}
                        <span className="ng-arrow-wrapper">
                          <span className="ng-arrow" />
                        </span>
                      </div>
                      {/**/}
                    </ng-select>
                  </li>
                </div>
                <div _ngcontent-serverapp-c86 className="diaplayflex1 divblock">
                  <li _ngcontent-serverapp-c86 className="widthfull">
                    <ng-select
                      _ngcontent-serverapp-c86
                      className="widthfull ng-select ng-select-single ng-select-searchable ng-select-clearable ng-untouched ng-pristine ng-valid"
                    >
                      <div className="ng-select-container ng-has-value">
                        <div className="ng-value-container">
                          <div className="ng-placeholder" />
                          <div className="ng-value ng-star-inserted">
                            {/**/}
                            <span
                              aria-hidden="true"
                              className="ng-value-icon left ng-star-inserted"
                            >
                              ×
                            </span>
                            <span className="ng-value-label ng-star-inserted">
                              {" "}
                              Select Market{" "}
                            </span>
                            {/**/}
                          </div>
                          {/**/}
                          {/**/}
                          {/**/}
                          {/**/}
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
                              autoComplete="a59046d5346e"
                            />
                          </div>
                        </div>
                        {/**/}
                        <span
                          className="ng-clear-wrapper ng-star-inserted"
                          title="Clear all"
                        >
                          <span aria-hidden="true" className="ng-clear">
                            ×
                          </span>
                        </span>
                        {/**/}
                        <span className="ng-arrow-wrapper">
                          <span className="ng-arrow" />
                        </span>
                      </div>
                      {/**/}
                    </ng-select>
                  </li>
                  <li _ngcontent-serverapp-c86 className="widthfull">
                    <ng-select
                      _ngcontent-serverapp-c86
                      className="widthfull ng-select ng-select-single ng-select-searchable ng-select-clearable ng-untouched ng-pristine ng-valid"
                    >
                      <div className="ng-select-container ng-has-value">
                        <div className="ng-value-container">
                          <div className="ng-placeholder" />
                          <div className="ng-value ng-star-inserted">
                            {/**/}
                            <span
                              aria-hidden="true"
                              className="ng-value-icon left ng-star-inserted"
                            >
                              ×
                            </span>
                            <span className="ng-value-label ng-star-inserted">
                              {" "}
                              Select Currency{" "}
                            </span>
                            {/**/}
                          </div>
                          {/**/}
                          {/**/}
                          {/**/}
                          {/**/}
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
                              autoComplete="a2d0ac18b965"
                            />
                          </div>
                        </div>
                        {/**/}
                        <span
                          className="ng-clear-wrapper ng-star-inserted"
                          title="Clear all"
                        >
                          <span aria-hidden="true" className="ng-clear">
                            ×
                          </span>
                        </span>
                        {/**/}
                        <span className="ng-arrow-wrapper">
                          <span className="ng-arrow" />
                        </span>
                      </div>
                      {/**/}
                    </ng-select>
                  </li>
                  <li _ngcontent-serverapp-c86>
                    <label _ngcontent-serverapp-c86>Sort stake : &nbsp;</label>
                    <select
                      _ngcontent-serverapp-c86
                      name="limit"
                      id="limit"
                      className="widthfull"
                    >
                      <option _ngcontent-serverapp-c86 value>
                        Show default
                      </option>
                      <option _ngcontent-serverapp-c86 value="asc">
                        Acending
                      </option>
                      <option _ngcontent-serverapp-c86 value="desc">
                        Decending
                      </option>
                    </select>
                  </li>{" "}
                  `{" "}
                </div>
                <div _ngcontent-serverapp-c86 className="diaplayflex divblock">
                  <li _ngcontent-serverapp-c86 className="widthfull">
                    <label _ngcontent-serverapp-c86>Last:</label>
                    <select
                      _ngcontent-serverapp-c86
                      name="limit"
                      id="limit"
                      className="widthfull"
                    >
                      <option _ngcontent-serverapp-c86 value={5000}>
                        5000 Txn
                      </option>
                      <option _ngcontent-serverapp-c86 value={1000}>
                        1000 Txn
                      </option>
                      <option _ngcontent-serverapp-c86 value={500}>
                        500 Txn
                      </option>
                      <option _ngcontent-serverapp-c86 value={100} selected>
                        100 Txn
                      </option>
                      <option _ngcontent-serverapp-c86 value={50}>
                        50 Txn
                      </option>
                      <option _ngcontent-serverapp-c86 value={10}>
                        10 Txn
                      </option>
                      <option _ngcontent-serverapp-c86 value={0}>
                        Full 0
                      </option>
                    </select>
                  </li>
                  <li _ngcontent-serverapp-c86 className="widthfull">
                    <label _ngcontent-serverapp-c86>Stake</label>
                    <input
                      _ngcontent-serverapp-c86
                      type="number"
                      name="Volume Check"
                      className="widthfull ng-untouched ng-pristine ng-valid"
                      style={{ width: "100%" }}
                      placeholder="Volume"
                    />
                  </li>
                  <li _ngcontent-serverapp-c86 className="widthfull">
                    <input
                      _ngcontent-serverapp-c86
                      type="text"
                      name="ipAddress"
                      placeholder="Search IP"
                      className="widthfull ng-untouched ng-pristine ng-valid"
                      style={{ width: "100%" }}
                    />
                  </li>
                  <li _ngcontent-serverapp-c86>
                    <a
                      _ngcontent-serverapp-c86
                      id="betListLiveRefresh"
                      className="btn-send"
                    >
                      Refresh
                    </a>
                  </li>
                  <li
                    _ngcontent-serverapp-c86
                    style={{ "margin-left": "auto", "white-space": "nowrap" }}
                  >
                    {/**/}
                  </li>
                </div>
              </ul>
              {/**/}
            </div>
            <div
              _ngcontent-serverapp-c86
              className="table-responsive data-table"
            >
             
              <table
                _ngcontent-serverapp-c86
                id="matchTable"
                className="table-s"
                style={{ display: "table" }}
              >
        
                <tbody _ngcontent-serverapp-c86>
                  <tr _ngcontent-serverapp-c86>
                    {/**/}
                    <th
                      _ngcontent-serverapp-c86
                      width="5%"
                      className="align-L ng-star-inserted"
                    >
                      {" "}
                      SA ID{" "}
                    </th>
                    {/**/}
                    <th
                      _ngcontent-serverapp-c86
                      width="5%"
                      className="align-L ng-star-inserted"
                    >
                      {" "}
                      SM ID{" "}
                    </th>
                    {/**/}
                    <th
                      _ngcontent-serverapp-c86
                      width="5%"
                      className="align-L ng-star-inserted"
                    >
                      {" "}
                      MA ID{" "}
                    </th>
                    {/**/}
                    {/**/}
                    <th _ngcontent-serverapp-c86 width="5%" className="align-L">
                      PL ID
                    </th>
                    <th _ngcontent-serverapp-c86 width="6%" className="align-L">
                      Bet ID {/**/}
                    </th>
                    <th
                      _ngcontent-serverapp-c86
                      id="betTime"
                      width="6%"
                      className="align-L"
                    >
                      Bet Placed
                    </th>
                    <th
                      _ngcontent-serverapp-c86
                      width="10%"
                      className="align-L"
                    >
                      Event
                    </th>
                    <th _ngcontent-serverapp-c86 width="7%" className="align-L">
                      Market
                    </th>
                    <th _ngcontent-serverapp-c86 width="4%" className="align-C">
                      Type
                    </th>
                    <th _ngcontent-serverapp-c86 width="4%">
                      Odds
                    </th>
                    <th _ngcontent-serverapp-c86 width="5%">
                      Stake
                    </th>
                    <th _ngcontent-serverapp-c86 width="5%" className="align-L">
                      Pot Liability
                    </th>
                    <th
                      _ngcontent-serverapp-c86
                      width="5%"
                      name="profitOrLossTh"
                      className="align-L"
                    >
                      Pot Profit
                    </th>
                    {/**/}
                    {/**/}
                    <th _ngcontent-serverapp-c86 width="7%" className="align-L">
                      IP Address
                    </th>
                    {/**/}
                    {/**/}
                    {/**/}
                  </tr>
                  {/**/}
                </tbody>
                {/**/}
              </table> <p _ngcontent-serverapp-c86 className="no-data ng-star-inserted">
                {" "}
                You have no bets in this time period.{" "}
              </p>
              {/**/}
            </div>
          </div>
        </div>
        <app-modal _ngcontent-serverapp-c86 _nghost-serverapp-c43>
          <div
            _ngcontent-serverapp-c43
            id="createModal"
            className="pop_bg"
            style={{ height: "100%", width: "100%", display: "none" }}
          >
            <div
              _ngcontent-serverapp-c43
              className="pop_box pop_refer"
              style={{ width: "690px" }}
            >
              {/**/}
              <h3 _ngcontent-serverapp-c86 style={{ display: "flex" }}>
                Confirm Void Bet{" "}
                <a _ngcontent-serverapp-c86 className="close_pop">
                  close_pop
                </a>
              </h3>
              <div _ngcontent-serverapp-c86 className="modal-content">
                <table _ngcontent-serverapp-c86 className="table-s">
                  <tbody _ngcontent-serverapp-c86>
                    <tr _ngcontent-serverapp-c86>
                      <th _ngcontent-serverapp-c86>UID</th>
                      <th _ngcontent-serverapp-c86>Bet ID</th>
                      <th _ngcontent-serverapp-c86>Event</th>
                      <th _ngcontent-serverapp-c86>Bet Placed</th>
                      <th _ngcontent-serverapp-c86>Market</th>
                      <th _ngcontent-serverapp-c86>Type</th>
                      <th _ngcontent-serverapp-c86>Odds</th>
                      <th _ngcontent-serverapp-c86>Stake</th>
                    </tr>
                    <tr _ngcontent-serverapp-c86>
                      <td _ngcontent-serverapp-c86 />
                      <td _ngcontent-serverapp-c86 />
                      <td _ngcontent-serverapp-c86>
                        {" "}
                        {/**/}{" "}
                        <img
                          _ngcontent-serverapp-c86
                          src="assets/images/transparent.gif"
                          className="fromto"
                        />
                      </td>
                      <td _ngcontent-serverapp-c86>
                        <span
                          _ngcontent-serverapp-c86
                          id="betPlaced"
                          className="small-date"
                        >
                          {" "}
                        </span>
                      </td>
                      <td _ngcontent-serverapp-c86 />
                      <td _ngcontent-serverapp-c86>
                        <span _ngcontent-serverapp-c86></span>
                      </td>
                      <td _ngcontent-serverapp-c86 />
                      <td _ngcontent-serverapp-c86 />
                    </tr>
                  </tbody>
                </table>
              </div>
              <form
                _ngcontent-serverapp-c86
                noValidate
                className="ng-untouched ng-pristine ng-invalid"
              >
                <ul _ngcontent-serverapp-c86 className="btn-wrap">
                  <li _ngcontent-serverapp-c86>
                    <select
                      _ngcontent-serverapp-c86
                      id="select"
                      style={{
                        border: "1px solid #bebaba",
                        "border-radius": "3px",
                      }}
                      className="ng-untouched ng-pristine ng-valid"
                    >
                      <option
                        _ngcontent-serverapp-c86
                        className="ng-star-inserted"
                        value="undefined"
                      >
                        {" "}
                        Select remark{" "}
                      </option>
                      <option
                        _ngcontent-serverapp-c86
                        className="ng-star-inserted"
                        value="Bets voided due to wrong rate"
                      >
                        {" "}
                        Bets voided due to wrong rate{" "}
                      </option>
                      <option
                        _ngcontent-serverapp-c86
                        className="ng-star-inserted"
                        value="All bets were voided due to no result / Abandoned"
                      >
                        {" "}
                        All bets were voided due to no result / Abondoned{" "}
                      </option>
                      <option
                        _ngcontent-serverapp-c86
                        className="ng-star-inserted"
                        value="Due to cheat betting / ip match all profit bets were voided"
                      >
                        {" "}
                        Due to cheat betting / ip match all profit bets were
                        voided{" "}
                      </option>
                      <option
                        _ngcontent-serverapp-c86
                        className="ng-star-inserted"
                        value="Back / Lay bets will be voided from betfair under 1 minute"
                      >
                        {" "}
                        Back / Lay bets will be voided from betfair under 1
                        minutes{" "}
                      </option>
                      <option
                        _ngcontent-serverapp-c86
                        className="ng-star-inserted"
                        value="2 inning advance bet"
                      >
                        {" "}
                        2 inning advance bet{" "}
                      </option>
                      <option
                        _ngcontent-serverapp-c86
                        className="ng-star-inserted"
                        value="Other"
                      >
                        {" "}
                        Other{" "}
                      </option>
                      {/**/}
                    </select>
                  </li>
                  <li _ngcontent-serverapp-c86>
                    <label _ngcontent-serverapp-c86>Password:</label>
                    <input
                      _ngcontent-serverapp-c86
                      type="password"
                      autoComplete="on"
                      formcontrolname="password"
                      required
                      placeholder="Enter"
                      className="ng-untouched ng-pristine ng-invalid"
                    />
                  </li>
                  <li _ngcontent-serverapp-c86>
                    <button
                      _ngcontent-serverapp-c86
                      type="submit"
                      className="btn-send"
                    >
                      {" "}
                      Submit{" "}
                    </button>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </app-modal>
        <app-modal _ngcontent-serverapp-c86 _nghost-serverapp-c43>
          <div
            _ngcontent-serverapp-c43
            id="createModal"
            className="pop_bg"
            style={{ height: "100%", width: "100%", display: "none" }}
          >
            <div
              _ngcontent-serverapp-c43
              className="pop_box pop_refer"
              style={{ width: "690px" }}
            >
              {/**/}
              <h3 _ngcontent-serverapp-c86 style={{ display: "flex" }}>
                Confirm Cancel Bet{" "}
                <a _ngcontent-serverapp-c86 className="close_pop">
                  close_pop
                </a>
              </h3>
              <div
                _ngcontent-serverapp-c86
                className="modal-content"
                style={{ "max-height": "500px", overflow: "auto" }}
              >
                <table _ngcontent-serverapp-c86 className="table-s">
                  <tbody _ngcontent-serverapp-c86>
                    <tr _ngcontent-serverapp-c86>
                      <th _ngcontent-serverapp-c86>UID</th>
                      <th _ngcontent-serverapp-c86>Bet ID</th>
                      <th _ngcontent-serverapp-c86>Event</th>
                      <th _ngcontent-serverapp-c86>Bet Placed</th>
                      <th _ngcontent-serverapp-c86>Market</th>
                      <th _ngcontent-serverapp-c86>Type</th>
                      <th _ngcontent-serverapp-c86>Odds</th>
                      <th _ngcontent-serverapp-c86>Stake</th>
                    </tr>
                    <tr _ngcontent-serverapp-c86>
                      <td _ngcontent-serverapp-c86 />
                      <td _ngcontent-serverapp-c86 />
                      <td _ngcontent-serverapp-c86>
                        {" "}
                        {/**/}{" "}
                        <img
                          _ngcontent-serverapp-c86
                          src="assets/images/transparent.gif"
                          className="fromto"
                        />
                      </td>
                      <td _ngcontent-serverapp-c86>
                        <span
                          _ngcontent-serverapp-c86
                          id="betPlaced"
                          className="small-date"
                        >
                          {" "}
                        </span>
                      </td>
                      <td _ngcontent-serverapp-c86 />
                      <td _ngcontent-serverapp-c86>
                        <span _ngcontent-serverapp-c86> </span>
                      </td>
                      <td _ngcontent-serverapp-c86 />
                      <td _ngcontent-serverapp-c86 />
                    </tr>
                  </tbody>
                </table>
              </div>
              <form
                _ngcontent-serverapp-c86
                noValidate
                className="ng-untouched ng-pristine ng-invalid"
              >
                <ul _ngcontent-serverapp-c86 className="btn-wrap">
                  <li _ngcontent-serverapp-c86>
                    <label _ngcontent-serverapp-c86>Password:</label>
                    <input
                      _ngcontent-serverapp-c86
                      type="password"
                      autoComplete="on"
                      formcontrolname="password"
                      required
                      placeholder="Enter"
                      className="ng-untouched ng-pristine ng-invalid"
                    />
                  </li>
                  <li _ngcontent-serverapp-c86>
                    <button
                      _ngcontent-serverapp-c86
                      type="submit"
                      className="btn-send"
                    >
                      {" "}
                      Submit{" "}
                    </button>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </app-modal>
        <app-modal _ngcontent-serverapp-c86 _nghost-serverapp-c43>
          <div
            _ngcontent-serverapp-c43
            id="createModal"
            className="pop_bg"
            style={{ height: "100%", width: "100%", display: "none" }}
          >
            <div
              _ngcontent-serverapp-c43
              className="pop_box pop_refer"
              style={{ width: "690px" }}
            >
              {/**/}
              <div _ngcontent-serverapp-c86>
                <h3 _ngcontent-serverapp-c86 style={{ display: "flex" }}>
                  Confirm Void Bet{" "}
                  <span
                    _ngcontent-serverapp-c86
                    style={{ "margin-left": "1rem" }}
                  >
                    <label _ngcontent-serverapp-c86>Total Count: </label>0
                  </span>
                  <a _ngcontent-serverapp-c86 className="close_pop">
                    close_pop
                  </a>
                </h3>
              </div>
              <div
                _ngcontent-serverapp-c86
                className="modal-content"
                style={{ "max-height": "500px", overflow: "auto" }}
              >
                <table _ngcontent-serverapp-c86 className="table-s">
                  <tbody _ngcontent-serverapp-c86>
                    <tr _ngcontent-serverapp-c86>
                      <th _ngcontent-serverapp-c86>UID</th>
                      <th _ngcontent-serverapp-c86>Event</th>
                      <th _ngcontent-serverapp-c86>Bet Placed</th>
                      <th _ngcontent-serverapp-c86>Market</th>
                      <th _ngcontent-serverapp-c86>Type</th>
                      <th _ngcontent-serverapp-c86>Odds</th>
                      <th _ngcontent-serverapp-c86>Stake</th>
                      <th _ngcontent-serverapp-c86>Action</th>
                    </tr>
                    {/**/}
                  </tbody>
                </table>
              </div>
              <form
                _ngcontent-serverapp-c86
                noValidate
                className="ng-untouched ng-pristine ng-invalid"
              >
                <ul _ngcontent-serverapp-c86 className="btn-wrap">
                  <li _ngcontent-serverapp-c86>
                    <select
                      _ngcontent-serverapp-c86
                      id="select"
                      style={{
                        border: "1px solid #bebaba",
                        "border-radius": "3px",
                      }}
                      className="ng-untouched ng-pristine ng-valid"
                    >
                      <option
                        _ngcontent-serverapp-c86
                        value="undefined"
                        className="ng-star-inserted"
                      >
                        {" "}
                        Select remark{" "}
                      </option>
                      <option
                        _ngcontent-serverapp-c86
                        value="Bets voided due to wrong rate"
                        className="ng-star-inserted"
                      >
                        {" "}
                        Bets voided due to wrong rate{" "}
                      </option>
                      <option
                        _ngcontent-serverapp-c86
                        value="All bets were voided due to no result / Abandoned"
                        className="ng-star-inserted"
                      >
                        {" "}
                        All bets were voided due to no result / Abondoned{" "}
                      </option>
                      <option
                        _ngcontent-serverapp-c86
                        value="Due to cheat betting / ip match all profit bets were voided"
                        className="ng-star-inserted"
                      >
                        {" "}
                        Due to cheat betting / ip match all profit bets were
                        voided{" "}
                      </option>
                      <option
                        _ngcontent-serverapp-c86
                        value="Back / Lay bets will be voided from betfair under 1 minute"
                        className="ng-star-inserted"
                      >
                        {" "}
                        Back / Lay bets will be voided from betfair under 1
                        minutes{" "}
                      </option>
                      <option
                        _ngcontent-serverapp-c86
                        value="2 inning advance bet"
                        className="ng-star-inserted"
                      >
                        {" "}
                        2 inning advance bet{" "}
                      </option>
                      <option
                        _ngcontent-serverapp-c86
                        value="Other"
                        className="ng-star-inserted"
                      >
                        {" "}
                        Other{" "}
                      </option>
                      {/**/}
                    </select>
                  </li>
                  <li _ngcontent-serverapp-c86>
                    <label _ngcontent-serverapp-c86>Password:</label>
                    <input
                      _ngcontent-serverapp-c86
                      type="password"
                      autoComplete="on"
                      formcontrolname="password"
                      required
                      placeholder="Enter"
                      className="ng-untouched ng-pristine ng-invalid"
                    />
                  </li>
                  <li _ngcontent-serverapp-c86>
                    <button
                      _ngcontent-serverapp-c86
                      type="submit"
                      className="btn-send"
                    >
                      {" "}
                      Submit{" "}
                    </button>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </app-modal>
        <app-modal _ngcontent-serverapp-c86 _nghost-serverapp-c43>
          <div
            _ngcontent-serverapp-c43
            id="createModal"
            className="pop_bg"
            style={{ height: "100%", width: "100%", display: "none" }}
          >
            <div
              _ngcontent-serverapp-c43
              className="pop_box pop_refer"
              style={{ width: "690px" }}
            >
              {/**/}
              <div _ngcontent-serverapp-c86>
                <h3 _ngcontent-serverapp-c86 style={{ display: "flex" }}>
                  Confirm Cancel Bet{" "}
                  <a _ngcontent-serverapp-c86 className="close_pop">
                    close_pop
                  </a>
                </h3>
              </div>
              <div
                _ngcontent-serverapp-c86
                className="modal-content"
                style={{ "max-height": "500px", overflow: "auto" }}
              >
                <table _ngcontent-serverapp-c86 className="table-s">
                  <tbody _ngcontent-serverapp-c86>
                    <tr _ngcontent-serverapp-c86>
                      <th _ngcontent-serverapp-c86>UID</th>
                      <th _ngcontent-serverapp-c86>Event</th>
                      <th _ngcontent-serverapp-c86>Bet Placed</th>
                      <th _ngcontent-serverapp-c86>Market</th>
                      <th _ngcontent-serverapp-c86>Type</th>
                      <th _ngcontent-serverapp-c86>Odds</th>
                      <th _ngcontent-serverapp-c86>Stake</th>
                      <th _ngcontent-serverapp-c86>Action</th>
                    </tr>
                    {/**/}
                  </tbody>
                </table>
              </div>
              <form
                _ngcontent-serverapp-c86
                noValidate
                className="ng-untouched ng-pristine ng-invalid"
              >
                <ul _ngcontent-serverapp-c86 className="btn-wrap">
                  <li _ngcontent-serverapp-c86>
                    <label _ngcontent-serverapp-c86>Password:</label>
                    <input
                      _ngcontent-serverapp-c86
                      type="password"
                      autoComplete="on"
                      formcontrolname="password"
                      required
                      placeholder="Enter"
                      className="ng-untouched ng-pristine ng-invalid"
                    />
                  </li>
                  <li _ngcontent-serverapp-c86>
                    <button
                      _ngcontent-serverapp-c86
                      type="submit"
                      className="btn-send"
                    >
                      {" "}
                      Submit{" "}
                    </button>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </app-modal>
        <app-modal _ngcontent-serverapp-c86 _nghost-serverapp-c43>
          <div
            _ngcontent-serverapp-c43
            id="createModal"
            className="pop_bg"
            style={{ height: "100%", width: "100%", display: "none" }}
          >
            <div
              _ngcontent-serverapp-c43
              className="pop_box pop_refer"
              style={{ height: "auto", overflow: "auto" }}
            >
              {/**/}
              <h2 _ngcontent-serverapp-c86>User name : </h2>
              <h3 _ngcontent-serverapp-c86 style={{ display: "flex" }}>
                Parlay List Bets{" "}
                <a _ngcontent-serverapp-c86 className="close_pop">
                  close_pop
                </a>
                <span
                  _ngcontent-serverapp-c86
                  className="searchBet"
                  style={{ "margin-left": "3rem" }}
                />
              </h3>
              <div
                _ngcontent-serverapp-c86
                className="modal-content"
                style={{ "max-height": "500px", "overflow-y": "scroll" }}
              >
                <table _ngcontent-serverapp-c86 className="table-s">
                  <tbody _ngcontent-serverapp-c86>
                    <tr _ngcontent-serverapp-c86>
                      <th _ngcontent-serverapp-c86>Sport</th>
                      <th _ngcontent-serverapp-c86>Event</th>
                      <th _ngcontent-serverapp-c86>Market</th>
                      <th _ngcontent-serverapp-c86>selName</th>
                      <th _ngcontent-serverapp-c86>Type</th>
                      <th _ngcontent-serverapp-c86>Odds</th>
                      <th _ngcontent-serverapp-c86>Result</th>
                    </tr>
                    {/**/}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </app-modal>
        <app-modal _ngcontent-serverapp-c86 _nghost-serverapp-c43>
          <div
            _ngcontent-serverapp-c43
            id="createModal"
            className="pop_bg"
            style={{ height: "100%", width: "100%", display: "none" }}
          >
            <div _ngcontent-serverapp-c43 className="pop_box pop_refer">
              {/**/}
              <h3 _ngcontent-serverapp-c86 style={{ display: "flex" }}>
                Confirm clean live bets{" "}
                <a _ngcontent-serverapp-c86 className="close_pop">
                  close_pop
                </a>
              </h3>
              <span _ngcontent-serverapp-c86>
                <b _ngcontent-serverapp-c86>
                  (Note : Do not clear it during the big event.)
                </b>
              </span>
              <div
                _ngcontent-serverapp-c86
                className="modal-content mdclass"
                style={{ "box-shadow": "none", "margin-top": "10px" }}
              >
                <p _ngcontent-serverapp-c86>
                  {" "}
                  Are You sure you want clean live bets{" "}
                </p>
              </div>
              <ul _ngcontent-serverapp-c86 className="btn-wrap">
                <li _ngcontent-serverapp-c86>
                  <button _ngcontent-serverapp-c86 className="btn">
                    Cancel
                  </button>
                </li>
                <li _ngcontent-serverapp-c86>
                  <button
                    _ngcontent-serverapp-c86
                    id="Btn"
                    type="submit"
                    className="btn-send"
                    style={{ width: "84px" }}
                  >
                    {" "}
                    OK{" "}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </app-modal>
      </app-bet-list-live>
   
  );
};

export default BetListLive;
