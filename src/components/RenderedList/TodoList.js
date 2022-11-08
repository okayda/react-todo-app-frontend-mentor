import { useState, useEffect, useContext } from "react";
import { TodoContext } from "../Methods/Context/TodoContext";
import { AnimatePresence, Reorder } from "framer-motion";

import ContentLoad from "../Methods/ContentLoad/ContentLoad";
import ChartCircle from "../Chart/ChartCircle";
import TodoItem from "./TodoItem/TodoItem";
import style from "./TodoList.module.css";

const TodoList = function () {
  const {
    todo: { todos, dispatch },
    show: { showTask },
    toggle: { enableModify, enableComplete },
    delete: { enableDelete },
    replace: { showChange },
  } = useContext(TodoContext);

  const [todosData, setTodosData] = useState(todos);
  const [loaderShow, setLoaderShow] = useState(todos.length > 0);
  const [animationActive, setAnimation] = useState(false);

  useEffect(() => {
    // without this the reorder saving mechanism will not be work properly
    setTodosData(todos);

    // alternate renderation for todo list & content loader
    setLoaderShow(todos.length > 0);
  }, [todos]);

  // if the todos already rendered and the webpage is suddenly refresh
  // the enter animation will not be applied for each todo
  useEffect(() => {
    setAnimation(true);
  }, []);

  useEffect(() => {
    // the reorder save functionality it will only work this if the
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
    const targetClass = className.split(" ");

    // enable represents the toggle switch

    if (targetClass.includes("replace") && enableModify) {
      showChange(id);
      return;
    }

    /*
      the purpose of includes true is to prevent the re-execution
      of this if the statement again. if the task is mark as completed
      if there is no true className included will not be executed again
      */
    if (
      targetClass.includes("complete") &&
      targetClass.includes("true") &&
      enableComplete
    ) {
      dynamicTodo("turn-completed", id);
      return;
    }

    if (targetClass.includes("remove") && enableDelete) {
      dynamicTodo("delete-todo", id);
      return;
    }
  };

  // one handler for all todos
  const eventDelegation = function (e) {
    const target = e.target.closest("li");
    if (!target) return;

    // Main parent list (<li></li)
    const parentClassList = target.parentElement.parentElement;
    const parentId = parentClassList.dataset.id;
    if (!parentId) return;

    // Main child list
    const classNameList = target.className;
    iconsFunctionality(classNameList, parentId);
  };

  // Visualization JSX
  const listChart = (
    <div className={style.taskList__chartContainer}>
      <ChartCircle />
      <span>{todos.length} Todos</span>
    </div>
  );

  // Todos
  const list = todosData.map((todo) => {
    if (showTask === "counted-todo") return null;
    if (showTask === "completed-todo" && !todo.isCompleted) return null;
    if (showTask === "active-todo" && todo.isCompleted) return null;

    return (
      <TodoItem key={todo.id} todo={todo} animationActive={animationActive} />
    );
  });

  return (
    <Reorder.Group
      className={style.taskList}
      onReorder={setTodosData}
      values={todos}
      onClick={eventDelegation}
    >
      <AnimatePresence>
        {loaderShow ? list : <ContentLoad />}

        {/* 
        if there is no todo and the user clicked the Visualization
        in the show menu it will not be displayed 
        */}
        {showTask === "counted-todo" && todos.length !== 0 ? listChart : null}
      </AnimatePresence>
    </Reorder.Group>
  );
};

export default TodoList;
