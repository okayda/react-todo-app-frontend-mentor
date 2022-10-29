import { useContext, useEffect } from "react";
import { TodoContext } from "../Methods/Context/TodoContext";
import { FaTimes } from "react-icons/fa";

import style from "./TodoForm.module.css";

const Calendar = function () {
  const {
    calendar: { flatpickr, FlatpickrConfigForm, setCalendarValue },
  } = useContext(TodoContext);

  const resetCalendarValue = function () {
    setCalendarValue("");
  };

  useEffect(() => {
    flatpickr(`.${style.form__calendarContainer}`, FlatpickrConfigForm);
  }, []);

  return (
    <div className={style.form__calendarContainer}>
      <input
        type="text"
        className={style.form__calendarInput}
        placeholder="Calendar"
        data-input
      />
      <button
        className={style.form__calendarClear}
        name="remove-date"
        title="clear"
        data-clear
        onClick={resetCalendarValue}
      >
        <FaTimes />
      </button>
    </div>
  );
};

export default Calendar;
