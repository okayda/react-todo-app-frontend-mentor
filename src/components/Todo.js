import { AnimatePresence, Reorder } from "framer-motion";
import { useEffect } from "react";

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
      <Nav todo__title={style.todo__title} />

      {/* Textarea Todo */}
      <TodoForm
        todo__form={style.todo__form}
        todo__form_input={style.todo__form_input}
        todo__form_buttons={style.todo__form_buttons}
        todo__form_add={style.todo__form_add}
        todo__form_clear={style.todo__form_clear}
        todo__form_dateContainer={style.todo__form_dateContainer}
        todo__form_dateInput={style.todo__form_dateInput}
        todo__form_clearDate={style.todo__form_clearDate}
      />

      {/* Rendered Todo List */}
      <TodoList
        todo__task={style.todo__task}
        todo__task_list={style.todo__task_list}
        todo__task_read={style.todo__task_read}
        todo__task_date={style.todo__task_date}
      />

      {/* U.I Introduction */}
      <EmptyBackground
        todo__background={style.todo__background}
        todo__background_calendar={style.todo__background_calendar}
        todo__background_date={style.todo__background_date}
      />

      {/* <Footer
        todo__guide={style.todo__guide}
        todo__guide_text={style.todo__guide_text}
      /> */}
    </section>
  );
};

export default Todo;
