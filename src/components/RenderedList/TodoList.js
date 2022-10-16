import { AnimatePresence, Reorder } from "framer-motion";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../Methods/Context/TodoContext";

import Icons from "./TodoIcons/Icons";

const charactersLimit = 100;

const TodoList = function (prop) {
  const {
    todo: { todos, dispatch },
    replace: { showChange },
  } = useContext(TodoContext);

  // For manipulating the Todo task array in the TodoContext
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
      showChange(id);
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

  const [item, setItem] = useState(todos);

  useEffect(() => {
    setItem(todos);
  }, [todos]);

  return (
    <Reorder.Group
      values={todos}
      onReorder={setItem}
      className={prop.todo__task}
      onClick={eventDelegation}
    >
      {item.map((todo) => {
        if (todo.isCompleted) return;
        return (
          <Reorder.Item
            key={todo.id}
            value={todo}
            className={prop.todo__task_list}
            data-id={todo.id}
          >
            <Icons />

            <p>
              <ReactReadMoreReadLess
                charLimit={charactersLimit}
                readMoreText="read more"
                readLessText="read less"
                readMoreClassName={prop.todo__task_read}
                readLessClassName={prop.todo__task_read}
              >
                {todo.text}
              </ReactReadMoreReadLess>
            </p>

            <span className={prop.todo__task_date}>
              {todo.date || "No Date"}
            </span>
          </Reorder.Item>
        );
      })}
    </Reorder.Group>
  );
};

export default TodoList;
