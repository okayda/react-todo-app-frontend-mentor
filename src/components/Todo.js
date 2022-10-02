import { GoGrabber } from "react-icons/go";

import { AnimatePresence, Reorder } from "framer-motion";
import { useState, useEffect, useContext } from "react";

import { TodoContext } from "./TodoContext";

import Icons from "./icons/Icons";
import TodoText from "./TodoText";

import style from "../scss/Todo.module.css";

const limitWords = 24;

const Todo = function (prop) {
  const [todos, setTodos] = useContext(TodoContext);
  const [todoInput, setTodoInput] = useState("");

  const submitFunc = function (e) {
    e.preventDefault();

    const wordsInput = todoInput.split(" ");

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

  return (
    <section className={style.todo}>
      <div className={style.todo__title_box}>
        <h2>todo</h2>
        <button onClick={prop.activateMenu}>
          <GoGrabber />
        </button>
      </div>

      <form className={style.todo__form} onSubmit={submitFunc}>
        <input
          type="text"
          className={style.todo__type}
          placeholder="Create a new todo..."
          onChange={inputTodoValue}
          value={todoInput}
        />
      </form>

      <ul className={style.todo__task_container}>
        {todos.map((todo) => (
          <li key={todo.id} className={style.todo__task}>
            <Icons />
            <TodoText
              limit={limitWords}
              todo__read_button={style.todo__read_button}
            >
              {todo.text}
            </TodoText>
          </li>
        ))}
      </ul>

      <div className={style.todo__illustration_container}>
        <img
          src={require("../images/calendar.png")}
          className={style.calendar}
        />
        <h2 className={style.date}>September 22, 2022</h2>
      </div>

      <div className={style.todo__guide}>
        <p className={style.todo__guide_text}>Design & Created by Jhon</p>
      </div>
    </section>
  );
};

export default Todo;
