import ReactDOM from "react-dom";
import { useState, createContext } from "react";

import NavMenu from "../menu/NavMenu";

export const TodoContext = createContext();
export const TodoProvider = function (prop) {
  const [todos, setTodos] = useState([]);
  const [isActiveMenu, setActiveMenu] = useState(false);

  const showMenu = function () {
    setActiveMenu(true);
  };

  const hideMenu = function () {
    setActiveMenu(false);
  };

  const menuModal = ReactDOM.createPortal(
    <NavMenu />,
    document.querySelector("header")
  );

  return (
    <TodoContext.Provider
      value={{
        todo: { todos, setTodos },
        menu: { isActiveMenu, showMenu, hideMenu, menuModal },
      }}
    >
      {prop.children}
    </TodoContext.Provider>
  );
};
