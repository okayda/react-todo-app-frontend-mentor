import { useContext, useRef } from "react";
import { TodoContext } from "../Methods/Context/TodoContext";

import Icons from "./TodoIcons/Icons";
import TodoText from "./TodoText";

const TodoList = function (prop) {
  const {
    todo: { todos, dispatch },
    change: { showChange },
  } = useContext(TodoContext);

  // For manipulating the Todo task array in TodoContext
  const dynamicTodo = function (type, id) {
    dispatch({
      type: type,
      payload: { id: id },
    });
  };

  //  this function is only for task list
  const iconsFunctionality = function (className, id) {
    if (className === "move") return;

    if (className === "replace") {
      showChange();
      return;
    }

    if (className === "complete") {
      dynamicTodo("turn-completed", id);
      return;
    }

    if (className === "remove") {
      dynamicTodo("turn-deleted", id);
      return;
    }
  };

  // one handler for all task inside of ul below
  const eventDelegation = function (e) {
    const target = e.target.closest("li");
    // Main parent list (<li></li)
    const parentClassList = target.parentElement.parentElement;
    const parentId = parentClassList.dataset.id;
    if (!parentId) return;

    // Main child list
    const classNameList = target.className;
    iconsFunctionality(classNameList, parentId);
  };

  return (
    <ul className={prop.todo__task} onClick={eventDelegation}>
      {todos.map((todo) => {
        if (todo.isCompleted) return;

        return (
          <li key={todo.id} className={prop.todo__task_list} data-id={todo.id}>
            <Icons />

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
