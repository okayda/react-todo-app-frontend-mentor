import { useState, createContext, useEffect, useReducer } from "react";

import flatpickr from "flatpickr";
import {
  CalendarConfigForm,
  CalendarConfigReplace,
} from "../CalendarConfig/CalendarConfig";

const reducer = function (state, action) {
  // todo wll be added in the locaStorage
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

  // todos array in localStorage will be clear
  if (action.type === "delete-all") {
    return (state = []);
  }

  // deleting specific todo in the localStorage
  if (action.type === "delete-todo") {
    return state.filter((todo) => todo.id !== action.payload.id);
  }

  // not completed todos will be deleted
  if (action.type === "delete-active") {
    return state.filter((todo) => todo.isCompleted !== false);
  }

  // completed todos will be deleted
  if (action.type === "delete-completed") {
    return state.filter((todo) => todo.isCompleted !== true);
  }

  // changing specific todo in the localStorage
  if (action.type === "replace-text") {
    return state.map((todo) => {
      if (action.payload.id === todo.id) {
        todo.text = action.payload.text;
        todo.date = action.payload.date;
      }
      return todo;
    });
  }

  // turning an active todo to completed
  if (action.type === "turn-completed") {
    return state.map((todo) => {
      if (action.payload.id === todo.id) todo.isCompleted = true;
      return todo;
    });
  }

  // if the todos is swapped beacuse of the reorder the localStorage will be updated
  if (action.type === "reorder-save") {
    return (state = action.payload.currentOrderTodoData);
  }
};

// todos array
const getTodosLocalStorage = function () {
  const getTodos = localStorage.getItem("todos");
  if (getTodos) return JSON.parse(getTodos);
  return [];
};

// setting object
const getSettingLocalStorage = function () {
  const getSettings = localStorage.getItem("settings");
  if (getSettings) return JSON.parse(getSettings);

  return {
    allowDrag: true,
    allowModify: true,
    allowComplete: true,
    allowDelete: true,
  };
};

export const TodoContext = createContext();

export const TodoProvider = function (prop) {
  // setting state
  const [settings, setSettings] = useState(getSettingLocalStorage());

  // todos state
  const [todos, dispatch] = useReducer(reducer, getTodosLocalStorage());

  // save todos and update at localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  // <================>

  // save settings and update at localStorage
  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);
  // <================>

  // tablet & desktop navigation state
  // for specific menu
  const [activeNav, setActiveNav] = useState("show");
  // <================>

  // modal state
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeReplace, setActiveReplace] = useState(false);
  // <================>

  // show menu state at menu modal
  const ALL_TODO = "all-todo";
  const ACTIVE_TODO = "active-todo";
  const COMPLETED_TODO = "completed-todo";
  const COUNTED_TODO = "counted-todo";
  const [showTask, setShowTask] = useState(ALL_TODO);
  // <================>

  // toggle state menu
  const [enableDrag, setEnableDrag] = useState(settings.allowDrag);
  const [enableModify, setEnableModify] = useState(settings.allowModify);
  const [enableComplete, setEnableComplete] = useState(settings.allowComplete);
  // <================>

  // delete state menu
  const [enableDelete, setEnableDelete] = useState(settings.allowDelete);
  const [selectedDelete, setSelectedDelete] = useState(null);
  // <================>

  // replace modal state
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

  // 1) Retrieving data in the localStorage
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

  // modals display
  // calendar modal not included
  const showMenu = function () {
    setActiveMenu(true);
  };

  const hideMenu = function () {
    setActiveMenu(false);

    // if the MenuModal is closed it will be unchecked the radio buttons
    // in the delete setting & disabled the delete button
    setSelectedDelete(null);
  };

  const showChange = function (id) {
    retriveData(id);
    setActiveReplace(true);
  };

  const hideChange = function () {
    setActiveReplace(false);

    // the replace modal calendar will be removed in the calendar container
    // if the replace modal is hide
    flatpickr("#replaceCalendar").destroy();
  };
  // <================>

  return (
    <TodoContext.Provider
      value={{
        todo: { todos, dispatch },

        wideNav: {
          activeNav,
          setActiveNav,
        },

        show: {
          showTask,
          setShowTask,

          ALL_TODO,
          ACTIVE_TODO,
          COMPLETED_TODO,
          COUNTED_TODO,
        },

        setting: {
          setSettings,
        },

        toggle: {
          enableDrag,
          setEnableDrag,

          enableModify,
          setEnableModify,

          enableComplete,
          setEnableComplete,
        },

        delete: {
          enableDelete,
          setEnableDelete,

          selectedDelete,
          setSelectedDelete,
        },

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
