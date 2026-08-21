import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";

/* ------------------------------------------------------------------ */
/*  Shared helpers                                                     */
/* ------------------------------------------------------------------ */

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const MONTHS_FULL = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const pad2 = (n) => String(n).padStart(2, "0");
const toDataDate = (d) =>
  `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
const sameDay = (a, b) =>
  !!a &&
  !!b &&
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();
const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const addMonths = (d, n) => new Date(d.getFullYear(), d.getMonth() + n, 1);

// YYYY-MM-DD everywhere, per request
const formatInputDate = (d) => {
  if (!d) return "";
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
};

const buildWeeks = (viewDate) => {
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const startOffset = firstOfMonth.getDay();
  const gridStart = new Date(year, month, 1 - startOffset);

  const cells = [];
  for (let i = 0; i < 42; i++) {
    const date = new Date(
      gridStart.getFullYear(),
      gridStart.getMonth(),
      gridStart.getDate() + i,
    );
    cells.push({
      date,
      monthClass:
        date.getMonth() === month
          ? "dp-current-month"
          : date < firstOfMonth
            ? "dp-prev-month"
            : "dp-next-month",
      inCurrentMonth: date.getMonth() === month,
    });
  }
  const lastNeededIndex = cells.map((c) => c.inCurrentMonth).lastIndexOf(true);
  const weeksNeeded = Math.ceil((lastNeededIndex + 1) / 7);
  const trimmed = cells.slice(0, weeksNeeded * 7);

  const weeks = [];
  for (let i = 0; i < trimmed.length; i += 7)
    weeks.push(trimmed.slice(i, i + 7));
  return weeks;
};

/* ------------------------------------------------------------------ */
/*  Date calendar popup (unchanged classNames from ng2-date-picker)    */
/* ------------------------------------------------------------------ */

function DateCalendarPopup({
  viewDate,
  value,
  today,
  min,
  max,
  isDisabled,
  onPick,
  onPrevMonth,
  onNextMonth,
  onToday,
  popupStyle,
}) {
  const weeks = useMemo(() => buildWeeks(viewDate), [viewDate]);

  const prevMonthDisabled =
    !!min &&
    addMonths(viewDate, -1) < new Date(min.getFullYear(), min.getMonth(), 1);
  const nextMonthDisabled =
    !!max &&
    addMonths(viewDate, 1) > new Date(max.getFullYear(), max.getMonth(), 1);

  const headerLabel = `${MONTHS_SHORT[viewDate.getMonth()]}, ${viewDate.getFullYear()}`;
  const headerFullLabel = `${MONTHS_FULL[viewDate.getMonth()]} ${viewDate.getFullYear()}`;

  return (
    <div style={popupStyle}>
      <div className="dp-material dp-popup" data-hidden="false">
        <dp-day-calendar className="dp-material ng-untouched ng-valid ng-star-inserted ng-dirty">
          <div className="dp-day-calendar-container ng-star-inserted">
            <dp-calendar-nav className="dp-material">
              <div className="dp-calendar-nav-container">
                <div className="dp-nav-header">
                  <span hidden data-hidden="true">
                    {headerFullLabel}
                  </span>
                  <button
                    type="button"
                    className="dp-nav-header-btn"
                    data-hidden="false"
                  >
                    {headerLabel}
                  </button>
                </div>
                <div className="dp-nav-btns-container">
                  <div className="dp-calendar-nav-container-left">
                    <button
                      type="button"
                      className="dp-calendar-nav-left"
                      data-hidden="false"
                      disabled={prevMonthDisabled}
                      onClick={onPrevMonth}
                    />
                  </div>
                  <button
                    type="button"
                    className="dp-current-location-btn ng-star-inserted"
                    onClick={onToday}
                    disabled={isDisabled(today)}
                  />
                  <div className="dp-calendar-nav-container-right">
                    <button
                      type="button"
                      className="dp-calendar-nav-right"
                      data-hidden="false"
                      disabled={nextMonthDisabled}
                      onClick={onNextMonth}
                    />
                  </div>
                </div>
              </div>
            </dp-calendar-nav>

            <div className="dp-calendar-wrapper">
              <div className="dp-weekdays">
                {WEEKDAYS.map((w) => (
                  <span
                    key={w}
                    className="dp-calendar-weekday ng-star-inserted"
                  >
                    {w}
                  </span>
                ))}
              </div>

              {weeks.map((week, wi) => (
                <div className="dp-calendar-week ng-star-inserted" key={wi}>
                  {week.map((cell) => {
                    const disabled = isDisabled(cell.date);
                    const classes = [
                      "dp-calendar-day",
                      cell.monthClass,
                      "ng-star-inserted",
                      sameDay(cell.date, today) && "dp-current-day",
                      value && sameDay(cell.date, value) && "dp-selected",
                      disabled && "dp-disabled",
                    ]
                      .filter(Boolean)
                      .join(" ");

                    return (
                      <button
                        type="button"
                        key={toDataDate(cell.date)}
                        className={classes}
                        data-date={toDataDate(cell.date)}
                        disabled={disabled}
                        onClick={() => onPick(cell.date)}
                      >
                        {pad2(cell.date.getDate())}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </dp-day-calendar>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Time select popup (classNames mirror the dp-time-select markup)    */
/* ------------------------------------------------------------------ */

const clampWrap = (n, min, max) => (n > max ? min : n < min ? max : n);

function TimeSelectPopup({
  hours12,
  minutes,
  seconds,
  meridiem,
  onChange,
  popupStyle,
}) {
  const bump = (field, delta) => {
    if (field === "hours") {
      onChange({
        hours12: clampWrap(hours12 + delta, 1, 12),
        minutes,
        seconds,
        meridiem,
      });
    } else if (field === "minutes") {
      onChange({
        hours12,
        minutes: clampWrap(minutes + delta, 0, 59),
        seconds,
        meridiem,
      });
    } else if (field === "seconds") {
      onChange({
        hours12,
        minutes,
        seconds: clampWrap(seconds + delta, 0, 59),
        meridiem,
      });
    } else if (field === "meridiem") {
      onChange({
        hours12,
        minutes,
        seconds,
        meridiem: meridiem === "AM" ? "PM" : "AM",
      });
    }
  };

  return (
    <div style={popupStyle}>
      <div className="dp-material dp-popup" data-hidden="false">
        <dp-time-select className="dp-material ng-untouched ng-valid ng-star-inserted ng-dirty">
          <ul className="dp-time-select-controls">
            <li className="dp-time-select-control dp-time-select-control-hours">
              <button
                type="button"
                className="dp-time-select-control-up"
                onClick={() => bump("hours", 1)}
              />
              <span className="dp-time-select-display-hours">
                {pad2(hours12)}
              </span>
              <button
                type="button"
                className="dp-time-select-control-down"
                onClick={() => bump("hours", -1)}
              />
            </li>
            <li className="dp-time-select-control dp-time-select-separator">
              :
            </li>
            <li className="dp-time-select-control dp-time-select-control-minutes">
              <button
                type="button"
                className="dp-time-select-control-up"
                onClick={() => bump("minutes", 1)}
              />
              <span className="dp-time-select-display-minutes">
                {pad2(minutes)}
              </span>
              <button
                type="button"
                className="dp-time-select-control-down"
                onClick={() => bump("minutes", -1)}
              />
            </li>
            <li className="dp-time-select-control dp-time-select-separator ng-star-inserted">
              :
            </li>
            <li className="dp-time-select-control dp-time-select-control-seconds ng-star-inserted">
              <button
                type="button"
                className="dp-time-select-control-up"
                onClick={() => bump("seconds", 1)}
              />
              <span className="dp-time-select-display-seconds">
                {pad2(seconds)}
              </span>
              <button
                type="button"
                className="dp-time-select-control-down"
                onClick={() => bump("seconds", -1)}
              />
            </li>
            <li className="dp-time-select-control dp-time-select-control-meridiem ng-star-inserted">
              <button
                type="button"
                className="dp-time-select-control-up"
                onClick={() => bump("meridiem", 1)}
              />
              <span className="dp-time-select-display-meridiem">
                {meridiem}
              </span>
              <button
                type="button"
                className="dp-time-select-control-down"
                onClick={() => bump("meridiem", -1)}
              />
            </li>
          </ul>
        </dp-time-select>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Combined DateTimePicker                                            */
/* ------------------------------------------------------------------ */

/**
 * Markup / classNames for both the day-calendar and the time-select popups
 * mirror ng2-date-picker's output 1:1, so existing CSS applies unchanged.
 * Do not rename any className below.
 *
 * <DateTimePicker
 *   value={dateObj}              // Date | null — defaults to "now" if omitted
 *   onChange={(dateObj) => {}}
 *   min={Date}                   // optional lower bound (date-only compare)
 *   max={Date}                   // optional upper bound (date-only compare)
 *   timeInputId="startTime"      // id passed through to the time <input>
 * />
 */
export default function DateTimePicker({
  value,
  onChange,
  min = null,
  max = null,
  timeInputId = "startTime",
}) {
  const [internalValue, setInternalValue] = useState(() => value || new Date());
  const current = value !== undefined && value !== null ? value : internalValue;

  const [openDate, setOpenDate] = useState(false);
  const [openTime, setOpenTime] = useState(false);
  const [viewDate, setViewDate] = useState(() => current || min || new Date());

  const rootRef = useRef(null);

  useEffect(() => {
    if (!openDate && !openTime) return;
    const onDocClick = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpenDate(false);
        setOpenTime(false);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpenDate(false);
        setOpenTime(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [openDate, openTime]);

  const isDateDisabled = useCallback(
    (date) => {
      if (min && date < startOfDay(min)) return true;
      if (max && date > startOfDay(max)) return true;
      return false;
    },
    [min, max],
  );

  const today = useMemo(() => startOfDay(new Date()), []);

  const emit = (nextDate) => {
    setInternalValue(nextDate);
    onChange?.(nextDate);
  };

  const pickDate = (date) => {
    if (isDateDisabled(date)) return;
    const merged = new Date(date);
    merged.setHours(
      current.getHours(),
      current.getMinutes(),
      current.getSeconds(),
      0,
    );
    emit(merged);
    setOpenDate(false);
  };

  const goToday = () => {
    if (isDateDisabled(today)) return;
    setViewDate(today);
    pickDate(today);
  };

  const goPrevMonth = () => setViewDate((d) => addMonths(d, -1));
  const goNextMonth = () => setViewDate((d) => addMonths(d, 1));

  // ---- time state derived from `current` ----
  const hours24 = current.getHours();
  const hours12raw = hours24 % 12;
  const hours12 = hours12raw === 0 ? 12 : hours12raw;
  const meridiem = hours24 >= 12 ? "PM" : "AM";
  const minutes = current.getMinutes();
  const seconds = current.getSeconds();

  const handleTimeChange = ({
    hours12: h12,
    minutes: m,
    seconds: s,
    meridiem: mer,
  }) => {
    let h24 = h12 % 12;
    if (mer === "PM") h24 += 12;
    const merged = new Date(current);
    merged.setHours(h24, m, s, 0);
    emit(merged);
  };

  const timeDisplay = `${pad2(hours24)}:${pad2(minutes)}`;

  return (
    <dp-date-picker
      className="ng-star-inserted dp-material"
      style={{ position: "relative" }}
      ref={rootRef}
    >
      <div className="dp-open">
        <div className="dp-input-container">
          <input
            type="text"
            className="dp-picker-input ng-untouched ng-pristine ng-valid"
            placeholder="YYYY-MM-DD"
            readOnly
            value={formatInputDate(current)}
            onClick={() => {
              setOpenTime(false);
              setViewDate(current);
              setOpenDate((o) => !o);
            }}
          />
          <input
            id={timeInputId}
            type="text"
            placeholder="09:00"
            maxLength={5}
            className="time-input ng-untouched ng-dirty"
            readOnly
            value={timeDisplay}
            onClick={() => {
              setOpenDate(false);
              setOpenTime((o) => !o);
            }}
          />
        </div>
      </div>

      {openDate && (
        <DateCalendarPopup
          viewDate={viewDate}
          value={current}
          today={today}
          min={min}
          max={max}
          isDisabled={isDateDisabled}
          onPick={pickDate}
          onPrevMonth={goPrevMonth}
          onNextMonth={goNextMonth}
          onToday={goToday}
          popupStyle={{
            position: "absolute",
            visibility: "visible",
            top: "13.2px",
            left: "0px",
            zIndex: 50,
          }}
        />
      )}

      {openTime && (
        <TimeSelectPopup
          hours12={hours12}
          minutes={minutes}
          seconds={seconds}
          meridiem={meridiem}
          onChange={handleTimeChange}
          popupStyle={{
            position: "absolute",
            visibility: "visible",
            top: "13.2px",
            left: "-68px",
            zIndex: 50,
          }}
        />
      )}
    </dp-date-picker>
  );
}
