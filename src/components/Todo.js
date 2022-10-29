import { AnimatePresence, Reorder } from "framer-motion";
import { useEffect } from "react";

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
  return (
    <section className={style.todo}>
      {/* Logo title & Burger menu */}
      <Nav />

      {/* Textarea Todo */}
      <div className={style.todo__fromSetting}>
        <TodoForm />
        {/* <ShowMenu /> */}
        {/* <ToggleMenu /> */}
        {/* <DeleteMenu /> */}
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
