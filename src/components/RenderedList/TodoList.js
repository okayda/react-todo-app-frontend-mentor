import { useContext } from "react";
import { TodoContext } from "../Methods/Context/TodoContext";

import Icons from "./TodoIcons/Icons";
import TodoText from "./TodoText";

const TodoList = function (prop) {
  const {
    todo: { todos },
  } = useContext(TodoContext);

  return (
    <ul className={prop.todo__task}>
      {todos.map((todo) => {
        if (todo.isCompleted) return;

        return (
          <li key={todo.id} className={prop.todo__task_list}>
            <Icons id={todo.id} />

            <TodoText todo__read_button={prop.todo__task_read}>
              {todo.text}
            </TodoText>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
