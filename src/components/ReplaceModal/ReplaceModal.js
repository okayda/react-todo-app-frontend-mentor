import { useContext, useEffect, useRef } from "react";

import { FaTimes } from "react-icons/fa";
import { TodoContext } from "../Methods/Context/TodoContext";

import style from "./ReplaceModal.module.css";

const ChangeModal = function () {
  const {
    todo: { dispatch },
    replace: {
      hideChange,

      taskId,
      setTaskId,

      currentReplaceText,
      setCurrentReplaceText,

      currentReplaceDate,
      setCurrentReplaceDate,
    },
    calendar: { flatpickr, resetCalendarValue },
  } = useContext(TodoContext);

  const ref = useRef(null);

  const clearFocus = function () {
    setCurrentReplaceText("");
    ref.current.focus();
  };

  const textAreaValue = function (e) {
    setCurrentReplaceText(e.target.value);
  };

  const resetReplaceCalendarValue = function () {
    setCurrentReplaceDate("");
  };

  const submitReplace = function (e) {
    e.preventDefault();

    const submitter = e.nativeEvent.submitter.name;
    if (submitter !== "save") return;

    dispatch({
      type: "replace-text",
      payload: {
        id: taskId,
        text: currentReplaceText,
        date: currentReplaceDate,
      },
    });
    setTaskId(null);
    resetReplaceCalendarValue();
    hideChange();
  };

  // once the DOM is rendered will be executed the flatpickr library
  useEffect(() => {
    const calendar = flatpickr(`.${style.change__form_date}`, {
      disableMobile: true,
      wrap: true,

      onClose: function (_, dateStr) {
        setCurrentReplaceDate(dateStr);
      },
    });

    // will execute this if the date on a task list is exist
    if (currentReplaceDate) calendar.setDate(currentReplaceDate);
  }, []);

  return (
    <div className={style.change}>
      <div className={style.change__box}>
        <div className={style.change__title}>
          <h2>Replacing</h2>

          <button className={style.change__exit} onClick={hideChange}>
            <FaTimes />
          </button>
        </div>

        <form onSubmit={submitReplace} className={style.change__form}>
          <textarea
            onChange={textAreaValue}
            value={currentReplaceText}
            ref={ref}
          />

          <div className={style.change__form_inputButton}>
            <button
              type="button"
              onClick={clearFocus}
              name="clear"
              className={style.change__button}
            >
              Clear
            </button>

            <div className={style.change__form_date}>
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

          <div className={style.change__form_edit}>
            <button type="submit" className={style.change__button} name="save">
              Save
            </button>

            <button
              type="button"
              name="cancel"
              onClick={hideChange}
              className={style.change__button}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangeModal;
