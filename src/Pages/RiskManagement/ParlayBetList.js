import React from "react";

const ParlayBetList = () => {
  return (
    <app-parlay-list-bets _nghost-serverapp-c86 className="ng-star-inserted">
      {/**/}
      <div
        _ngcontent-serverapp-c86
        className="full-wrap"
        style={{ height: "calc(100% - 105px)" }}
      >
        <div _ngcontent-serverapp-c86 className="over-wrap">
          <div _ngcontent-serverapp-c86 className="total_all">
            <h2 _ngcontent-serverapp-c86>Parlay Bets list</h2>
            {/**/}
            <div _ngcontent-serverapp-c86 className="spacer" />
            <span _ngcontent-serverapp-c86 className="total-users">
              {" "}
              Total Records: <strong _ngcontent-serverapp-c86>0</strong>
            </span>
            &nbsp;{" "}
            <span _ngcontent-serverapp-c86 className="total-users">
              {" "}
              Page Total PL:{" "}
              <strong _ngcontent-serverapp-c86 className="profit-text">
                0.00{" "}
              </strong>
            </span>
          </div>
          <div _ngcontent-serverapp-c86 className="function-wrap funwrap">
            <ul _ngcontent-serverapp-c86 className="input-list contentclass">
              <div _ngcontent-serverapp-c86 id="statusCondition">
                <li _ngcontent-serverapp-c86>
                  <label _ngcontent-serverapp-c86>Bet Status:</label>
                </li>
                <li _ngcontent-serverapp-c86>
                  <select
                    _ngcontent-serverapp-c86
                    name="betStatus"
                    id="betStatus"
                    className="ng-untouched ng-pristine ng-valid"
                  >
                    <option
                      _ngcontent-serverapp-c86
                      className="ng-star-inserted"
                      value="0: Object"
                    >
                      {" "}
                      All{" "}
                    </option>
                    <option
                      _ngcontent-serverapp-c86
                      className="ng-star-inserted"
                      value="1: Object"
                    >
                      {" "}
                      Settled{" "}
                    </option>
                    <option
                      _ngcontent-serverapp-c86
                      className="ng-star-inserted"
                      value="2: Object"
                    >
                      {" "}
                      Cancelled{" "}
                    </option>
                    <option
                      _ngcontent-serverapp-c86
                      className="ng-star-inserted"
                      value="3: Object"
                    >
                      {" "}
                      Voided{" "}
                    </option>
                    {/**/}
                  </select>
                </li>
              </div>
              <li _ngcontent-serverapp-c86>
                <label _ngcontent-serverapp-c86>Period:</label>
              </li>
              <li _ngcontent-serverapp-c86>
                <input
                  _ngcontent-serverapp-c86
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
                                className="dp-calendar-day dp-selected dp-current-month ng-star-inserted"
                                data-date="2026-08-20"
                              >
                                20
                              </button>
                              <button
                                type="button"
                                className="dp-calendar-day dp-current-month dp-current-day ng-star-inserted"
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
                  _ngcontent-serverapp-c86
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
                {/**/} to <br _ngcontent-serverapp-c86 />
                <input
                  _ngcontent-serverapp-c86
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
                                className="dp-calendar-day dp-current-month ng-star-inserted"
                                data-date="2026-08-20"
                              >
                                20
                              </button>
                              <button
                                type="button"
                                className="dp-calendar-day dp-current-month dp-current-day ng-star-inserted"
                                data-date="2026-08-21"
                              >
                                21
                              </button>
                              <button
                                type="button"
                                className="dp-calendar-day dp-selected dp-current-month ng-star-inserted"
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
                  _ngcontent-serverapp-c86
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
              <div _ngcontent-serverapp-c86 className="diaplayflex divblock">
                <li _ngcontent-serverapp-c86 className="widthfull">
                  <a
                    _ngcontent-serverapp-c86
                    id="today"
                    className="btn widthfull"
                  >
                    Just for today
                  </a>
                </li>
                <li _ngcontent-serverapp-c86 className="widthfull">
                  <a
                    _ngcontent-serverapp-c86
                    id="yesterday"
                    className="btn widthfull"
                  >
                    From yesterday
                  </a>
                </li>
              </div>
              <li _ngcontent-serverapp-c86 style={{ display: "none" }}>
                (Time Zone:IST)
              </li>
              <div _ngcontent-serverapp-c86 className="diaplayflex divblock">
                <li _ngcontent-serverapp-c86 className="widthfull">
                  <a _ngcontent-serverapp-c86 id="getPL" className="btn-send">
                    Show Default
                  </a>
                </li>
                <li _ngcontent-serverapp-c86 className="widthfull">
                  <a _ngcontent-serverapp-c86 id="getPL" className="btn-send">
                    Get History
                  </a>
                </li>
              </div>
              <div _ngcontent-serverapp-c86 className="diaplayflex divblock">
                <li _ngcontent-serverapp-c86>
                  <label _ngcontent-serverapp-c86>Last:</label>
                  <select
                    _ngcontent-serverapp-c86
                    name="limit"
                    id="limit"
                    className="ng-untouched ng-pristine ng-valid"
                  >
                    <option _ngcontent-serverapp-c86 value={10}>
                      10 Txn
                    </option>
                    <option _ngcontent-serverapp-c86 value={25}>
                      25 Txn
                    </option>
                    <option _ngcontent-serverapp-c86 value={50}>
                      50 Txn
                    </option>
                    <option _ngcontent-serverapp-c86 value={100} selected>
                      100 Txn
                    </option>
                    <option _ngcontent-serverapp-c86 value={0}>
                      Full - 0
                    </option>
                  </select>
                </li>
                <li _ngcontent-serverapp-c86>
                  <label _ngcontent-serverapp-c86> Stake</label>
                  <input
                    _ngcontent-serverapp-c86
                    type="number"
                    name="Volume Check"
                    placeholder="Volume"
                    className="ng-untouched ng-pristine ng-valid"
                  />
                </li>
              </div>
            </ul>
            <ul _ngcontent-serverapp-c86 className="input-list contentclass">
              <div _ngcontent-serverapp-c86 className="diaplayflex divblock">
                <li _ngcontent-serverapp-c86>
                  <input
                    _ngcontent-serverapp-c86
                    appinputrestriction="noSpecialChars3"
                    type="text"
                    name
                    id
                    placeholder="Search betId"
                    className="ng-untouched ng-pristine ng-valid"
                  />
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
                            Select Currency
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
                            autoComplete="ae71ea0dabb5"
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
              <li _ngcontent-serverapp-c86>{/**/}</li>
            </ul>
          </div>
          <div _ngcontent-serverapp-c86 className="total_all">
            <span _ngcontent-serverapp-c86 />
            <div _ngcontent-serverapp-c86 className="spacer" />
          </div>
          <div _ngcontent-serverapp-c86 className="table-responsive data-table">
            <div _ngcontent-serverapp-c86 id="report">
              <table
                _ngcontent-serverapp-c86
                id="table_DL"
                className="table-s"
                style={{ display: "table" }}
              >
                <tbody _ngcontent-serverapp-c86>
                  <tr _ngcontent-serverapp-c86>
                    {/**/}
                    <th
                      _ngcontent-serverapp-c86
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
                      _ngcontent-serverapp-c86
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
                      _ngcontent-serverapp-c86
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
                      _ngcontent-serverapp-c86
                      width="5%"
                      data-order="asc"
                      data-name="playerId"
                      className="align-L sort_asc"
                    >
                      PL ID{" "}
                    </th>
                    <th
                      _ngcontent-serverapp-c86
                      width="5%"
                      data-order="asc"
                      data-name="consolidateId"
                      className="align-L sort_asc"
                    >
                      {" "}
                      Bet ID {/**/}
                    </th>
                    <th
                      _ngcontent-serverapp-c86
                      id="betTime"
                      width="6%"
                      data-order="asc"
                      data-name="betTime"
                      className="align-L sort_asc"
                    >
                      Bet taken{" "}
                    </th>
                    <th
                      _ngcontent-serverapp-c86
                      id="betTime"
                      width="7%"
                      data-order="asc"
                      data-name="settlementTime"
                      className="align-L sort_asc"
                    >
                      Bet Settled
                    </th>
                    <th
                      _ngcontent-serverapp-c86
                      width="7%"
                      data-order="asc"
                      data-name="ipAddress"
                      className="align-L sort_asc"
                    >
                      {" "}
                      IP Address{" "}
                    </th>
                    <th
                      _ngcontent-serverapp-c86
                      width
                      data-order="asc"
                      data-name="eventName"
                      className="align-L sort_asc"
                    >
                      List Bets{" "}
                    </th>
                    <th
                      _ngcontent-serverapp-c86
                      width="10%"
                      data-order="asc"
                      data-name="selName"
                      className="align-L sort_asc"
                    >
                      Event{" "}
                    </th>
                    <th
                      _ngcontent-serverapp-c86
                      width="4%"
                      data-order="asc"
                      data-name="betType"
                      className="align-C sort_asc"
                    >
                      {" "}
                      Type{" "}
                    </th>
                    <th
                      _ngcontent-serverapp-c86
                      width="7%"
                      data-order="asc"
                      data-name="odds"
                      className="sort_asc"
                    >
                      Odds req{" "}
                    </th>
                    <th
                      _ngcontent-serverapp-c86
                      width="5%"
                      data-order="asc"
                      data-name="stake"
                      className="sort_asc"
                    >
                      Stake{" "}
                    </th>
                    <th
                      _ngcontent-serverapp-c86
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
                      _ngcontent-serverapp-c86
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
                      _ngcontent-serverapp-c86
                      width="5%"
                      name="remark"
                      data-order="asc"
                      data-name="remark"
                      className="align-C sort_asc"
                    >
                      Remark
                    </th>
                  </tr>
                  {/**/}
                </tbody>
              </table>
              <p
                _ngcontent-serverapp-c86
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
            <a
              _ngcontent-serverapp-c43
              href="#"
              className="close_pop ng-star-inserted"
            >
              close_pop
            </a>
            {/**/}
            <h3 _ngcontent-serverapp-c86 style={{ display: "flex" }}>
              Confirm Void Bet{" "}
            </h3>
            <div _ngcontent-serverapp-c86 className="modal-content">
              <table _ngcontent-serverapp-c86 className="table-s">
                <tbody _ngcontent-serverapp-c86>
                  <tr _ngcontent-serverapp-c86>
                    <th _ngcontent-serverapp-c86>UID</th>
                    <th _ngcontent-serverapp-c86>Event</th>
                    <th _ngcontent-serverapp-c86>Bet taken</th>
                    <th _ngcontent-serverapp-c86>PL</th>
                    <th _ngcontent-serverapp-c86>Type</th>
                    <th _ngcontent-serverapp-c86>Odds</th>
                    <th _ngcontent-serverapp-c86>Stake</th>
                  </tr>
                  <tr _ngcontent-serverapp-c86>
                    <td _ngcontent-serverapp-c86 />
                    <td _ngcontent-serverapp-c86> parlay </td>
                    <td _ngcontent-serverapp-c86>
                      <span _ngcontent-serverapp-c86 className="small-date" />
                    </td>
                    <td _ngcontent-serverapp-c86>
                      <span _ngcontent-serverapp-c86 className="profit-text" />
                    </td>
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
                    id="password"
                    type="password"
                    formcontrolname="password"
                    required
                    placeholder="Enter"
                    className="ng-untouched ng-pristine ng-invalid"
                  />
                </li>
                <li _ngcontent-serverapp-c86>
                  <button
                    _ngcontent-serverapp-c86
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
            <a
              _ngcontent-serverapp-c43
              href="#"
              className="close_pop ng-star-inserted"
            >
              close_pop
            </a>
            {/**/}
            <div _ngcontent-serverapp-c86>
              <h3 _ngcontent-serverapp-c86 style={{ display: "flex" }}>
                Confirm Void Bet{" "}
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
                    <th _ngcontent-serverapp-c86>Bet taken</th>
                    <th _ngcontent-serverapp-c86>PL</th>
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
                    id="password"
                    type="password"
                    formcontrolname="password"
                    required
                    placeholder="Enter"
                    className="ng-untouched ng-pristine ng-invalid"
                  />
                </li>
                <li _ngcontent-serverapp-c86>
                  <button
                    _ngcontent-serverapp-c86
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
            style={{ height: "auto", overflow: "auto", width: "650px" }}
          >
            <a
              _ngcontent-serverapp-c43
              href="#"
              className="close_pop ng-star-inserted"
            >
              close_pop
            </a>
            {/**/}
            <h3 _ngcontent-serverapp-c86 style={{ display: "flex" }}>
              List Bets{" "}
              <span
                _ngcontent-serverapp-c86
                className="searchBet"
                style={{ "margin-left": "3rem" }}
              />
            </h3>
            <div
              _ngcontent-serverapp-c86
              className="modal-content"
              style={{ width: "fit-content" }}
            >
              <table _ngcontent-serverapp-c86 className="table-s">
                <tbody _ngcontent-serverapp-c86>
                  <tr _ngcontent-serverapp-c86 className="align-L">
                    <th _ngcontent-serverapp-c86>Sport</th>
                    <th _ngcontent-serverapp-c86>Event</th>
                    <th _ngcontent-serverapp-c86>Market</th>
                    <th _ngcontent-serverapp-c86>selName</th>
                    <th _ngcontent-serverapp-c86>Bet taken</th>
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
    </app-parlay-list-bets>
  );
};

export default ParlayBetList;
