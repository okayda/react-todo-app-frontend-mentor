import { useState, useContext } from "react";
import { TodoContext } from "../Methods/Context/TodoContext";

const TodoForm = function (prop) {
  const [inputValue, setInputValue] = useState("");

  const {
    todo: { dispatch },
  } = useContext(TodoContext);

  const submitForm = function (e) {
    e.preventDefault();

    const submitBtn = e.nativeEvent.submitter.name;
    if (submitBtn === "date") return;

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
        <input
          type="submit"
          className={prop.todo__form_add}
          name="add"
          value="Add"
        />

        <input
          type="submit"
          className={prop.todo__form_date}
          name="date"
          value="Pick Date"
        />
      </div>
    </form>
  );
};

export default TodoForm;
