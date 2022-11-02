import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { TodoContext } from "./Methods/Context/TodoContext";

import ShowMenu from "./MenuModal/Show/ShowMenu";
import ToggleMenu from "./MenuModal/Toggle/ToggleMenu";
import DeleteMenu from "./MenuModal/Delete/DeleteMenu";

import Nav from "./Nav/Nav";
import TodoForm from "./TodoForm/TodoForm";
import ChartCircle from "./Chart/ChartCircle";
import TodoList from "./RenderedList/TodoList";

import style from "./Todo.module.css";

const Todo = function () {
  const {
    todo: { todos },
    wideNav: { activeNav },
  } = useContext(TodoContext);

  return (
    <section className={style.todo}>
      {/* Logo title & Burger menu */}
      <Nav />

      {/* Form & Specific Menu */}
      <div className={style.todo__formMenu}>
        <TodoForm />

        <div className={style.todo__menuContainer}>
          <AnimatePresence>
            {activeNav === "show" ? <ShowMenu animationAllowed={true} /> : null}

            {activeNav === "setting" ? (
              <ToggleMenu animationAllowed={true} />
            ) : null}

            {activeNav === "delete" ? (
              <DeleteMenu animationAllowed={true} />
            ) : null}
          </AnimatePresence>
        </div>
      </div>

      {/* Task list & Visualization */}
      <div className={style.todo__listChart}>
        <TodoList />

        <div className={style.todo__chartContainer}>
          <ChartCircle />
          <span>{todos.length} Todos</span>
        </div>
      </div>
    </section>
  );
};

export default Todo;
