import React from "react";

const ReportByCasinoDownline = () => {
  return (
    <app-pnl-casino-downline
      _nghost-serverapp-c132
      className="ng-star-inserted"
    >
      <div _ngcontent-serverapp-c132 className="main_wrap">
        <div _ngcontent-serverapp-c132 className="box">
          <h2 _ngcontent-serverapp-c132>
            Casino Profit/Loss Report by Downline
          </h2>
        </div>
        <ul
          _ngcontent-serverapp-c132
          className="report-tab-wrap ng-star-inserted"
        >
          <li
            _ngcontent-serverapp-c132
            id="reportType_exchange"
            data-reporttabtype={0}
            className="report-tab select"
          >
            <a _ngcontent-serverapp-c132>Casino</a>
          </li>
        </ul>
        {/**/}
        <div _ngcontent-serverapp-c132 className="function-wrap">
          <ul _ngcontent-serverapp-c132 className="input-list flowroot">
            <div
              _ngcontent-serverapp-c132
              id="statusCondition"
              style={{ display: "none" }}
            >
              <li _ngcontent-serverapp-c132>
                <label _ngcontent-serverapp-c132>Bet Status:</label>
              </li>
              <li _ngcontent-serverapp-c132>
                <select
                  _ngcontent-serverapp-c132
                  name="betStatus"
                  id="betStatus"
                />
              </li>
            </div>
            <li _ngcontent-serverapp-c132 />
            <li _ngcontent-serverapp-c132>
              <label _ngcontent-serverapp-c132>Period</label>
            </li>
            <li _ngcontent-serverapp-c132 className="contentclass">
              <input
                _ngcontent-serverapp-c132
                id="startDate"
                type="text"
                placeholder="YYYY-MM-DD"
                autoComplete="off"
                className="cal-input marleft ng-untouched ng-dirty ng-valid"
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
                _ngcontent-serverapp-c132
                id="startTime"
                type="text"
                placeholder="09:00"
                maxLength={5}
                className="time-input ng-untouched ng-dirty ng-invalid"
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
                            12
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
              {/**/} to{" "}
              <input
                _ngcontent-serverapp-c132
                id="endDate"
                type="text"
                placeholder="YYYY-MM-DD"
                autoComplete="off"
                className="cal-input ng-untouched ng-dirty ng-valid"
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
                _ngcontent-serverapp-c132
                id="endTime"
                type="text"
                placeholder="08:59"
                maxLength={5}
                className="time-input ng-untouched ng-dirty ng-invalid"
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
                            11
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
                            PM
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
            <li _ngcontent-serverapp-c132>
              <label _ngcontent-serverapp-c132>User List:</label>
              <ng-select
                _ngcontent-serverapp-c132
                name="sortCondition"
                id="sortCondition"
                className="ng-select ng-select-single ng-select-searchable ng-select-clearable ng-untouched ng-pristine ng-valid"
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
                        autoComplete="a0b14f5b5381"
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
          </ul>
          <ul _ngcontent-serverapp-c132 className="input-list flowroot">
            <li _ngcontent-serverapp-c132>
              <a _ngcontent-serverapp-c132 id="today" className="btn">
                Just for today
              </a>
            </li>
            <li _ngcontent-serverapp-c132>
              <a _ngcontent-serverapp-c132 id="yesterday" className="btn">
                From yesterday
              </a>
            </li>
            {/**/}
            <li _ngcontent-serverapp-c132>
              <a _ngcontent-serverapp-c132 id="getPL" className="btn-send">
                Get P &amp; L
              </a>
            </li>
          </ul>
        </div>
        <div _ngcontent-serverapp-c132 id="noReportMessage" />
        <div
          _ngcontent-serverapp-c132
          id="userTreeDiv"
          className="total_all ng-star-inserted"
        >
          <span _ngcontent-serverapp-c132>
            <div _ngcontent-serverapp-c132 id="treePath" className="agent_path">
              <ul
                _ngcontent-serverapp-c132
                id="userTree"
                className="agent_path-L"
              >
                <li
                  _ngcontent-serverapp-c132
                  className="ng-star-inserted last_li"
                >
                  <a _ngcontent-serverapp-c132>
                    <span
                      _ngcontent-serverapp-c132
                      className="Bdlevel lv_4 p premium"
                    />{" "}
                    testbetx{" "}
                  </a>
                </li>
                {/**/}
                {/**/}
                {/**/}
                {/**/}
                {/**/}
              </ul>
            </div>
          </span>
          <ul _ngcontent-serverapp-c132 style={{ display: "none" }}>
            <li _ngcontent-serverapp-c132 id="tempTree">
              <a _ngcontent-serverapp-c132>
                <span _ngcontent-serverapp-c132 className="lv_1" />
              </a>
            </li>
            <li
              _ngcontent-serverapp-c132
              id="tempCurrencyTree"
              className="currency_tag"
            >
              <strong _ngcontent-serverapp-c132 />
            </li>
          </ul>
          <div _ngcontent-serverapp-c132 id="treePath" className="agent_path" />
          <div
            _ngcontent-serverapp-c132
            id="expandAllDiv"
            style={{ display: "none" }}
          >
            <a _ngcontent-serverapp-c132 id="showDetail" className="btn_expand">
              Expand All
            </a>
          </div>
          <span _ngcontent-serverapp-c132 className="spacer" />
          <span _ngcontent-serverapp-c132>
            <label _ngcontent-serverapp-c132>Last:</label>
            <select
              _ngcontent-serverapp-c132
              name="limit"
              id="limit"
              className="ng-star-inserted"
            >
              <option _ngcontent-serverapp-c132 value={100}>
                100 Txn
              </option>
              <option _ngcontent-serverapp-c132 value={50}>
                50 Txn
              </option>
              <option _ngcontent-serverapp-c132 value={25}>
                25 Txn
              </option>
              <option _ngcontent-serverapp-c132 value={10} selected>
                10 Txn
              </option>
              <option _ngcontent-serverapp-c132 value="downline.length">
                Full
              </option>
            </select>
            {/**/}
            {/**/}
            {/**/}
          </span>
          <span
            _ngcontent-serverapp-c132
            className="total-users"
            style={{ "font-weight": "600" }}
          >
            Total Records: 0{" "}
          </span>
          <div _ngcontent-serverapp-c132 className="download-reports">
            <button
              _ngcontent-serverapp-c132
              title="Export Excel"
              className="excel btn"
            >
              <img
                _ngcontent-serverapp-c132
                src="/assets/images/transparent.gif"
                alt
              />
            </button>
            <button
              _ngcontent-serverapp-c132
              title="Export Pdf"
              className="pdf btn"
            >
              <img
                _ngcontent-serverapp-c132
                src="/assets/images/transparent.gif"
                alt
              />
            </button>
            <button
              _ngcontent-serverapp-c132
              title="Export Csv"
              className="csv btn"
            >
              <img
                _ngcontent-serverapp-c132
                src="/assets/images/transparent.gif"
                alt
              />
            </button>
          </div>
        </div>
        {/**/}
        <div
          _ngcontent-serverapp-c132
          id="reportDiv"
          className="over-wrap ng-star-inserted"
          style={{ "max-height": "calc(100% - 32px - 93px - 55px)" }}
        >
          <div
            _ngcontent-serverapp-c132
            className="table-responsive data-table"
          >
            <table
              _ngcontent-serverapp-c132
              id="table_DL"
              className="table01 table-pt"
            >
              <tbody _ngcontent-serverapp-c132>
                <tr _ngcontent-serverapp-c132 id="table_DL">
                  <th
                    _ngcontent-serverapp-c132
                    id="header_userName"
                    width="16%"
                    data-order="asc"
                    data-name="userName"
                    className="align-L sort_asc"
                  >
                    UID
                  </th>
                  <th
                    _ngcontent-serverapp-c132
                    width="16%"
                    data-order="asc"
                    data-name="stake"
                    className="sort_asc"
                  >
                    Stake
                  </th>
                  <th
                    _ngcontent-serverapp-c132
                    width="16%"
                    data-order="asc"
                    data-name="playerPL"
                    className="sort_asc"
                  >
                    {" "}
                    Casino P/L{" "}
                  </th>
                  <th
                    _ngcontent-serverapp-c132
                    id="header_tax_agent_2"
                    width="16%"
                    data-order="asc"
                    data-name="commision"
                    className="sort_asc"
                  >
                    Comm.
                  </th>
                  <th
                    _ngcontent-serverapp-c132
                    width="16%"
                    data-order="asc"
                    data-name="upLinePL"
                    className="sort_asc"
                  >
                    {" "}
                    Total P/L{" "}
                  </th>
                </tr>
              </tbody>
              <tbody _ngcontent-serverapp-c132 id="content">
                {/**/}
                {/**/}
                {/**/}
                <tr _ngcontent-serverapp-c132 className="total">
                  <td _ngcontent-serverapp-c132 className="align-L">
                    Total
                  </td>
                  <td _ngcontent-serverapp-c132>
                    <span _ngcontent-serverapp-c132> (0.00) </span>
                  </td>
                  <td _ngcontent-serverapp-c132>
                    <div _ngcontent-serverapp-c132>
                      <span
                        _ngcontent-serverapp-c132
                        className="ng-star-inserted"
                      >
                        0.00{" "}
                      </span>
                      {/**/}
                      {/**/}
                    </div>
                  </td>
                  <td _ngcontent-serverapp-c132 id="_totalComm">
                    <span
                      _ngcontent-serverapp-c132
                      className="ng-star-inserted"
                    >
                      {" "}
                      0.00{" "}
                    </span>
                    {/**/}
                    {/**/}
                  </td>
                  <td _ngcontent-serverapp-c132 id="totalplayerPL">
                    <span
                      _ngcontent-serverapp-c132
                      className="ng-star-inserted"
                    >
                      {" "}
                      -0.00{" "}
                    </span>
                    {/**/}
                    {/**/}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/**/}
        </div>
        {/**/}
      </div>
    </app-pnl-casino-downline>
  );
};

export default ReportByCasinoDownline;
