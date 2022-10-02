import ReactDOM from "react-dom";
import { useState, createContext } from "react";

import NavMenu from "../menu/NavMenu";

export const TodoContext = createContext();
export const TodoProvider = function (prop) {
  const [todos, setTodos] = useState([]);
  const [isActiveMenu, setActiveMenu] = useState(false);

  const activateMenuFunc = function () {
    setActiveMenu(true);
  };

  const deactivateMenuFunc = function () {
    setActiveMenu(false);
  };

  const menuElement = ReactDOM.createPortal(
    <NavMenu deactivateMenu={deactivateMenuFunc} />,
    document.querySelector("header")
  );

  return (
    <TodoContext.Provider
      value={{
        todo: { todos, setTodos },
        menu: { isActiveMenu, activateMenuFunc, menuElement },
      }}
    >
      {prop.children}
    </TodoContext.Provider>
  );
};
