import { useState, useContext, useEffect, useRef } from "react";

import { FaTimes } from "react-icons/fa";
import { TodoContext } from "../Methods/Context/TodoContext";

import style from "./ChangeModal.module.css";

const ChangeModal = function () {
  const {
    todo: { dispatch },
    change: {
      hideChange,
      changeModalValue,
      changeId,
      setChangeId,
      changeDate,
      setChangeDate,
    },
    calendar: { flatpickr },
  } = useContext(TodoContext);

  const [currentValue, setCurrentValue] = useState(changeModalValue);
  const [newChangeDate, setNewChangeDate] = useState();

  const ref = useRef(null);

  const storedInputValue = function (e) {
    setCurrentValue(e.target.value);
  };

  const submitChange = function (e) {
    e.preventDefault();

    const submitter = e.nativeEvent.submitter.name;
    if (submitter === "cancel") {
      hideChange();
      return;
    }

    if (submitter === "clear") {
      setCurrentValue("");
      ref.current.focus();
      return;
    }

    if (submitter === "remove-date") return;

    dispatch({
      type: "replace-text",
      payload: { id: changeId, text: currentValue, date: newChangeDate },
    });
    setCurrentValue("");
    setChangeId(null);
    hideChange();
  };

  useEffect(() => {
    flatpickr(`.${style.change__form_date}`, {
      disableMobile: true,
      wrap: true,

      onClose: function (_, dateStr) {
        setNewChangeDate(dateStr);
      },
    }).setDate(changeDate);
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

        <form onSubmit={submitChange} className={style.change__form}>
          <textarea
            onChange={storedInputValue}
            value={currentValue}
            ref={ref}
          />

          <div className={style.change__form_inputButton}>
            <button type="submit" name="clear" className={style.change__button}>
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
