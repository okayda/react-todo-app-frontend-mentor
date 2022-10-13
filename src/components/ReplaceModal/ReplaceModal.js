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
    calendar: { flatpickr },
  } = useContext(TodoContext);

  const ref = useRef(null);

  const clearFocus = function () {
    setCurrentReplaceText("");
    ref.current.focus();
  };

  const textAreaValue = function (e) {
    setCurrentReplaceText(e.target.value);
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
    setCurrentReplaceText("");
    hideChange();
  };

  useEffect(() => {
    flatpickr(`.${style.change__form_date}`, {
      disableMobile: true,
      wrap: true,

      onClose: function (_, dateStr) {
        setCurrentReplaceDate(dateStr);
      },
    }).setDate(currentReplaceDate);
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
              onClick={clearFocus}
              type="submit"
              name="clear"
              className={style.change__button}
            >
              Clear
            </button>

            <div className={style.change__form_date}>
              <input type="text" placeholder="Calendar" data-input />

              <button name="remove-date" title="clear" data-clear>
                <FaTimes />
              </button>
            </div>
          </div>

          <div className={style.change__form_edit}>
            <button type="submit" className={style.change__button} name="save">
              Save
            </button>

            <button
              onClick={hideChange}
              type="submit"
              className={style.change__button}
              name="cancel"
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
