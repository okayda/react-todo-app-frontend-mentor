import { useContext } from "react";
import { TodoContext } from "../../../Methods/Context/TodoContext";
import { FaTimes } from "react-icons/fa";

import style from "../ReplaceForm.module.css";

const ClearCalendar = function () {
  const {
    replace: {
      focusTextArea,

      setCurrentReplaceText,

      setCurrentReplaceDate,
    },
  } = useContext(TodoContext);

  const clearReplaceText = function () {
    setCurrentReplaceText("");
    focusTextArea.current.focus();
  };

  const resetReplaceCalendarValue = function () {
    setCurrentReplaceDate("");
  };

  return (
    <div className={style.replaceForm__clearCalendarContainer}>
      <button
        type="button"
        onClick={clearReplaceText}
        name="clear"
        className={style.replaceForm__button}
      >
        Clear
      </button>

      <div
        className={style.replaceForm__calendarContainer}
        id="replaceCalendar"
      >
        <input type="text" placeholder="Calendar" data-input />

        <button
          type="button"
          name="remove-date"
          data-clear
          onClick={resetReplaceCalendarValue}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default ClearCalendar;
