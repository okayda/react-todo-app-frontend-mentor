import ReactDOM from "react-dom";
import { useState, createContext, useEffect, useReducer } from "react";

import flatpickr from "flatpickr";

import Overlay from "../Overlay/Overlay";
import NavMenu from "../../MenuModal/NavMenu";
import ChangeModal from "../../ReplaceModal/ReplaceModal";

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

  if (action.type === "replace-text") {
    return state.map((todo) => {
      if (action.payload.id === todo.id) {
        todo.text = action.payload.text;
        todo.date = action.payload.date;
      }
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

  // save todos and update at localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  // <================>

  // show menu state at menu modal
  const [showTask, setShowTask] = useState("All");
  // <================>

  // calendar modal not included
  // modal state
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeReplace, setActiveReplace] = useState(false);
  // <================>

  // calendar state
  const [isActiveCalendar, setActiveCalendar] = useState(false);
  const [calendarValue, setCalendarValue] = useState("");

  const toggleOverlay = function (bool) {
    setTimeout(() => {
      setActiveCalendar(bool);
    }, 100);
  };

  // calendar config only for Calendar file
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

  // replace state
  const [taskId, setTaskId] = useState(null);
  const [currentReplaceText, setCurrentReplaceText] = useState("");
  const [currentReplaceDate, setCurrentReplaceDate] = useState("");

  // 1) Retrieving data
  // 2) Append to the replace modal
  const retriveData = function (id) {
    setTaskId(id);

    for (let i = 0; i < todos.length; i++) {
      if (id === todos[i].id) {
        setCurrentReplaceText(todos[i].text);
        setCurrentReplaceDate(todos[i].date);
        break;
      }
    }
  };
  // <================>

  // calendar modal not included
  // modals display
  const showMenu = function () {
    setActiveMenu(true);
  };

  const hideMenu = function () {
    setActiveMenu(false);
  };

  const showChange = function (id) {
    retriveData(id);
    setActiveReplace(true);
  };

  const hideChange = function () {
    setActiveReplace(false);
  };
  // <================>

  // calendar modal not included
  // if the overlay clicked will be executed this
  const removeModals = function (e) {
    e.stopPropagation();

    if (activeMenu) {
      setActiveMenu(false);
      return;
    }

    if (activeReplace) {
      setActiveReplace(false);
      return;
    }
  };
  // <================>

  // HTML element Render
  const menuModal = ReactDOM.createPortal(
    <NavMenu />,
    document.querySelector("header")
  );

  const replaceModal = ReactDOM.createPortal(
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
        menu: { activeMenu, showMenu, hideMenu, menuModal },
        replace: {
          replaceModal,
          activeReplace,
          showChange,
          hideChange,

          taskId,
          setTaskId,

          currentReplaceText,
          setCurrentReplaceText,

          currentReplaceDate,
          setCurrentReplaceDate,
        },
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
