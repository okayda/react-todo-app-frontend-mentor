import { useContext, useEffect } from "react";
import { TodoContext } from "../Methods/Context/TodoContext";
import { FaTimes } from "react-icons/fa";

const Calendar = function (prop) {
  const {
    calendar: { flatpickr, FlatpickrConfig, setCalendarValue },
  } = useContext(TodoContext);

  const resetCalendarValue = function () {
    setCalendarValue("");
  };

  useEffect(() => {
    flatpickr(`.${prop.todo__form_dateContainer}`, FlatpickrConfig);
  }, []);

  return (
    <div className={prop.todo__form_dateContainer}>
      <input
        type="text"
        className={prop.todo__form_dateInput}
        placeholder="Calendar"
        data-input
      />
      <button
        className={prop.todo__form_clearDate}
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
