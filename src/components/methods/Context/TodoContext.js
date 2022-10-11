import ReactDOM from "react-dom";
import { useState, createContext, useEffect, useReducer } from "react";

import flatpickr from "flatpickr";

import Overlay from "../Overlay/Overlay";
import NavMenu from "../../MenuModal/NavMenu";
import ChangeModal from "../../ChangeModal/ChangeModal";

const reducer = function (state, action) {
  if (action.type === "add-todo") {
    return [
      ...state,
      {
        id: action.id,
        text: action.payload.text,
        date: action.payload.date,
        isCompleted: action.payload.isCompleted,
      },
    ];
  }

  if (action.type === "turn-completed") {
    return state.map((todo) => {
      if (action.payload.id === todo.id) todo.isCompleted = true;
      return todo;
    });
  }

  if (action.type === "turn-deleted") {
    return state.filter((todo) => todo.id !== action.payload.id);
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

  // save todos and update at localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  // <================>

  // show menu state at menu modal
  const [showTask, setShowTask] = useState("All");
  // <================>

  // modal state
  const [isActiveMenu, setActiveMenu] = useState(false);
  const [isActiveChange, setActiveChange] = useState(false);
  // <================>

  // calendar state
  const [isActiveCalendar, setActiveCalendar] = useState(false);
  const [calendarValue, setCalendarValue] = useState("");
  // <================>

  // calendar modal not included
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
  // <================>

  // calendar modal not included
  const removeModals = function (e) {
    e.stopPropagation();

    if (isActiveMenu) {
      setActiveMenu(false);
      return;
    }

    if (isActiveChange) {
      setActiveChange(false);
      return;
    }
  };
  // <================>

  // Calendar object
  // only for calendar overlay
  const toggleOverlay = function (bool) {
    setTimeout(() => {
      setActiveCalendar(bool);
    }, 100);
  };

  const FlatpickrConfig = {
    disableMobile: true,
    wrap: true,

    onOpen: function () {
      toggleOverlay(true);
    },

    onClose: function (_, dateStr) {
      toggleOverlay(false);

      if (!dateStr) return;
      setCalendarValue(dateStr);
    },
  };
  // <================>

  // HTML element Render
  const menuModal = ReactDOM.createPortal(
    <NavMenu />,
    document.querySelector("header")
  );

  const changeModal = ReactDOM.createPortal(
    <ChangeModal />,
    document.querySelector(".change-container")
  );

  const overlay = ReactDOM.createPortal(
    <Overlay />,
    document.querySelector(".overlay-container")
  );
  // <================>

  return (
    <TodoContext.Provider
      value={{
        todo: { todos, dispatch },
        menu: { isActiveMenu, showMenu, hideMenu, menuModal },
        change: { isActiveChange, showChange, hideChange, changeModal },
        calendar: {
          flatpickr,
          FlatpickrConfig,
          calendarValue,
          setCalendarValue,
          isActiveCalendar,
          toggleOverlay,
        },
        overlay: { overlay, removeModals },
      }}
    >
      {prop.children}
    </TodoContext.Provider>
  );
};
