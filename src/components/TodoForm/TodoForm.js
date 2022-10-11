import { useState, useContext } from "react";
import { TodoContext } from "../Methods/Context/TodoContext";

import Calendar from "./Calendar";

const TodoForm = function (prop) {
  const [inputValue, setInputValue] = useState("");

  const {
    todo: { dispatch },
    calendar: { flatpickr, FlatpickrConfig, calendarValue, setCalendarValue },
  } = useContext(TodoContext);

  const submitForm = function (e) {
    e.preventDefault();

    const submitter = e.nativeEvent.submitter.name;
    if (submitter !== "add") return;

    dispatch({
      type: "add-todo",
      id: Math.random().toString(),
      payload: {
        text: inputValue,
        date: calendarValue ? calendarValue : "No Date",
        isCompleted: false,
      },
    });

    flatpickr(`.${prop.todo__form_dateContainer}`, FlatpickrConfig).clear();

    setCalendarValue("");
    setInputValue("");
  };

  const storedInputValue = function (e) {
    setInputValue(e.target.value);
  };

  return (
    <form className={prop.todo__form} onSubmit={submitForm}>
      <textarea
        type="text"
        className={prop.todo__form_input}
        placeholder="Create a new todo..."
        onChange={storedInputValue}
        value={inputValue}
      />
      <br />

      <div className={prop.todo__form_buttons}>
        <button className={prop.todo__form_add} name="add">
          Add
        </button>

        <button className={prop.todo__form_clear} name="clear">
          Clear
        </button>

        <Calendar
          todo__form_dateContainer={prop.todo__form_dateContainer}
          todo__form_dateInput={prop.todo__form_dateInput}
          todo__form_clearDate={prop.todo__form_clearDate}
        />
      </div>
    </form>
  );
};

export default TodoForm;
