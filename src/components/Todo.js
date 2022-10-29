import { AnimatePresence, Reorder } from "framer-motion";
import { useContext, useEffect } from "react";
import { TodoContext } from "./Methods/Context/TodoContext";

import ShowMenu from "./MenuModal/Show/ShowMenu";
import ToggleMenu from "./MenuModal/Toggle/ToggleMenu";
import DeleteMenu from "./MenuModal/Delete/DeleteMenu";

import Nav from "./Nav/Nav";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./RenderedList/TodoList";
import EmptyBackground from "./EmptyBackground/EmptyBackground";
import Footer from "./Footer/Footer";

import style from "./Todo.module.css";

const Todo = function () {
  const {
    wideNav: { activeNav },
  } = useContext(TodoContext);

  return (
    <section className={style.todo}>
      {/* Logo title & Burger menu */}
      <Nav />

      <div className={style.todo__fromSetting}>
        <TodoForm />
        {activeNav === "show" ? <ShowMenu /> : null}
        {activeNav === "setting" ? <ToggleMenu /> : null}
        {activeNav === "delete" ? <DeleteMenu /> : null}
      </div>

      {/* Rendered Todo List */}
      <TodoList />

      {/* U.I Introduction */}
      {/* <EmptyBackground
        todo__background={style.todo__background}
        todo__background_calendar={style.todo__background_calendar}
        todo__background_date={style.todo__background_date}
      /> */}

      {/* <Footer
        todo__guide={style.todo__guide}
        todo__guide_text={style.todo__guide_text}
      /> */}
    </section>
  );
};

export default Todo;
