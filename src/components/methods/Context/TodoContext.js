import { useState, createContext, useEffect, useReducer } from "react";

import flatpickr from "flatpickr";
import {
  CalendarConfigForm,
  CalendarConfigReplace,
} from "../CalendarConfig/CalendarConfig";

const reducer = function (state, action) {
  if (action.type === "move") return state;

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

  // modal state
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeReplace, setActiveReplace] = useState(false);
  // <================>

  // Replace modal state
  const [taskId, setTaskId] = useState(null);
  const [currentReplaceText, setCurrentReplaceText] = useState("");
  const [currentReplaceDate, setCurrentReplaceDate] = useState("");
  // <================>

  // calendar state
  const [activeCalendar, setActiveCalendar] = useState(false);
  const [calendarValue, setCalendarValue] = useState("");

  // this config only for Calendar TodoForm.js
  const FlatpickrConfigForm = CalendarConfigForm(
    setActiveCalendar,
    setCalendarValue
  );

  // this config only for Calendar ReplaceModal.js
  const FlatpickrConfigReplace = CalendarConfigReplace(setCurrentReplaceDate);
  // <================>

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

  return (
    <TodoContext.Provider
      value={{
        todo: { todos, dispatch },
        menu: { activeMenu, showMenu, hideMenu },
        replace: {
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

          FlatpickrConfigForm,
          FlatpickrConfigReplace,

          calendarValue,
          setCalendarValue,

          setActiveCalendar,
          activeCalendar,
        },
      }}
    >
      {prop.children}
    </TodoContext.Provider>
  );
};
