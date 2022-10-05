import { useContext } from "react";
import { TodoContext } from "../Methods/TodoContext";

import {
  FaRegEdit,
  FaRegCheckCircle,
  FaRegHandPaper,
  FaTimes,
} from "react-icons/fa";

import style from "./Icon.module.css";

const Icons = function ({ id }) {
  const {
    todo: { dispatch },
    change: { isActiveChange, showChange, hideChange },
  } = useContext(TodoContext);

  const removeTodo = function () {
    dispatch({
      type: "delete-todo",
      payload: { id: id },
    });
  };

  const completedTodo = function () {
    dispatch({
      type: "turn-completed",
      payload: { id: id },
    });
  };

  return (
    <ul className={style.icons}>
      <li>
        <button>
          <FaRegHandPaper />
        </button>
      </li>
      <li>
        <button onClick={showChange}>
          <FaRegEdit />
        </button>
      </li>
      <li>
        <button onClick={completedTodo}>
          <FaRegCheckCircle />
        </button>
      </li>
      <li>
        <button onClick={removeTodo}>
          <FaTimes />
        </button>
      </li>
    </ul>
  );
};

export default Icons;
