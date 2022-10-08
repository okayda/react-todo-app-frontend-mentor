import { useState, useContext, useEffect, useRef } from "react";
import { TodoContext } from "../Methods/Context/TodoContext";

import flatpickr from "flatpickr";

const TodoForm = function (prop) {
  const [inputValue, setInputValue] = useState("");

  const {
    todo: { dispatch },
    calendar: { showCalendarOverlay, hideCalendarOverlay },
  } = useContext(TodoContext);

  const submitForm = function (e) {
    e.preventDefault();

    dispatch({
      type: "add-todo",
      id: Math.random().toString(),
      payload: { text: inputValue, isCompleted: false },
    });

    setInputValue("");
  };

  const storedInputValue = function (e) {
    setInputValue(e.target.value);
  };

  //Functionality of calendar
  const ref = useRef(null);

  const focusTextArea = function () {
    ref.current.focus();
  };

  useEffect(() => {
    flatpickr(`.${prop.todo__form_date}`, {
      dateFormat: "Y-m-d",
      disableMobile: true,
      onOpen: focusTextArea,
      onClose: function () {
        focusTextArea();
        hideCalendarOverlay();
      },
      onMonthChange: focusTextArea,
    });
  }, []);

  return (
    <form className={prop.todo__form} onSubmit={submitForm}>
      <textarea
        ref={ref}
        type="text"
        className={prop.todo__form_input}
        placeholder="Create a new todo..."
        onChange={storedInputValue}
        value={inputValue}
      />
      <br />

      <div className={prop.todo__form_buttons}>
        <input
          type="submit"
          className={prop.todo__form_add}
          name="add"
          value="Add"
        />

        <input
          type="text"
          className={prop.todo__form_date}
          placeholder="Calendar"
          onClick={showCalendarOverlay}
        />
      </div>
    </form>
  );
};

export default TodoForm;
