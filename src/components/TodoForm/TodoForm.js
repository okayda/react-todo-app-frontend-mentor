import { useState, useContext, useRef } from "react";
import { TodoContext } from "../Methods/Context/TodoContext";

import Calendar from "./Calendar";
import style from "./TodoForm.module.css";

const TodoForm = function () {
  const ref = useRef(null);

  const [inputValue, setInputValue] = useState("");
  const [textEmpty, setTextEmpty] = useState(false);

  const {
    todo: { dispatch },
    calendar: {
      flatpickr,
      FlatpickrConfigForm,
      calendarValue,
      setCalendarValue,
    },
  } = useContext(TodoContext);

  const submitForm = function (e) {
    e.preventDefault();

    const submitter = e.nativeEvent.submitter.name;
    if (submitter !== "add") return;
    if (inputValue.trim() === "") {
      setTextEmpty(true);
      return;
    }

    if (textEmpty) setTextEmpty(false);

    dispatch({
      type: "add-todo",
      id: Math.random().toString(),
      payload: {
        text: inputValue,
        date: calendarValue ? calendarValue : null,
        isCompleted: false,
      },
    });

    flatpickr(`.${style.form__calendarContainer}`, FlatpickrConfigForm).clear();

    setCalendarValue("");
    setInputValue("");
  };

  const storedInputValue = function (e) {
    setInputValue(e.target.value);
  };

  const clearTextArea = function () {
    setInputValue("");
    ref.current.focus();
  };

  const quoteText = (
    <p className={style.form__quote}>Always compare yourself to yourself</p>
  );

  const errorText = (
    <p
      className={`${style.form__msg} ${
        textEmpty ? style.form__errorMsg : null
      }`}
    >
      The text area should not be empty
    </p>
  );

  return (
    <form className={style.form} onSubmit={submitForm}>
      <textarea
        ref={ref}
        type="text"
        className={`${style.form__textarea} ${
          textEmpty ? style.form__textareaInvalid : null
        }`}
        placeholder="Create a new todo..."
        onChange={storedInputValue}
        value={inputValue}
      />
      {textEmpty ? errorText : quoteText}
      <br />

      <div className={style.form__buttons}>
        <button className={style.form__add} name="add">
          Add
        </button>

        <button
          className={style.form__clear}
          onClick={clearTextArea}
          name="clear"
        >
          Clear
        </button>

        <Calendar />
      </div>
    </form>
  );
};

export default TodoForm;
