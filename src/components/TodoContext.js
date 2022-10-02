import { createContext } from "react";
import { useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = function (prop) {
  const [todos, setTodos] = useState([]);

  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      {prop.children}
    </TodoContext.Provider>
  );
};
