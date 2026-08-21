import React from "react";
import Select from "react-select";
const BetList = () => {
  const marketOptions = [
    { value: "all", label: "Select Market" },
    { value: "football", label: "Football" },
    { value: "cricket", label: "Cricket" },
    { value: "tennis", label: "Tennis" },
  ];

  const currencyOptions = [
    { value: "all", label: "Select Currency" },
    { value: "usd", label: "USD" },
    { value: "eur", label: "EUR" },
    { value: "gbp", label: "GBP" },
  ];
  const userOptions = [
  { value: "1", label: "User 1" },
  { value: "2", label: "User 2" },
  { value: "3", label: "User 3" },
];

const eventOptions = [
  { value: "1", label: "Event 1" },
  { value: "2", label: "Event 2" },
  { value: "3", label: "Event 3" },
];
  return (
    
      <app-betlist _nghost-serverapp-c131 className="ng-star-inserted">
        <div
          _ngcontent-serverapp-c131
          className="full-wrap"
          style={{ height: "calc(100% - 105px)" }}
        >
          <div _ngcontent-serverapp-c131 className="over-wrap">
            <div _ngcontent-serverapp-c131 className="total_all">
              <h2 _ngcontent-serverapp-c131>Bet List</h2>
              <div _ngcontent-serverapp-c131 className="spacer" />
              <span _ngcontent-serverapp-c131 className="total-users">
                {" "}
                Total Records: <strong _ngcontent-serverapp-c131>0</strong>
              </span>
              &nbsp;{" "}
              <span _ngcontent-serverapp-c131 className="total-users">
                {" "}
                Page Total PL:{" "}
                <strong _ngcontent-serverapp-c131 className="profit-text">
                  0.00{" "}
                </strong>
              </span>
            </div>
            {/**/}
            <div _ngcontent-serverapp-c131 className="function-wrap funwrap">
              <ul _ngcontent-serverapp-c131 className="input-list diaplayflex">
                <li _ngcontent-serverapp-c131 id="eventRadioBtnList">
                  <input
                    _ngcontent-serverapp-c131
                    id="All"
                    type="radio"
                    name="events"
                    defaultValue
                    defaultChecked
                  />
                  <label _ngcontent-serverapp-c131 htmlFor="All">
                    All{" "}
                  </label>
                  <input
                    _ngcontent-serverapp-c131
                    type="radio"
                    name="events"
                    className="ng-star-inserted"
                    id="Soccer"
                    defaultValue="soccer"
                  />
                  <label
                    _ngcontent-serverapp-c131
                    className="ng-star-inserted"
                    htmlFor="Soccer"
                  >
                    Soccer
                  </label>
                  {/**/}
                  <input
                    _ngcontent-serverapp-c131
                    type="radio"
                    name="events"
                    className="ng-star-inserted"
                    id="Tennis"
                    defaultValue="tennis"
                  />
                  <label
                    _ngcontent-serverapp-c131
                    className="ng-star-inserted"
                    htmlFor="Tennis"
                  >
                    Tennis
                  </label>
                  {/**/}
                  <input
                    _ngcontent-serverapp-c131
                    type="radio"
                    name="events"
                    className="ng-star-inserted"
                    id="Cricket"
                    defaultValue="cricket"
                  />
                  <label
                    _ngcontent-serverapp-c131
                    className="ng-star-inserted"
                    htmlFor="Cricket"
                  >
                    Cricket
                  </label>
                  {/**/}
                  <input
                    _ngcontent-serverapp-c131
                    type="radio"
                    name="events"
                    className="ng-star-inserted"
                    id="Bookmaker"
                    defaultValue="bookmaker"
                  />
                  <label
                    _ngcontent-serverapp-c131
                    className="ng-star-inserted"
                    htmlFor="Bookmaker"
                  >
                    Bookmaker
                  </label>
                  {/**/}
                  <input
                    _ngcontent-serverapp-c131
                    type="radio"
                    name="events"
                    className="ng-star-inserted"
                    id="Fancy"
                    defaultValue="fancy"
                  />
                  <label
                    _ngcontent-serverapp-c131
                    className="ng-star-inserted"
                    htmlFor="Fancy"
                  >
                    Fancy
                  </label>
                  {/**/}
                  <input
                    _ngcontent-serverapp-c131
                    type="radio"
                    name="events"
                    className="ng-star-inserted"
                    id="Live Casino"
                    defaultValue="Live Casino"
                  />
                  <label
                    _ngcontent-serverapp-c131
                    className="ng-star-inserted"
                    htmlFor="Live Casino"
                  >
                    Live Casino
                  </label>
                  {/**/}
                  <input
                    _ngcontent-serverapp-c131
                    type="radio"
                    name="events"
                    className="ng-star-inserted"
                    id="Premium"
                    defaultValue="premium"
                  />
                  <label
                    _ngcontent-serverapp-c131
                    className="ng-star-inserted"
                    htmlFor="Premium"
                  >
                    Premium
                  </label>
                  {/**/}
                  <input
                    _ngcontent-serverapp-c131
                    type="radio"
                    name="events"
                    className="ng-star-inserted"
                    id="Horse Racing"
                    defaultValue="horseracing"
                  />
                  <label
                    _ngcontent-serverapp-c131
                    className="ng-star-inserted"
                    htmlFor="Horse Racing"
                  >
                    Horse Racing
                  </label>
                  {/**/}
                  <input
                    _ngcontent-serverapp-c131
                    type="radio"
                    name="events"
                    className="ng-star-inserted"
                    id="Greyhound Racing"
                    defaultValue="greyhound"
                  />
                  <label
                    _ngcontent-serverapp-c131
                    className="ng-star-inserted"
                    htmlFor="Greyhound Racing"
                  >
                    Greyhound Racing
                  </label>
                  {/**/}
                  <input
                    _ngcontent-serverapp-c131
                    type="radio"
                    name="events"
                    className="ng-star-inserted"
                    id="X-Games"
                    defaultValue="x-games"
                  />
                  <label
                    _ngcontent-serverapp-c131
                    className="ng-star-inserted"
                    htmlFor="X-Games"
                  >
                    X-Games
                  </label>
                  {/**/}
                  <input
                    _ngcontent-serverapp-c131
                    type="radio"
                    name="events"
                    className="ng-star-inserted"
                    id="Kabaddi"
                    defaultValue="kabaddi"
                  />
                  <label
                    _ngcontent-serverapp-c131
                    className="ng-star-inserted"
                    htmlFor="Kabaddi"
                  >
                    Kabaddi
                  </label>
                  {/**/}
                  <input
                    _ngcontent-serverapp-c131
                    type="radio"
                    name="events"
                    className="ng-star-inserted"
                    id="Election"
                    defaultValue="election"
                  />
                  <label
                    _ngcontent-serverapp-c131
                    className="ng-star-inserted"
                    htmlFor="Election"
                  >
                    Election
                  </label>
                  {/**/}
                  {/**/}
                </li>
              </ul>
              <ul
                _ngcontent-serverapp-c131
                className="input-list contentclass wrapInput"
              >
                <div
                  _ngcontent-serverapp-c131
                  id="statusCondition"
                  style={{ display: "flex" }}
                >
                  <li _ngcontent-serverapp-c131>
                    <label _ngcontent-serverapp-c131>Bet Status:</label>
                  </li>
                  <li _ngcontent-serverapp-c131>
                    <select
                      _ngcontent-serverapp-c131
                      name="betStatus"
                      id="betStatus"
                      className="ng-untouched ng-pristine ng-valid"
                    >
                      <option
                        _ngcontent-serverapp-c131
                        className="ng-star-inserted"
                        value="0: Object"
                      >
                        {" "}
                        All{" "}
                      </option>
                      <option
                        _ngcontent-serverapp-c131
                        className="ng-star-inserted"
                        value="1: Object"
                      >
                        {" "}
                        Settled{" "}
                      </option>
                      <option
                        _ngcontent-serverapp-c131
                        className="ng-star-inserted"
                        value="2: Object"
                      >
                        {" "}
                        Cancelled{" "}
                      </option>
                      <option
                        _ngcontent-serverapp-c131
                        className="ng-star-inserted"
                        value="3: Object"
                      >
                        {" "}
                        Voided{" "}
                      </option>
                      {/**/}
                    </select>
                  </li>
                  {/**/}
                </div>
                <li _ngcontent-serverapp-c131>
                  <label _ngcontent-serverapp-c131>Period:</label>
                </li>
                <li _ngcontent-serverapp-c131>
                  <input
                    _ngcontent-serverapp-c131
                    type="text"
                    placeholder="YYYY-MM-DD"
                    autoComplete="off"
                    className="cal-input mobwidth ng-untouched ng-dirty ng-valid"
                  />
                  <dp-date-picker className="ng-star-inserted dp-material">
                    <div>
                      <div
                        className="dp-input-container"
                        hidden
                        data-hidden="true"
                      >
                        <input
                          type="text"
                          className="dp-picker-input ng-untouched ng-pristine ng-valid"
                          placeholder
                        />
                      </div>
                    </div>
                    <div>
                      <div
                        className="dp-material dp-popup"
                        hidden
                        data-hidden="true"
                      >
                        <dp-day-calendar className="dp-material ng-untouched ng-valid ng-star-inserted ng-dirty">
                          <div className="dp-day-calendar-container ng-star-inserted">
                            <dp-calendar-nav className="dp-material">
                              <div className="dp-calendar-nav-container">
                                <div className="dp-nav-header">
                                  <span hidden data-hidden="true">
                                    Aug, 2026
                                  </span>
                                  <button
                                    type="button"
                                    className="dp-nav-header-btn"
                                    data-hidden="false"
                                  >
                                    Aug, 2026
                                  </button>
                                </div>
                                <div className="dp-nav-btns-container">
                                  <div className="dp-calendar-nav-container-left">
                                    {/**/}
                                    <button
                                      type="button"
                                      className="dp-calendar-nav-left"
                                      data-hidden="false"
                                    />
                                  </div>
                                  <button
                                    type="button"
                                    className="dp-current-location-btn ng-star-inserted"
                                  />
                                  {/**/}
                                  <div className="dp-calendar-nav-container-right">
                                    <button
                                      type="button"
                                      className="dp-calendar-nav-right"
                                      data-hidden="false"
                                    />
                                    {/**/}
                                  </div>
                                </div>
                              </div>
                            </dp-calendar-nav>
                            <div className="dp-calendar-wrapper">
                              <div className="dp-weekdays">
                                <span className="dp-calendar-weekday ng-star-inserted">
                                  Sun
                                </span>
                                <span className="dp-calendar-weekday ng-star-inserted">
                                  Mon
                                </span>
                                <span className="dp-calendar-weekday ng-star-inserted">
                                  Tue
                                </span>
                                <span className="dp-calendar-weekday ng-star-inserted">
                                  Wed
                                </span>
                                <span className="dp-calendar-weekday ng-star-inserted">
                                  Thu
                                </span>
                                <span className="dp-calendar-weekday ng-star-inserted">
                                  Fri
                                </span>
                                <span className="dp-calendar-weekday ng-star-inserted">
                                  Sat
                                </span>
                                {/**/}
                              </div>
                              <div className="dp-calendar-week ng-star-inserted">
                                {/**/}
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-prev-month ng-star-inserted"
                                  data-date="2026-07-26"
                                >
                                  26
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-prev-month ng-star-inserted"
                                  data-date="2026-07-27"
                                >
                                  27
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-prev-month ng-star-inserted"
                                  data-date="2026-07-28"
                                >
                                  28
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-prev-month ng-star-inserted"
                                  data-date="2026-07-29"
                                >
                                  29
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-prev-month ng-star-inserted"
                                  data-date="2026-07-30"
                                >
                                  30
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-prev-month ng-star-inserted"
                                  data-date="2026-07-31"
                                >
                                  31
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-01"
                                >
                                  01
                                </button>
                                {/**/}
                              </div>
                              <div className="dp-calendar-week ng-star-inserted">
                                {/**/}
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-02"
                                >
                                  02
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-03"
                                >
                                  03
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-04"
                                >
                                  04
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-05"
                                >
                                  05
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-06"
                                >
                                  06
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-07"
                                >
                                  07
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-08"
                                >
                                  08
                                </button>
                                {/**/}
                              </div>
                              <div className="dp-calendar-week ng-star-inserted">
                                {/**/}
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-09"
                                >
                                  09
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-10"
                                >
                                  10
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-11"
                                >
                                  11
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-12"
                                >
                                  12
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-13"
                                >
                                  13
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-14"
                                >
                                  14
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-15"
                                >
                                  15
                                </button>
                                {/**/}
                              </div>
                              <div className="dp-calendar-week ng-star-inserted">
                                {/**/}
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-16"
                                >
                                  16
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-17"
                                >
                                  17
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-18"
                                >
                                  18
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-selected dp-current-month ng-star-inserted"
                                  data-date="2026-08-19"
                                >
                                  19
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month dp-current-day ng-star-inserted"
                                  data-date="2026-08-20"
                                >
                                  20
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-21"
                                >
                                  21
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-22"
                                >
                                  22
                                </button>
                                {/**/}
                              </div>
                              <div className="dp-calendar-week ng-star-inserted">
                                {/**/}
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-23"
                                >
                                  23
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-24"
                                >
                                  24
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-25"
                                >
                                  25
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-26"
                                >
                                  26
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-27"
                                >
                                  27
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-28"
                                >
                                  28
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-29"
                                >
                                  29
                                </button>
                                {/**/}
                              </div>
                              <div className="dp-calendar-week ng-star-inserted">
                                {/**/}
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-30"
                                >
                                  30
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-31"
                                >
                                  31
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-next-month ng-star-inserted"
                                  data-date="2026-09-01"
                                >
                                  01
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-next-month ng-star-inserted"
                                  data-date="2026-09-02"
                                >
                                  02
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-next-month ng-star-inserted"
                                  data-date="2026-09-03"
                                >
                                  03
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-next-month ng-star-inserted"
                                  data-date="2026-09-04"
                                >
                                  04
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-next-month ng-star-inserted"
                                  data-date="2026-09-05"
                                >
                                  05
                                </button>
                                {/**/}
                              </div>
                              {/**/}
                            </div>
                          </div>
                          {/**/}
                          {/**/}
                        </dp-day-calendar>
                        {/**/}
                        {/**/}
                        {/**/}
                        {/**/}
                      </div>
                    </div>
                  </dp-date-picker>
                  {/**/}
                  <input
                    _ngcontent-serverapp-c131
                    id="startTime"
                    type="text"
                    placeholder="09:00"
                    maxLength={5}
                    className="time-input ng-untouched ng-dirty ng-invalid"
                  />
                  <dp-date-picker className="ng-star-inserted dp-material">
                    <div>
                      <div
                        className="dp-input-container"
                        hidden
                        data-hidden="true"
                      >
                        <input
                          type="text"
                          className="dp-picker-input ng-untouched ng-pristine ng-valid"
                          placeholder
                        />
                      </div>
                    </div>
                    <div>
                      <div
                        className="dp-material dp-popup"
                        hidden
                        data-hidden="true"
                      >
                        {/**/}
                        {/**/}
                        <dp-time-select className="dp-material ng-untouched ng-valid ng-star-inserted ng-dirty">
                          <ul className="dp-time-select-controls">
                            <li className="dp-time-select-control dp-time-select-control-hours">
                              <button
                                type="button"
                                className="dp-time-select-control-up"
                              />
                              <span className="dp-time-select-display-hours">
                                09
                              </span>
                              <button
                                type="button"
                                className="dp-time-select-control-down"
                              />
                            </li>
                            <li className="dp-time-select-control dp-time-select-separator">
                              :
                            </li>
                            <li className="dp-time-select-control dp-time-select-control-minutes">
                              <button
                                type="button"
                                className="dp-time-select-control-up"
                              />
                              <span className="dp-time-select-display-minutes">
                                00
                              </span>
                              <button
                                type="button"
                                className="dp-time-select-control-down"
                              />
                            </li>
                            <li className="dp-time-select-control dp-time-select-separator ng-star-inserted">
                              :
                            </li>
                            <li className="dp-time-select-control dp-time-select-control-seconds ng-star-inserted">
                              <button
                                type="button"
                                className="dp-time-select-control-up"
                              />
                              <span className="dp-time-select-display-seconds">
                                00
                              </span>
                              <button
                                type="button"
                                className="dp-time-select-control-down"
                              />
                            </li>
                            {/**/}
                            {/**/}
                            <li className="dp-time-select-control dp-time-select-control-meridiem ng-star-inserted">
                              <button
                                type="button"
                                className="dp-time-select-control-up"
                              />
                              <span className="dp-time-select-display-meridiem">
                                AM
                              </span>
                              <button
                                type="button"
                                className="dp-time-select-control-down"
                              />
                            </li>
                            {/**/}
                          </ul>
                        </dp-time-select>
                        {/**/}
                        {/**/}
                      </div>
                    </div>
                  </dp-date-picker>
                  {/**/} to <br _ngcontent-serverapp-c131 />
                  <input
                    _ngcontent-serverapp-c131
                    id="endDate"
                    type="text"
                    placeholder="YYYY-MM-DD"
                    autoComplete="off"
                    className="cal-input mobwidth ng-untouched ng-dirty ng-valid"
                  />
                  <dp-date-picker className="ng-star-inserted dp-material">
                    <div>
                      <div
                        className="dp-input-container"
                        hidden
                        data-hidden="true"
                      >
                        <input
                          type="text"
                          className="dp-picker-input ng-untouched ng-pristine ng-valid"
                          placeholder
                        />
                      </div>
                    </div>
                    <div>
                      <div
                        className="dp-material dp-popup"
                        hidden
                        data-hidden="true"
                      >
                        <dp-day-calendar className="dp-material ng-untouched ng-valid ng-star-inserted ng-dirty">
                          <div className="dp-day-calendar-container ng-star-inserted">
                            <dp-calendar-nav className="dp-material">
                              <div className="dp-calendar-nav-container">
                                <div className="dp-nav-header">
                                  <span hidden data-hidden="true">
                                    Aug, 2026
                                  </span>
                                  <button
                                    type="button"
                                    className="dp-nav-header-btn"
                                    data-hidden="false"
                                  >
                                    Aug, 2026
                                  </button>
                                </div>
                                <div className="dp-nav-btns-container">
                                  <div className="dp-calendar-nav-container-left">
                                    {/**/}
                                    <button
                                      type="button"
                                      className="dp-calendar-nav-left"
                                      data-hidden="false"
                                    />
                                  </div>
                                  <button
                                    type="button"
                                    className="dp-current-location-btn ng-star-inserted"
                                  />
                                  {/**/}
                                  <div className="dp-calendar-nav-container-right">
                                    <button
                                      type="button"
                                      className="dp-calendar-nav-right"
                                      data-hidden="false"
                                    />
                                    {/**/}
                                  </div>
                                </div>
                              </div>
                            </dp-calendar-nav>
                            <div className="dp-calendar-wrapper">
                              <div className="dp-weekdays">
                                <span className="dp-calendar-weekday ng-star-inserted">
                                  Sun
                                </span>
                                <span className="dp-calendar-weekday ng-star-inserted">
                                  Mon
                                </span>
                                <span className="dp-calendar-weekday ng-star-inserted">
                                  Tue
                                </span>
                                <span className="dp-calendar-weekday ng-star-inserted">
                                  Wed
                                </span>
                                <span className="dp-calendar-weekday ng-star-inserted">
                                  Thu
                                </span>
                                <span className="dp-calendar-weekday ng-star-inserted">
                                  Fri
                                </span>
                                <span className="dp-calendar-weekday ng-star-inserted">
                                  Sat
                                </span>
                                {/**/}
                              </div>
                              <div className="dp-calendar-week ng-star-inserted">
                                {/**/}
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-prev-month ng-star-inserted"
                                  data-date="2026-07-26"
                                >
                                  26
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-prev-month ng-star-inserted"
                                  data-date="2026-07-27"
                                >
                                  27
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-prev-month ng-star-inserted"
                                  data-date="2026-07-28"
                                >
                                  28
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-prev-month ng-star-inserted"
                                  data-date="2026-07-29"
                                >
                                  29
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-prev-month ng-star-inserted"
                                  data-date="2026-07-30"
                                >
                                  30
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-prev-month ng-star-inserted"
                                  data-date="2026-07-31"
                                >
                                  31
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-01"
                                >
                                  01
                                </button>
                                {/**/}
                              </div>
                              <div className="dp-calendar-week ng-star-inserted">
                                {/**/}
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-02"
                                >
                                  02
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-03"
                                >
                                  03
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-04"
                                >
                                  04
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-05"
                                >
                                  05
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-06"
                                >
                                  06
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-07"
                                >
                                  07
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-08"
                                >
                                  08
                                </button>
                                {/**/}
                              </div>
                              <div className="dp-calendar-week ng-star-inserted">
                                {/**/}
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-09"
                                >
                                  09
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-10"
                                >
                                  10
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-11"
                                >
                                  11
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-12"
                                >
                                  12
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-13"
                                >
                                  13
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-14"
                                >
                                  14
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-15"
                                >
                                  15
                                </button>
                                {/**/}
                              </div>
                              <div className="dp-calendar-week ng-star-inserted">
                                {/**/}
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-16"
                                >
                                  16
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-17"
                                >
                                  17
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-18"
                                >
                                  18
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-19"
                                >
                                  19
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month dp-current-day ng-star-inserted"
                                  data-date="2026-08-20"
                                >
                                  20
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-selected dp-current-month ng-star-inserted"
                                  data-date="2026-08-21"
                                >
                                  21
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-22"
                                >
                                  22
                                </button>
                                {/**/}
                              </div>
                              <div className="dp-calendar-week ng-star-inserted">
                                {/**/}
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-23"
                                >
                                  23
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-24"
                                >
                                  24
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-25"
                                >
                                  25
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-26"
                                >
                                  26
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-27"
                                >
                                  27
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-28"
                                >
                                  28
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-29"
                                >
                                  29
                                </button>
                                {/**/}
                              </div>
                              <div className="dp-calendar-week ng-star-inserted">
                                {/**/}
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-30"
                                >
                                  30
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-current-month ng-star-inserted"
                                  data-date="2026-08-31"
                                >
                                  31
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-next-month ng-star-inserted"
                                  data-date="2026-09-01"
                                >
                                  01
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-next-month ng-star-inserted"
                                  data-date="2026-09-02"
                                >
                                  02
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-next-month ng-star-inserted"
                                  data-date="2026-09-03"
                                >
                                  03
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-next-month ng-star-inserted"
                                  data-date="2026-09-04"
                                >
                                  04
                                </button>
                                <button
                                  type="button"
                                  className="dp-calendar-day dp-next-month ng-star-inserted"
                                  data-date="2026-09-05"
                                >
                                  05
                                </button>
                                {/**/}
                              </div>
                              {/**/}
                            </div>
                          </div>
                          {/**/}
                          {/**/}
                        </dp-day-calendar>
                        {/**/}
                        {/**/}
                        {/**/}
                        {/**/}
                      </div>
                    </div>
                  </dp-date-picker>
                  {/**/}
                  <input
                    _ngcontent-serverapp-c131
                    id="endTime"
                    type="text"
                    placeholder="08:59"
                    maxLength={5}
                    className="time-input ng-untouched ng-dirty ng-invalid"
                  />
                  <dp-date-picker className="ng-star-inserted dp-material">
                    <div>
                      <div
                        className="dp-input-container"
                        hidden
                        data-hidden="true"
                      >
                        <input
                          type="text"
                          className="dp-picker-input ng-untouched ng-pristine ng-valid"
                          placeholder
                        />
                      </div>
                    </div>
                    <div>
                      <div
                        className="dp-material dp-popup"
                        hidden
                        data-hidden="true"
                      >
                        {/**/}
                        {/**/}
                        <dp-time-select className="dp-material ng-untouched ng-valid ng-star-inserted ng-dirty">
                          <ul className="dp-time-select-controls">
                            <li className="dp-time-select-control dp-time-select-control-hours">
                              <button
                                type="button"
                                className="dp-time-select-control-up"
                              />
                              <span className="dp-time-select-display-hours">
                                08
                              </span>
                              <button
                                type="button"
                                className="dp-time-select-control-down"
                              />
                            </li>
                            <li className="dp-time-select-control dp-time-select-separator">
                              :
                            </li>
                            <li className="dp-time-select-control dp-time-select-control-minutes">
                              <button
                                type="button"
                                className="dp-time-select-control-up"
                              />
                              <span className="dp-time-select-display-minutes">
                                59
                              </span>
                              <button
                                type="button"
                                className="dp-time-select-control-down"
                              />
                            </li>
                            <li className="dp-time-select-control dp-time-select-separator ng-star-inserted">
                              :
                            </li>
                            <li className="dp-time-select-control dp-time-select-control-seconds ng-star-inserted">
                              <button
                                type="button"
                                className="dp-time-select-control-up"
                              />
                              <span className="dp-time-select-display-seconds">
                                59
                              </span>
                              <button
                                type="button"
                                className="dp-time-select-control-down"
                              />
                            </li>
                            {/**/}
                            {/**/}
                            <li className="dp-time-select-control dp-time-select-control-meridiem ng-star-inserted">
                              <button
                                type="button"
                                className="dp-time-select-control-up"
                              />
                              <span className="dp-time-select-display-meridiem">
                                AM
                              </span>
                              <button
                                type="button"
                                className="dp-time-select-control-down"
                              />
                            </li>
                            {/**/}
                          </ul>
                        </dp-time-select>
                        {/**/}
                        {/**/}
                      </div>
                    </div>
                  </dp-date-picker>
                  {/**/}
                </li>
                <div _ngcontent-serverapp-c131 className="diaplayflex divblock">
                  <li _ngcontent-serverapp-c131 className="widthfull">
                    <a
                      _ngcontent-serverapp-c131
                      id="today"
                      className="btn widthfull"
                    >
                      Just for today
                    </a>
                  </li>
                  <li _ngcontent-serverapp-c131 className="widthfull">
                    <a
                      _ngcontent-serverapp-c131
                      id="yesterday"
                      className="btn widthfull"
                    >
                      From yesterday
                    </a>
                  </li>
                </div>
                <li _ngcontent-serverapp-c131 style={{ display: "none" }}>
                  (Time Zone:IST)
                </li>
                <div _ngcontent-serverapp-c131 className="diaplayflex divblock">
                  <li _ngcontent-serverapp-c131 className="widthfull">
                    <a
                      _ngcontent-serverapp-c131
                      id="getPL"
                      className="btn-send"
                    >
                      Show Default
                    </a>
                  </li>
                  <li _ngcontent-serverapp-c131 className="widthfull">
                    <a
                      _ngcontent-serverapp-c131
                      id="getPL"
                      className="btn-send"
                    >
                      Get History
                    </a>
                  </li>
                </div>
                <div _ngcontent-serverapp-c131 className="diaplayflex divblock">
                  <li _ngcontent-serverapp-c131>
                    <label _ngcontent-serverapp-c131>Last:</label>
                    <select
                      _ngcontent-serverapp-c131
                      name="limit"
                      id="limit"
                      className="ng-untouched ng-pristine ng-valid"
                    >
                      <option _ngcontent-serverapp-c131 value={10}>
                        10 Txn
                      </option>
                      <option _ngcontent-serverapp-c131 value={25}>
                        25 Txn
                      </option>
                      <option _ngcontent-serverapp-c131 value={50}>
                        50 Txn
                      </option>
                      <option _ngcontent-serverapp-c131 value={100}>
                        100 Txn
                      </option>
                      <option _ngcontent-serverapp-c131 value={500}>
                        500 Txn
                      </option>
                      <option _ngcontent-serverapp-c131 value={1000} selected>
                        1000 Txn
                      </option>
                      <option _ngcontent-serverapp-c131 value={0}>
                        Full - 0
                      </option>
                    </select>
                  </li>
                  <li _ngcontent-serverapp-c131>
                    <label _ngcontent-serverapp-c131>Sort by:</label>
                    <select
                      _ngcontent-serverapp-c131
                      name="limit"
                      id="limit"
                      className="ng-untouched ng-pristine ng-valid"
                    >
                      <option _ngcontent-serverapp-c131 value={1}>
                        Bet Settled Time
                      </option>
                      <option _ngcontent-serverapp-c131 value={0}>
                        Bet Taken Time
                      </option>
                    </select>
                  </li>
                </div>
              </ul>
              <ul _ngcontent-serverapp-c131 className="input-list contentclass">
                <li _ngcontent-serverapp-c131 style={{ display: "none" }}>
                  <a
                    _ngcontent-serverapp-c131
                    id="last7days"
                    href="#"
                    className="btn"
                  >
                    Last 7 days
                  </a>
                </li>
                <li _ngcontent-serverapp-c131 style={{ display: "none" }}>
                  <a
                    _ngcontent-serverapp-c131
                    id="last30days"
                    href="#"
                    className="btn"
                  >
                    Last 30 days
                  </a>
                </li>
                <li _ngcontent-serverapp-c131 style={{ display: "none" }}>
                  <a
                    _ngcontent-serverapp-c131
                    id="last2months"
                    href="#"
                    className="btn"
                  >
                    {" "}
                    Last 2 Months
                  </a>
                </li>
                <li _ngcontent-serverapp-c131 style={{ display: "none" }}>
                  <a
                    _ngcontent-serverapp-c131
                    id="last3months"
                    href="#"
                    className="btn"
                  >
                    {" "}
                    Last 3 Months
                  </a>
                </li>
                <div _ngcontent-serverapp-c131 className="diaplayflex divblock">
                  <li _ngcontent-serverapp-c131>
                    <input
                      _ngcontent-serverapp-c131
                      appinputrestriction="noSpecialChars3"
                      type="text"
                      name
                      id
                      placeholder="Search Betid"
                      className="ng-untouched ng-pristine ng-valid"
                    />
                  </li>
                  <li _ngcontent-serverapp-c131 className="ng-star-inserted">
                    <input
                      _ngcontent-serverapp-c131
                      type="text"
                      name="ipAddress"
                      placeholder="Search IP"
                      className="ng-untouched ng-pristine ng-valid"
                    />
                  </li>
                  {/**/}
                  <li _ngcontent-serverapp-c131>
                    <label _ngcontent-serverapp-c131> Stake </label>
                    <input
                      _ngcontent-serverapp-c131
                      type="number"
                      name="Volume Check"
                      placeholder="Volume"
                      className="ng-untouched ng-pristine ng-valid"
                    />
                  </li>
                </div>
               <div
  _ngcontent-serverapp-c131
  className="diaplayflex1 divblock"
>
  {/**/}
  {/**/}

  {/* User Dropdown */}
  <li
    _ngcontent-serverapp-c131
    className="widthfull ng-star-inserted"
  >
    <div
      className="ng-tns-c130-1 ng-star-inserted ng-untouched ng-pristine ng-valid"
    >
      <Select
        options={userOptions}
        placeholder="Select User"
        isSearchable={false}
        isClearable={true}
        className="ng-tns-c130-1 p-dropdown p-component p-dropdown-clearable"
        classNamePrefix="p-dropdown"
      />
    </div>
  </li>

  {/**/}

  <li _ngcontent-serverapp-c131>
    {/**/}
  </li>

  {/* Event Dropdown */}
  <li
    _ngcontent-serverapp-c131
    className="widthfull"
  >
    <div
      className="widthfull ng-select ng-select-single ng-select-searchable ng-select-clearable ng-untouched ng-pristine ng-valid"
    >
      <Select
        options={eventOptions}
        placeholder="Select Event"
        isSearchable={true}
        isClearable={true}
        className="widthfull"
        classNamePrefix="ng"
      />
    </div>
  </li>
</div>
                <div
                  _ngcontent-serverapp-c131
                  className="diaplayflex1 divblock"
                >
                  <li _ngcontent-serverapp-c131 className="widthfull">
                    <div className="widthfull ng-select ng-select-single ng-select-searchable ng-select-clearable ng-untouched ng-pristine ng-valid">
                      <Select
                        options={marketOptions}
                        placeholder="Select Market"
                        isSearchable={true}
                        isClearable={true}
                        className="widthfull"
                        classNamePrefix="ng"
                      />
                    </div>
                  </li>

                  <li _ngcontent-serverapp-c131 className="widthfull">
                    <div className="widthfull ng-select ng-select-single ng-select-searchable ng-select-clearable ng-untouched ng-pristine ng-valid">
                      <Select
                        options={currencyOptions}
                        placeholder="Select Currency"
                        isSearchable={true}
                        isClearable={true}
                        className="widthfull"
                        classNamePrefix="ng"
                      />
                    </div>
                  </li>
                </div>
                <li _ngcontent-serverapp-c131>{/**/}</li>
              </ul>
            </div>
            <div _ngcontent-serverapp-c131 className="total_all">
              <span _ngcontent-serverapp-c131 />
              <div _ngcontent-serverapp-c131 className="spacer" />
   
            </div>
            <div
              _ngcontent-serverapp-c131
              className="table-responsive data-table"
            >
              <div _ngcontent-serverapp-c131 id="report">
                <table
                  _ngcontent-serverapp-c131
                  id="table_DL"
                  className="table-s"
                  style={{ display: "table" }}
                >
                  <tbody _ngcontent-serverapp-c131>
                    <tr _ngcontent-serverapp-c131>
                      {/**/}
                      <th
                        _ngcontent-serverapp-c131
                        width="5%"
                        data-order="asc"
                        data-name="playerId"
                        className="align-L sort_asc ng-star-inserted"
                      >
                        {" "}
                        SA ID{" "}
                      </th>
                      {/**/}
                      <th
                        _ngcontent-serverapp-c131
                        width="5%"
                        data-order="asc"
                        data-name="playerId"
                        className="align-L sort_asc ng-star-inserted"
                      >
                        {" "}
                        SM ID{" "}
                      </th>
                      {/**/}
                      <th
                        _ngcontent-serverapp-c131
                        width="5%"
                        data-order="asc"
                        data-name="playerId"
                        className="align-L sort_asc ng-star-inserted"
                      >
                        {" "}
                        MA ID{" "}
                      </th>
                      {/**/}
                      {/**/}
                      <th
                        _ngcontent-serverapp-c131
                        width="5%"
                        data-order="asc"
                        data-name="playerId"
                        className="align-L sort_asc"
                      >
                        {" "}
                        PL ID{" "}
                      </th>
                      <th
                        _ngcontent-serverapp-c131
                        width="5%"
                        data-order="asc"
                        data-name="consolidateId"
                        className="align-L sort_asc"
                      >
                        {" "}
                        Bet ID {/**/}
                      </th>
                      <th
                        _ngcontent-serverapp-c131
                        id="betTime"
                        width="6%"
                        data-order="asc"
                        data-name="betTime"
                        className="align-L sort_asc"
                      >
                        Bet taken{" "}
                      </th>
                      <th
                        _ngcontent-serverapp-c131
                        id="settlementTime"
                        width="7%"
                        data-order="asc"
                        data-name="settlementTime"
                        className="align-L sort_asc"
                      >
                        Bet Settled{" "}
                      </th>
                      <th
                        _ngcontent-serverapp-c131
                        width
                        data-order="asc"
                        data-name="eventName"
                        className="align-L sort_asc"
                      >
                        {" "}
                        Event{" "}
                      </th>
                      <th
                        _ngcontent-serverapp-c131
                        width="7%"
                        data-order="asc"
                        data-name="selName"
                        className="align-L sort_asc"
                      >
                        {" "}
                        Market{" "}
                      </th>
                      <th
                        _ngcontent-serverapp-c131
                        width="4%"
                        data-order="asc"
                        data-name="betType"
                        className="align-C sort_asc"
                      >
                        {" "}
                        Type{" "}
                      </th>
                      <th
                        _ngcontent-serverapp-c131
                        width="7%"
                        data-order="asc"
                        data-name="odds"
                        className="sort_asc"
                      >
                        {" "}
                        Odds req.{" "}
                      </th>
                      <th
                        _ngcontent-serverapp-c131
                        width="5%"
                        data-order="asc"
                        data-name="stake"
                        className="sort_asc"
                      >
                        {" "}
                        Stake{" "}
                      </th>
                      <th
                        _ngcontent-serverapp-c131
                        width="5%"
                        name="profitOrLossTh"
                        data-order="asc"
                        data-name="PL"
                        className="sort_asc"
                      >
                        {" "}
                        Profit/Loss
                      </th>
                      <th
                        _ngcontent-serverapp-c131
                        width="5%"
                        name="status"
                        data-order="asc"
                        data-name="status"
                        className="sort_asc"
                      >
                        {" "}
                        Status
                      </th>
                      {/**/}
                      <th
                        _ngcontent-serverapp-c131
                        width="5%"
                        name="remark"
                        data-order="asc"
                        data-name="remark"
                        className="align-C sort_asc"
                      >
                        Remark
                      </th>
                      <th
                        _ngcontent-serverapp-c131
                        width="7%"
                        data-order="asc"
                        data-name="ipAddress"
                        className="align-L sort_asc"
                      >
                        {" "}
                        IP Address{" "}
                      </th>
                      {/**/}
                      {/**/}
                      {/**/}
                    </tr>
                    {/**/}
                  </tbody>
                </table>
                <p
                  _ngcontent-serverapp-c131
                  className="table-other"
                  style={{ "margin-top": "5px" }}
                >
                  {" "}
                  Bet List is shown net of commission.{" "}
                </p>
              </div>
              {/**/}
            </div>
          </div>
        </div>
        <app-modal _ngcontent-serverapp-c131 _nghost-serverapp-c43>
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
              <h3 _ngcontent-serverapp-c131 style={{ display: "flex" }}>
                Confirm Void Bet{" "}
                <a _ngcontent-serverapp-c131 className="close_pop">
                  close_pop
                </a>
              </h3>
              <div _ngcontent-serverapp-c131 className="modal-content">
                <table _ngcontent-serverapp-c131 className="table-s">
                  <tbody _ngcontent-serverapp-c131>
                    <tr _ngcontent-serverapp-c131>
                      <th _ngcontent-serverapp-c131>UID</th>
                      <th _ngcontent-serverapp-c131>Event</th>
                      <th _ngcontent-serverapp-c131>Bet taken</th>
                      <th _ngcontent-serverapp-c131>Market</th>
                      <th _ngcontent-serverapp-c131>Type</th>
                      <th _ngcontent-serverapp-c131>Odds</th>
                      <th _ngcontent-serverapp-c131>Stake</th>
                    </tr>
                    <tr _ngcontent-serverapp-c131>
                      <td _ngcontent-serverapp-c131 />
                      <td _ngcontent-serverapp-c131>
                        {" "}
                        {/**/}{" "}
                        <img
                          _ngcontent-serverapp-c131
                          src="assets/images/transparent.gif"
                          className="fromto"
                        />
                      </td>
                      <td _ngcontent-serverapp-c131>
                        <span
                          _ngcontent-serverapp-c131
                          className="small-date"
                        ></span>
                      </td>
                      <td _ngcontent-serverapp-c131 />
                      <td _ngcontent-serverapp-c131>
                        <span _ngcontent-serverapp-c131></span>
                      </td>
                      <td _ngcontent-serverapp-c131 />
                      <td _ngcontent-serverapp-c131 />
                    </tr>
                  </tbody>
                </table>
              </div>
              <form
                _ngcontent-serverapp-c131
                noValidate
                className="ng-untouched ng-pristine ng-invalid"
              >
                <ul _ngcontent-serverapp-c131 className="btn-wrap">
                  <li _ngcontent-serverapp-c131>
                    <select
                      _ngcontent-serverapp-c131
                      id="select"
                      style={{
                        border: "1px solid #bebaba",
                        "border-radius": "3px",
                      }}
                      className="ng-untouched ng-pristine ng-valid"
                    >
                      <option
                        _ngcontent-serverapp-c131
                        className="ng-star-inserted"
                        value="undefined"
                      >
                        {" "}
                        Select remark{" "}
                      </option>
                      <option
                        _ngcontent-serverapp-c131
                        className="ng-star-inserted"
                        value="Bets voided due to wrong rate"
                      >
                        {" "}
                        Bets voided due to wrong rate{" "}
                      </option>
                      <option
                        _ngcontent-serverapp-c131
                        className="ng-star-inserted"
                        value="All bets were voided due to no result / Abandoned"
                      >
                        {" "}
                        All bets were voided due to no result / Abondoned{" "}
                      </option>
                      <option
                        _ngcontent-serverapp-c131
                        className="ng-star-inserted"
                        value="Due to cheat betting / ip match all profit bets were voided"
                      >
                        {" "}
                        Due to cheat betting / ip match all profit bets were
                        voided{" "}
                      </option>
                      <option
                        _ngcontent-serverapp-c131
                        className="ng-star-inserted"
                        value="Back / Lay bets will be voided from betfair under 1 minute"
                      >
                        {" "}
                        Back / Lay bets will be voided from betfair under 1
                        minutes{" "}
                      </option>
                      <option
                        _ngcontent-serverapp-c131
                        className="ng-star-inserted"
                        value="2 inning advance bet"
                      >
                        {" "}
                        2 inning advance bet{" "}
                      </option>
                      <option
                        _ngcontent-serverapp-c131
                        className="ng-star-inserted"
                        value="Other"
                      >
                        {" "}
                        Other{" "}
                      </option>
                      {/**/}
                    </select>
                  </li>
                  <li _ngcontent-serverapp-c131>
                    <label _ngcontent-serverapp-c131>Password:</label>
                    <input
                      _ngcontent-serverapp-c131
                      id="password"
                      type="password"
                      formcontrolname="password"
                      required
                      placeholder="Enter"
                      className="ng-untouched ng-pristine ng-invalid"
                    />
                  </li>
                  <li _ngcontent-serverapp-c131>
                    <button
                      _ngcontent-serverapp-c131
                      id="changeCreditReferenceBtn"
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
        <app-modal _ngcontent-serverapp-c131 _nghost-serverapp-c43>
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
              <div _ngcontent-serverapp-c131>
                <h3 _ngcontent-serverapp-c131 style={{ display: "flex" }}>
                  Confirm Void Bet{" "}
                  <span
                    _ngcontent-serverapp-c131
                    style={{ "margin-left": "1rem" }}
                  >
                    <label _ngcontent-serverapp-c131>Total Count:: </label>0
                  </span>
                  <a _ngcontent-serverapp-c131 className="close_pop">
                    close_pop
                  </a>
                </h3>
              </div>
              <div
                _ngcontent-serverapp-c131
                className="modal-content"
                style={{ "max-height": "500px", overflow: "auto" }}
              >
                <table _ngcontent-serverapp-c131 className="table-s">
                  <tbody _ngcontent-serverapp-c131>
                    <tr _ngcontent-serverapp-c131>
                      <th _ngcontent-serverapp-c131>UID</th>
                      <th _ngcontent-serverapp-c131>Event</th>
                      <th _ngcontent-serverapp-c131>Bet taken</th>
                      <th _ngcontent-serverapp-c131>Market</th>
                      <th _ngcontent-serverapp-c131>Type</th>
                      <th _ngcontent-serverapp-c131>Odds</th>
                      <th _ngcontent-serverapp-c131>Stake</th>
                      <th _ngcontent-serverapp-c131>Action</th>
                    </tr>
                    {/**/}
                  </tbody>
                </table>
              </div>
              <form
                _ngcontent-serverapp-c131
                noValidate
                className="ng-untouched ng-pristine ng-invalid"
              >
                <ul _ngcontent-serverapp-c131 className="btn-wrap">
                  <li _ngcontent-serverapp-c131>
                    <select
                      _ngcontent-serverapp-c131
                      id="select"
                      style={{
                        border: "1px solid #bebaba",
                        "border-radius": "3px",
                      }}
                      className="ng-untouched ng-pristine ng-valid"
                    >
                      <option
                        _ngcontent-serverapp-c131
                        value="undefined"
                        className="ng-star-inserted"
                      >
                        {" "}
                        Select remark{" "}
                      </option>
                      <option
                        _ngcontent-serverapp-c131
                        value="Bets voided due to wrong rate"
                        className="ng-star-inserted"
                      >
                        {" "}
                        Bets voided due to wrong rate{" "}
                      </option>
                      <option
                        _ngcontent-serverapp-c131
                        value="All bets were voided due to no result / Abandoned"
                        className="ng-star-inserted"
                      >
                        {" "}
                        All bets were voided due to no result / Abondoned{" "}
                      </option>
                      <option
                        _ngcontent-serverapp-c131
                        value="Due to cheat betting / ip match all profit bets were voided"
                        className="ng-star-inserted"
                      >
                        {" "}
                        Due to cheat betting / ip match all profit bets were
                        voided{" "}
                      </option>
                      <option
                        _ngcontent-serverapp-c131
                        value="Back / Lay bets will be voided from betfair under 1 minute"
                        className="ng-star-inserted"
                      >
                        {" "}
                        Back / Lay bets will be voided from betfair under 1
                        minutes{" "}
                      </option>
                      <option
                        _ngcontent-serverapp-c131
                        value="2 inning advance bet"
                        className="ng-star-inserted"
                      >
                        {" "}
                        2 inning advance bet{" "}
                      </option>
                      <option
                        _ngcontent-serverapp-c131
                        value="Other"
                        className="ng-star-inserted"
                      >
                        {" "}
                        Other{" "}
                      </option>
                      {/**/}
                    </select>
                  </li>
                  <li _ngcontent-serverapp-c131>
                    <label _ngcontent-serverapp-c131>Password:</label>
                    <input
                      _ngcontent-serverapp-c131
                      id="password"
                      type="password"
                      formcontrolname="password"
                      required
                      placeholder="Enter"
                      className="ng-untouched ng-pristine ng-invalid"
                    />
                  </li>
                  <li _ngcontent-serverapp-c131>
                    <button
                      _ngcontent-serverapp-c131
                      id="changeCreditReferenceBtn"
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
        <app-modal _ngcontent-serverapp-c131 _nghost-serverapp-c43>
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
              <div _ngcontent-serverapp-c131>
                <h3 _ngcontent-serverapp-c131 style={{ display: "flex" }}>
                  Confirm Cancel Bet{" "}
                  <a _ngcontent-serverapp-c131 className="close_pop">
                    close_pop
                  </a>
                </h3>
              </div>
              <div
                _ngcontent-serverapp-c131
                className="modal-content"
                style={{ "max-height": "500px", overflow: "auto" }}
              >
                <table _ngcontent-serverapp-c131 className="table-s">
                  <tbody _ngcontent-serverapp-c131>
                    <tr _ngcontent-serverapp-c131>
                      <th _ngcontent-serverapp-c131>UID</th>
                      <th _ngcontent-serverapp-c131>Event</th>
                      <th _ngcontent-serverapp-c131>Bet taken</th>
                      <th _ngcontent-serverapp-c131>Market</th>
                      <th _ngcontent-serverapp-c131>Type</th>
                      <th _ngcontent-serverapp-c131>Odds</th>
                      <th _ngcontent-serverapp-c131>Stake</th>
                      <th _ngcontent-serverapp-c131>Action</th>
                    </tr>
                    {/**/}
                  </tbody>
                </table>
              </div>
              <form
                _ngcontent-serverapp-c131
                noValidate
                className="ng-untouched ng-pristine ng-invalid"
              >
                <ul _ngcontent-serverapp-c131 className="btn-wrap">
                  <li _ngcontent-serverapp-c131>
                    <label _ngcontent-serverapp-c131>Password:</label>
                    <input
                      _ngcontent-serverapp-c131
                      id="password"
                      type="password"
                      formcontrolname="password"
                      required
                      placeholder="Enter"
                      className="ng-untouched ng-pristine ng-invalid"
                    />
                  </li>
                  <li _ngcontent-serverapp-c131>
                    <button
                      _ngcontent-serverapp-c131
                      id="changeCreditReferenceBtn"
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
        <app-modal _ngcontent-serverapp-c131 _nghost-serverapp-c43>
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
              <h3 _ngcontent-serverapp-c131 style={{ display: "flex" }}>
                Confirm Cancel Bet{" "}
                <a _ngcontent-serverapp-c131 className="close_pop">
                  close_pop
                </a>
              </h3>
              <div _ngcontent-serverapp-c131 className="modal-content">
                <table _ngcontent-serverapp-c131 className="table-s">
                  <tbody _ngcontent-serverapp-c131>
                    <tr _ngcontent-serverapp-c131>
                      <th _ngcontent-serverapp-c131>UID</th>
                      <th _ngcontent-serverapp-c131>Event</th>
                      <th _ngcontent-serverapp-c131>Bet taken</th>
                      <th _ngcontent-serverapp-c131>Market</th>
                      <th _ngcontent-serverapp-c131>Type</th>
                      <th _ngcontent-serverapp-c131>Odds</th>
                      <th _ngcontent-serverapp-c131>Stake</th>
                    </tr>
                    <tr _ngcontent-serverapp-c131>
                      <td _ngcontent-serverapp-c131 />
                      <td _ngcontent-serverapp-c131>
                        {" "}
                        {/**/}{" "}
                        <img
                          _ngcontent-serverapp-c131
                          src="assets/images/transparent.gif"
                          className="fromto"
                        />
                      </td>
                      <td _ngcontent-serverapp-c131>
                        <span
                          _ngcontent-serverapp-c131
                          id="betPlaced"
                          className="small-date"
                        >
                          {" "}
                        </span>
                      </td>
                      <td _ngcontent-serverapp-c131 />
                      <td _ngcontent-serverapp-c131>
                        <span _ngcontent-serverapp-c131> </span>
                      </td>
                      <td _ngcontent-serverapp-c131 />
                      <td _ngcontent-serverapp-c131 />
                    </tr>
                  </tbody>
                </table>
              </div>
              <form
                _ngcontent-serverapp-c131
                noValidate
                className="ng-untouched ng-pristine ng-invalid"
              >
                <ul _ngcontent-serverapp-c131 className="btn-wrap">
                  <li _ngcontent-serverapp-c131>
                    <label _ngcontent-serverapp-c131>Password:</label>
                    <input
                      _ngcontent-serverapp-c131
                      id="password"
                      type="password"
                      formcontrolname="password"
                      required
                      placeholder="Enter"
                      className="ng-untouched ng-pristine ng-invalid"
                    />
                  </li>
                  <li _ngcontent-serverapp-c131>
                    <button
                      _ngcontent-serverapp-c131
                      id="changeCreditReferenceBtn"
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
      </app-betlist>
 
  );
};

export default BetList;
