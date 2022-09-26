import { GoGrabber } from "react-icons/go";
import { AnimatePresence, Reorder } from "framer-motion";
import { useState, useEffect } from "react";
import style from "./scss/Todo.module.css";

const submitFunc = function (e) {
  e.preventDefault();

  console.log("Hello World");
};

const Todo = function () {
  return (
    <section className={style.todo}>
      <div className={style.todo__box}>
        <div className={style.todo__title_box}>
          <h2>todo</h2>
          <button>
            <GoGrabber />
          </button>
        </div>

        <form className={style.todo__form} onSubmit={submitFunc}>
          <input
            type="text"
            className={style.todo__type}
            placeholder="Create a new todo..."
          />

          {/* <div className={style.todo__task_container}>
            <div className={style.todo__task}>
              <div className={style.todo__task_input}>
                <input type="checkbox" value="one" />
                <p htmlFor="lol">from the input</p>
              </div>
              <span>X</span>
            </div>

            <div className={style.todo__task}>
              <div className={style.todo__task_input}>
                <input type="checkbox" value="fuck" />
                <p htmlFor="do">fuck</p>
              </div>
              <span>X</span>
            </div>
          </div>
 */}
        </form>
      </div>

      <div className={style.todo__illustration_container}>
        <img
          src={require("./images/calendar.png")}
          className={style.calendar}
        />
        <h2 className={style.date}>September 22, 2022</h2>
      </div>

      <div className={style.todo__guide}>
        <p className={style.todo__guide_text}>Design & Created by Jhon</p>
      </div>
    </section>
  );
};

export default Todo;
