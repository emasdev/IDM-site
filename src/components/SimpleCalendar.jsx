import { useState } from "react";

const MONTHS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const DAY_LABELS = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

function buildCalendarGrid(year, month) {
  const firstDay = new Date(year, month, 1);
  const lastDayNum = new Date(year, month + 1, 0).getDate();
  const startPad = firstDay.getDay(); // 0 = Sunday

  const days = [];

  // Previous month padding
  for (let i = startPad - 1; i >= 0; i--) {
    days.push({ date: new Date(year, month, -i), currentMonth: false });
  }

  // Current month
  for (let d = 1; d <= lastDayNum; d++) {
    days.push({ date: new Date(year, month, d), currentMonth: true });
  }

  // Next month padding to fill last week
  const remaining = 7 - (days.length % 7 || 7);
  for (let d = 1; d <= remaining; d++) {
    days.push({ date: new Date(year, month + 1, d), currentMonth: false });
  }

  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return weeks;
}

function sameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export default function SimpleCalendar({ selectedDate, onDateSelect }) {
  const [viewDate, setViewDate] = useState(() => new Date());

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const weeks = buildCalendarGrid(year, month);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const prevMonth = () =>
    setViewDate((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1));
  const nextMonth = () =>
    setViewDate((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1));

  const handleDayClick = (date, currentMonth) => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    if (!currentMonth || d < today || d.getDay() === 0) return;
    onDateSelect(d);
  };

  return (
    <div className="calendar">
      <header style={{ position: "relative", padding: "0 40px 10px" }}>
        <button
          className="simple-calendar-btn btn-prev"
          onClick={prevMonth}
          aria-label="Mes anterior"
        />
        <p className="month">
          {MONTHS[month]} <span className="year">{year}</span>
        </p>
        <button
          className="simple-calendar-btn btn-next"
          onClick={nextMonth}
          aria-label="Mes siguiente"
        />
      </header>
      <table>
        <thead>
          <tr>
            {DAY_LABELS.map((d) => (
              <th key={d}>{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, wi) => (
            <tr key={wi}>
              {week.map(({ date, currentMonth }, di) => {
                const d = new Date(date);
                d.setHours(0, 0, 0, 0);
                const isPast = d < today;
                const isSunday = d.getDay() === 0;
                const isDisabled = !currentMonth || isPast || isSunday;
                const isToday = sameDay(d, today);
                const isSelected = selectedDate && sameDay(d, selectedDate);

                const classes = [
                  "day",
                  !currentMonth ? "wrong-month" : "",
                  isToday && !isSelected ? "today" : "",
                  isSelected ? "active" : "",
                  isDisabled ? "disabled" : "",
                ]
                  .filter(Boolean)
                  .join(" ");

                return (
                  <td key={di}>
                    <span
                      className={classes}
                      onClick={() => handleDayClick(date, currentMonth)}
                    >
                      {date.getDate()}
                    </span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
