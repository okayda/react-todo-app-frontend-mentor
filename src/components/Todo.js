import { GoGrabber } from "react-icons/go";

import { AnimatePresence, Reorder } from "framer-motion";
import { useState, useEffect, useContext } from "react";

import { TodoContext } from "./methods/TodoContext";

import Icons from "./icons/Icons";
import TodoText from "./methods/TodoText";

import style from "./Todo.module.css";

const limitWords = 24;

const Todo = function () {
  const {
    todo: { todos, setTodos },
    menu: { showMenu },
  } = useContext(TodoContext);

  const [todoInput, setTodoInput] = useState("");

  const submitFunc = function (e) {
    e.preventDefault();

    const submitter = e.nativeEvent.submitter.name;
    if (submitter === "date") return;

    setTodos((cur) => [
      ...cur,
      {
        text: todoInput,
        id: Math.random(),
      },
    ]);

    setTodoInput("");
  };

  const inputTodoValue = function (e) {
    setTodoInput(e.target.value);
  };

  const lol = function () {
    console.log("lol");
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
        <input
          type="text"
          className={style.todo__form_input}
          placeholder="Create a new todo..."
          onChange={inputTodoValue}
          value={todoInput}
          rows={4}
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

      <ul className={style.todo__task}>
        {todos.map((todo) => (
          <li key={todo.id} className={style.todo__task_list}>
            <Icons />

            <TodoText
              limit={limitWords}
              todo__read_button={style.todo__task_read}
            >
              {todo.text}
            </TodoText>
          </li>
        ))}
      </ul>

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
