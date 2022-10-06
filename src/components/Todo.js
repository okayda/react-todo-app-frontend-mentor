import { GoGrabber } from "react-icons/go";

import { AnimatePresence, Reorder } from "framer-motion";
import { useState, useEffect, useContext } from "react";

import { TodoContext } from "./Methods/Context/TodoContext";

import TodoList from "./RenderedList/TodoList";

import style from "./Todo.module.css";

const Todo = function () {
  const [todoInput, setTodoInput] = useState("");

  const {
    todo: { dispatch },
    menu: { showMenu },
  } = useContext(TodoContext);

  const submitFunc = function (e) {
    e.preventDefault();

    const submitter = e.nativeEvent.submitter.name;
    if (submitter === "date") return;

    dispatch({
      type: "add-todo",
      id: Math.random().toString(),
      payload: { text: todoInput, isCompleted: false },
    });

    setTodoInput("");
  };

  const inputTodoValue = function (e) {
    setTodoInput(e.target.value);
  };

  return (
    <section className={style.todo}>
      <div className={style.todo__title}>
        <h2>todo</h2>
        <button onClick={showMenu}>
          <GoGrabber />
        </button>
      </div>
      <form className={style.todo__form} onSubmit={submitFunc}>
        <textarea
          type="text"
          className={style.todo__form_input}
          placeholder="Create a new todo..."
          onChange={inputTodoValue}
          value={todoInput}
        />
        <br />

        <div className={style.todo__form_buttons}>
          <input
            type="submit"
            className={style.todo__form_add}
            name="add"
            value="Add"
          />

          <input
            type="submit"
            className={style.todo__form_date}
            name="date"
            value="Pick Date"
          />
        </div>
      </form>

      {/* Rendered Todo List */}
      <TodoList
        todo__task={style.todo__task}
        todo__task_list={style.todo__task_list}
        todo__task_read={style.todo__task_read}
      />

      <div className={style.todo__background}>
        <img
          src={require("../images/calendar.png")}
          className={style.todo__background_calendar}
        />
        <h2 className={style.todo__background_date}>September 22, 2022</h2>
      </div>
      <div className={style.todo__guide}>
        <p className={style.todo__guide_text}>Design & Created by Jhon</p>
      </div>
    </section>
  );
};

export default Todo;
