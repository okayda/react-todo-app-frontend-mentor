import ReactDOM from "react-dom";
import { useState, createContext, useEffect, useReducer } from "react";

import NavMenu from "../MenuModal/NavMenu";
import ChangeModal from "../ChangeModal/ChangeModal";

const reducer = function (state, action) {
  if (action.type === "add-todo") {
    return [
      ...state,
      {
        id: action.id,
        text: action.payload.text,
        isCompleted: action.payload.isCompleted,
      },
    ];
  }

  if (action.type === "delete-todo") {
    return state.filter((todo) => todo.id !== action.payload.id);
  }

  if (action.type === "turn-completed") {
    return state.map((todo) => {
      if (action.payload.id === todo.id) todo.isCompleted = true;
      return todo;
    });
  }
};

const getLocalStorage = function () {
  const getTodos = localStorage.getItem("todos");
  if (getTodos) return JSON.parse(getTodos);
  return [];
};

export const TodoContext = createContext();

export const TodoProvider = function (prop) {
  const [todos, dispatch] = useReducer(reducer, getLocalStorage());

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [isActiveMenu, setActiveMenu] = useState(false);

  const [isActiveChange, setActiveChange] = useState(false);

  const showMenu = function () {
    setActiveMenu(true);
  };

  const hideMenu = function () {
    setActiveMenu(false);
  };

  const showChange = function () {
    setActiveChange(true);
  };

  const hideChange = function () {
    setActiveChange(false);
  };

  const menuModal = ReactDOM.createPortal(
    <NavMenu />,
    document.querySelector("header")
  );

  const changeModal = ReactDOM.createPortal(
    <ChangeModal />,
    document.querySelector(".change-container")
  );

  return (
    <TodoContext.Provider
      value={{
        todo: { todos, dispatch },
        menu: { isActiveMenu, showMenu, hideMenu, menuModal },
        change: { isActiveChange, showChange, hideChange, changeModal },
      }}
    >
      {prop.children}
    </TodoContext.Provider>
  );
};
