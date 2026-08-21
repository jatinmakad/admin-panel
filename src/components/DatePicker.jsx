
import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";

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

const formatInputDate = (d, fmt = "DD/MM/YYYY") => {
  if (!d) return "";
  const map = {
    YYYY: d.getFullYear(),
    MM: pad2(d.getMonth() + 1),
    DD: pad2(d.getDate()),
  };
  return fmt.replace(/YYYY|MM|DD/g, (m) => map[m]);
};

// Builds the 5-6 row day grid, matching dp-prev-month / dp-current-month / dp-next-month
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

/**
 * Single-date picker. Markup / classNames intentionally mirror ng2-date-picker's
 * dp-date-picker / dp-day-calendar output 1:1 so an existing CSS file styles it
 * with zero changes. Do not rename any className below.
 *
 * <DatePicker
 *   value={date}            // Date | null
 *   onChange={(date) => {}}
 *   min={Date}               // optional lower bound
 *   max={Date}               // optional upper bound
 *   format="DD/MM/YYYY"
 *   placeholder="Select date"
 * />
 */
export default function DatePicker({
  value = null,
  onChange,
  min = null,
  max = null,
  format = "DD/MM/YYYY",
  placeholder = "",
}) {
  const [open, setOpen] = useState(false);
  const [viewDate, setViewDate] = useState(() => value || min || new Date());
  const rootRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target))
        setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isDisabled = useCallback(
    (date) => {
      if (min && date < startOfDay(min)) return true;
      if (max && date > startOfDay(max)) return true;
      return false;
    },
    [min, max],
  );

  const weeks = useMemo(() => buildWeeks(viewDate), [viewDate]);
  const today = useMemo(() => startOfDay(new Date()), []);

  const goPrevMonth = () => setViewDate((d) => addMonths(d, -1));
  const goNextMonth = () => setViewDate((d) => addMonths(d, 1));
  const goToday = () => {
    if (isDisabled(today)) return;
    setViewDate(today);
    onChange?.(today);
    setOpen(false);
  };

  const pickDate = (date) => {
    if (isDisabled(date)) return;
    onChange?.(date);
    setOpen(false);
  };

  const prevMonthDisabled =
    !!min &&
    addMonths(viewDate, -1) < new Date(min.getFullYear(), min.getMonth(), 1);
  const nextMonthDisabled =
    !!max &&
    addMonths(viewDate, 1) > new Date(max.getFullYear(), max.getMonth(), 1);

  const headerLabel = `${MONTHS_SHORT[viewDate.getMonth()]}, ${viewDate.getFullYear()}`;
  const headerFullLabel = `${MONTHS_FULL[viewDate.getMonth()]} ${viewDate.getFullYear()}`;

  return (
    <dp-date-picker
      className="ng-star-inserted dp-material"
      style={{ position: "relative" }}
      ref={rootRef}
    >
      <div className="dp-open">
        <div className="dp-input-container">
          <input
            ref={inputRef}
            type="text"
            className="dp-picker-input ng-untouched ng-pristine ng-valid"
            placeholder={placeholder}
            readOnly
            value={formatInputDate(value, format)}
            onClick={() => setOpen((o) => !o)}
          />
          <input
            _ngcontent-serverapp-c110
            id="startTime"
            type="text"
            placeholder="09:00"
            maxLength={5}
            className="time-input disable ng-untouched ng-dirty"
            disabled
          />
        </div>
      </div>

      {open && (
        <div
          style={{
            position: "absolute",
            visibility: "visible",
            top: "13.2px",
            left: "0px",
            zIndex: 50,
          }}
        >
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
                          onClick={goPrevMonth}
                        />
                      </div>
                      <button
                        type="button"
                        className="dp-current-location-btn ng-star-inserted"
                        onClick={goToday}
                        disabled={isDisabled(today)}
                      />
                      <div className="dp-calendar-nav-container-right">
                        <button
                          type="button"
                          className="dp-calendar-nav-right"
                          data-hidden="false"
                          disabled={nextMonthDisabled}
                          onClick={goNextMonth}
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
                            onClick={() => pickDate(cell.date)}
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
      )}
    </dp-date-picker>
  );
}
