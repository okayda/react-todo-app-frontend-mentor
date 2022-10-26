import { AnimatePresence, Reorder } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../Methods/Context/TodoContext";

import TodoItem from "./TodoItem/TodoItem";

const TodoList = function (prop) {
  const {
    show: { showTask },
    toggle: { enableModify, enableComplete },
    delete: { enableDelete },
    todo: { todos, dispatch },
    replace: { showChange },
  } = useContext(TodoContext);

  const [todosData, setTodosData] = useState(todos);
  const [animationActive, setAnimation] = useState(false);

  useEffect(() => {
    setTodosData(todos);
  }, [todos]);

  useEffect(() => {
    setAnimation(true);
  }, []);

  useEffect(() => {
    // the reorder save functionality it will only work if the
    // todos container array in the localStorage length is 2 if it's true.
    // you can swap the todo and if the user swap the todo the saving mechanism
    // will trigger after 1 second of swapped to prevent multiple execution of saving

    // todos !== todosData it will check if the previous one is todos[data] is
    // not equal to the current new reordered todos[data] if it's true means
    // the user swapped the todo and the timeout will trigger to save the swap

    const timerSaveTodosOrder = setTimeout(() => {
      if (todos.length >= 2 && todos !== todosData)
        dispatch({
          type: "reorder-save",
          payload: { currentOrderTodoData: todosData },
        });
    }, 1000);

    return () => clearTimeout(timerSaveTodosOrder);
  }, [todosData]);

  // For manipulating the Todo task array in the TodoContext
  const dynamicTodo = function (type, id) {
    dispatch({
      type: type,
      payload: { id: id },
    });
  };

  //  this function is only for task list
  const iconsFunctionality = function (className, id) {
    // for dragging the dragListener are responsible for drag
    if (className === "move") return;

    const targetClass = className.split(" ");

    if (targetClass.includes("replace") && enableModify) {
      showChange(id);
      return;
    }

    if (
      targetClass.includes("complete") &&
      targetClass.includes("true") &&
      enableComplete
      /*
      the purpose of includes true is to prevent the execution
      of this if statement again. if the task is mark as completed
      if there is no true className included will not be executed
      */
    ) {
      dynamicTodo("turn-completed", id);
      return;
    }

    if (targetClass.includes("remove") && enableDelete) {
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
    <Reorder.Group
      axis="y"
      onReorder={setTodosData}
      values={todos}
      className={prop.todo__task}
      onClick={eventDelegation}
    >
      <AnimatePresence>
        {todosData.map((todo) => {
          if (showTask === "completed-todo" && !todo.isCompleted) return;
          if (showTask === "active-todo" && todo.isCompleted) return;

          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              animationActive={animationActive}
              todo__task_list={prop.todo__task_list}
              todo__task_read={prop.todo__task_read}
              todo__task_date={prop.todo__task_date}
            />
          );
        })}
      </AnimatePresence>
    </Reorder.Group>
  );
};

export default TodoList;
