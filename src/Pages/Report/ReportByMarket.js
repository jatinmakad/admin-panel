import React from "react";

const ReportByMarket = () => {
  return (
    <app-pnl-match _nghost-serverapp-c120 className="ng-star-inserted">
      <div _ngcontent-serverapp-c120 className="main_wrap">
        <div _ngcontent-serverapp-c120 className="box">
          <h2 _ngcontent-serverapp-c120>Profit/Loss Report by Market</h2>
          {/**/}
        </div>
        <div _ngcontent-serverapp-c120 className="function-wrap funwrap">
          <ul _ngcontent-serverapp-c120 className="input-list flowroot">
            <div
              _ngcontent-serverapp-c120
              id="statusCondition"
              style={{ display: "none" }}
            >
              <li _ngcontent-serverapp-c120>
                <label _ngcontent-serverapp-c120>Bet Status:</label>
              </li>
              <li _ngcontent-serverapp-c120>
                <select
                  _ngcontent-serverapp-c120
                  name="betStatus"
                  id="betStatus"
                />
              </li>
            </div>
            <li _ngcontent-serverapp-c120>
              <label _ngcontent-serverapp-c120>Sports</label>
            </li>
            <li _ngcontent-serverapp-c120>
              <select _ngcontent-serverapp-c120 id="func_sports">
                <option _ngcontent-serverapp-c120 value={0} selected="selected">
                  All
                </option>
                <option _ngcontent-serverapp-c120 value="soccer">
                  SOCCER
                </option>
                <option _ngcontent-serverapp-c120 value="tennis">
                  TENNIS
                </option>
                <option _ngcontent-serverapp-c120 value="cricket">
                  CRICKET
                </option>
                <option _ngcontent-serverapp-c120 value="horse racing">
                  HORSE_RACING
                </option>
                <option _ngcontent-serverapp-c120 value="greyhound racing">
                  GREYHOUND_RACING
                </option>
                <option _ngcontent-serverapp-c120 value="casino">
                  CASINO
                </option>
              </select>
            </li>
            <li _ngcontent-serverapp-c120 />
            <li _ngcontent-serverapp-c120>
              <label _ngcontent-serverapp-c120>Period</label>
            </li>
            <li _ngcontent-serverapp-c120 className="blockdis">
              <div _ngcontent-serverapp-c120 className="webhide">
                <input
                  _ngcontent-serverapp-c120
                  id="startDate"
                  type="text"
                  placeholder="YYYY-MM-DD"
                  autoComplete="off"
                  className="cal-input ng-untouched ng-valid ng-dirty"
                />
                <dp-date-picker className="dp-material ng-star-inserted">
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
                  _ngcontent-serverapp-c120
                  id="startTime"
                  type="text"
                  placeholder="09:00"
                  maxLength={5}
                  className="time-input disable ng-untouched ng-dirty"
                  disabled
                />
                <dp-date-picker className="dp-material ng-star-inserted">
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
                {/**/}
              </div>{" "}
              to{" "}
              <input
                _ngcontent-serverapp-c120
                id="endDate"
                type="text"
                placeholder="YYYY-MM-DD"
                autoComplete="off"
                className="cal-input ng-untouched ng-valid ng-dirty"
              />
              <dp-date-picker className="dp-material ng-star-inserted">
                <div>
                  <div className="dp-input-container" hidden data-hidden="true">
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
                              className="dp-calendar-day dp-selected dp-current-month dp-current-day ng-star-inserted"
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
                _ngcontent-serverapp-c120
                id="endTime"
                type="text"
                placeholder="08:59"
                maxLength={5}
                className="time-input disable ng-untouched ng-dirty"
                disabled
              />
              <dp-date-picker className="dp-material ng-star-inserted">
                <div>
                  <div className="dp-input-container" hidden data-hidden="true">
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
            <li _ngcontent-serverapp-c120 style={{ display: "none" }}>
              (Timezone:IST)
            </li>
            <li _ngcontent-serverapp-c120>
              <input
                _ngcontent-serverapp-c120
                name="sortCondition"
                placeholder="Search Market"
                className="ng-untouched ng-pristine ng-valid"
              />
            </li>
            <li _ngcontent-serverapp-c120>
              <input
                _ngcontent-serverapp-c120
                name
                id
                placeholder="Search Event"
                className="ng-untouched ng-pristine ng-valid"
              />
            </li>
          </ul>
          <ul _ngcontent-serverapp-c120 className="input-list flowroot">
            <li _ngcontent-serverapp-c120>
              <a _ngcontent-serverapp-c120 id="today" className="btn">
                Just for today
              </a>
            </li>
            <li _ngcontent-serverapp-c120>
              <a _ngcontent-serverapp-c120 id="yesterday" className="btn">
                From yesterday
              </a>
            </li>
            <li _ngcontent-serverapp-c120 style={{ display: "none" }}>
              <a
                _ngcontent-serverapp-c120
                id="last7days"
                href="#"
                className="btn"
              >
                Last 7 days
              </a>
            </li>
            <li _ngcontent-serverapp-c120 style={{ display: "none" }}>
              <a
                _ngcontent-serverapp-c120
                id="last30days"
                href="#"
                className="btn"
              >
                Last 30 days
              </a>
            </li>
            <li _ngcontent-serverapp-c120 style={{ display: "none" }}>
              <a
                _ngcontent-serverapp-c120
                id="last2months"
                href="#"
                className="btn"
              >
                {" "}
                Last 2 Months
              </a>
            </li>
            <li _ngcontent-serverapp-c120 style={{ display: "none" }}>
              <a
                _ngcontent-serverapp-c120
                id="last3months"
                href="#"
                className="btn"
              >
                {" "}
                Last 3 Months
              </a>
            </li>
            <li _ngcontent-serverapp-c120>
              <a _ngcontent-serverapp-c120 id="getPL" className="btn-send">
                Get P &amp; L
              </a>
            </li>
          </ul>
        </div>
        <div _ngcontent-serverapp-c120 className="total_all">
          <span _ngcontent-serverapp-c120>
            <label _ngcontent-serverapp-c120>Last:</label>
            <select _ngcontent-serverapp-c120 name="limit" id="limit">
              <option _ngcontent-serverapp-c120 value={100}>
                100 Txn
              </option>
              <option _ngcontent-serverapp-c120 value={50}>
                50 Txn
              </option>
              <option _ngcontent-serverapp-c120 value={25}>
                25 Txn
              </option>
              <option _ngcontent-serverapp-c120 value={10} selected>
                10 Txn
              </option>
              <option _ngcontent-serverapp-c120 value="marketReport.length">
                All
              </option>
            </select>
          </span>
          <div _ngcontent-serverapp-c120 className="spacer" />
          <span
            _ngcontent-serverapp-c120
            className="total-users"
            style={{ "font-weight": "600" }}
          >
            {" "}
            Total Records:
          </span>
          <div _ngcontent-serverapp-c120 className="download-reports">
            <button
              _ngcontent-serverapp-c120
              title="Export Excel"
              className="excel btn"
            >
              <img
                _ngcontent-serverapp-c120
                src="/assets/images/transparent.gif"
                alt
              />
            </button>
            <button
              _ngcontent-serverapp-c120
              title="Export Pdf"
              className="pdf btn"
            >
              <img
                _ngcontent-serverapp-c120
                src="/assets/images/transparent.gif"
                alt
              />
            </button>
            <button
              _ngcontent-serverapp-c120
              title="Export Csv"
              className="csv btn"
            >
              <img
                _ngcontent-serverapp-c120
                src="/assets/images/transparent.gif"
                alt
              />
            </button>
          </div>
        </div>
        <div
          _ngcontent-serverapp-c120
          id="reportDiv"
          className="over-wrap"
          style={{ "max-height": "calc(100% - 32px - 93px)" }}
        >
          <div
            _ngcontent-serverapp-c120
            className="table-responsive data-table"
          >
            <table
              _ngcontent-serverapp-c120
              id="table_DL"
              className="table01 table-pt"
            >
              <tbody _ngcontent-serverapp-c120>
                <tr _ngcontent-serverapp-c120 id="head">
                  <th
                    _ngcontent-serverapp-c120
                    width="35%"
                    id="header_eventName"
                    data-order="asc"
                    data-name="sport"
                    className="align-L sort_asc"
                  >
                    Event
                  </th>
                  <th
                    _ngcontent-serverapp-c120
                    width="22%"
                    data-order="asc"
                    data-name="marketName"
                    className="sort_asc"
                  >
                    {" "}
                    Event/Market Name{" "}
                  </th>
                  <th
                    _ngcontent-serverapp-c120
                    width="5%"
                    data-order="asc"
                    data-name="stake"
                    className="sort_asc"
                  >
                    {" "}
                    Stake{" "}
                  </th>
                  <th
                    _ngcontent-serverapp-c120
                    width="10%"
                    data-order="asc"
                    data-name="playerPL"
                    className="sort_asc"
                  >
                    {" "}
                    Casino P/L
                  </th>
                  <th
                    _ngcontent-serverapp-c120
                    id="header_profitLoss_downLine"
                    width="10%"
                    data-order="asc"
                    data-name="downLinePL"
                    className="sort_asc"
                  >
                    {" "}
                    Downline P/L{" "}
                  </th>
                  <th
                    _ngcontent-serverapp-c120
                    id="header_tax_agent_3"
                    width="15%"
                    style={{ display: "none" }}
                  >
                    {" "}
                    Master Comm.{" "}
                  </th>
                  <th
                    _ngcontent-serverapp-c120
                    id="header_rebate_agent_3"
                    width="15%"
                    style={{ display: "none" }}
                  >
                    {" "}
                    Master Rebate{" "}
                  </th>
                  <th
                    _ngcontent-serverapp-c120
                    id="header_tax_agent_2"
                    width="10%"
                    data-order="asc"
                    data-name="commision"
                    className="sort_asc"
                  >
                    Super Comm.
                  </th>
                  <th
                    _ngcontent-serverapp-c120
                    id="header_rebate_agent_2"
                    width="15%"
                    style={{ display: "none" }}
                  >
                    {" "}
                    Super Rebate{" "}
                  </th>
                  <th
                    _ngcontent-serverapp-c120
                    id="header_payout_agent_1"
                    width="15%"
                    style={{ display: "none" }}
                  >
                    {" "}
                    SS PT{" "}
                  </th>
                  <th
                    _ngcontent-serverapp-c120
                    id="header_tax_agent_1"
                    width="15%"
                    style={{ display: "none" }}
                  >
                    {" "}
                    SS Comm.{" "}
                  </th>
                  <th
                    _ngcontent-serverapp-c120
                    id="header_rebate_agent_1"
                    width="15%"
                    style={{ display: "none" }}
                  >
                    {" "}
                    SS Rebate{" "}
                  </th>
                  <th
                    _ngcontent-serverapp-c120
                    id="header_profitLoss_agent_1"
                    width="15%"
                    style={{ display: "none" }}
                  >
                    {" "}
                    SS Total{" "}
                  </th>
                  <th
                    _ngcontent-serverapp-c120
                    width="15%"
                    data-order="asc"
                    data-name="upLinePL"
                    className="sort_asc"
                  >
                    {" "}
                    Upline P/L
                  </th>
                </tr>
              </tbody>
              <tbody _ngcontent-serverapp-c120 id="content">
                {/**/}
                <tr _ngcontent-serverapp-c120 className="total">
                  <td _ngcontent-serverapp-c120 className="align-L">
                    Total
                  </td>
                  <td _ngcontent-serverapp-c120 id="_totalTax3" />
                  <td _ngcontent-serverapp-c120 id="_totalTax3">
                    0.00
                  </td>
                  <td _ngcontent-serverapp-c120 id="_totalProfitLoss">
                    <span
                      _ngcontent-serverapp-c120
                      className="ng-star-inserted"
                    >
                      {" "}
                      0.00{" "}
                    </span>
                    {/**/}
                    {/**/}
                  </td>
                  <td _ngcontent-serverapp-c120 id="_totalProfitLossDownLine">
                    <span
                      _ngcontent-serverapp-c120
                      className="ng-star-inserted"
                    >
                      {" "}
                      0.00{" "}
                    </span>
                    {/**/}
                    {/**/}
                  </td>
                  <td
                    _ngcontent-serverapp-c120
                    id="_totalTax3"
                    style={{ display: "none" }}
                  >
                    0.00
                  </td>
                  <td
                    _ngcontent-serverapp-c120
                    id="_totalRebate3"
                    style={{ display: "none" }}
                  >
                    0.00
                  </td>
                  <td _ngcontent-serverapp-c120 id="_totalTax2">
                    <span
                      _ngcontent-serverapp-c120
                      className="ng-star-inserted"
                    >
                      {" "}
                      0.00{" "}
                    </span>
                    {/**/}
                    {/**/}
                  </td>
                  <td
                    _ngcontent-serverapp-c120
                    id="_totalRebate2"
                    style={{ display: "none" }}
                  >
                    0.00
                  </td>
                  <td
                    _ngcontent-serverapp-c120
                    id="_totalPayout1"
                    style={{ display: "none" }}
                  >
                    0.00
                  </td>
                  <td
                    _ngcontent-serverapp-c120
                    id="_totalTax1"
                    style={{ display: "none" }}
                  >
                    0.00
                  </td>
                  <td
                    _ngcontent-serverapp-c120
                    id="_totalRebate1"
                    style={{ display: "none" }}
                  >
                    0.00
                  </td>
                  <td
                    _ngcontent-serverapp-c120
                    id="_totalProfitLoss1"
                    style={{ display: "none" }}
                  >
                    0.00
                  </td>
                  <td _ngcontent-serverapp-c120 id="_totalProfitLossUpLine">
                    <span
                      _ngcontent-serverapp-c120
                      className="ng-star-inserted"
                    >
                      {" "}
                      0.00{" "}
                    </span>
                    {/**/}
                    {/**/}
                  </td>
                </tr>
              </tbody>
            </table>
            {/**/}
            {/**/}
          </div>
        </div>
      </div>
    </app-pnl-match>
  );
};

export default ReportByMarket;
