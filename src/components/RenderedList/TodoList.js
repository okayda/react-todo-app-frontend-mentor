import { motion, Reorder, useDragControls } from "framer-motion";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../Methods/Context/TodoContext";

import TodoItem from "./TodoItem";

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

  const control = useDragControls();

  return (
    <Reorder.Group
      onReorder={setItem}
      values={todos}
      className={prop.todo__task}
      onClick={eventDelegation}
    >
      {item.map((todo) => {
        if (todo.isCompleted) return;
        return (
          // <Reorder.Item
          //   key={todo.id}
          //   className={prop.todo__task_list}
          //   data-id={todo.id}
          //   value={todo}
          //   dragListener={false}
          //   dragControls={control}
          // >
          //   {/* <Icons /> */}

          //   <p>
          //     <ReactReadMoreReadLess
          //       charLimit={charactersLimit}
          //       readMoreText="read more"
          //       readLessText="read less"
          //       readMoreClassName={prop.todo__task_read}
          //       readLessClassName={prop.todo__task_read}
          //     >
          //       {todo.text}
          //     </ReactReadMoreReadLess>
          //   </p>

          //   <span className={prop.todo__task_date}>
          //     {todo.date || "No Date"}
          //   </span>
          // </Reorder.Item>
          <TodoItem
            key={todo.id}
            todo={todo}
            todo__task_list={prop.todo__task_list}
            todo__task_read={prop.todo__task_read}
            todo__task_date={prop.todo__task_date}
          />
        );
      })}
    </Reorder.Group>
  );
};

export default TodoList;
