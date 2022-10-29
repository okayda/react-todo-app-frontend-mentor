import { useContext } from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { useMotionValue, Reorder, useDragControls } from "framer-motion";
import { TodoContext } from "../../Methods/Context/TodoContext";

import { taskAnimation } from "../../Animation/Animation";
import TodoItemShadow from "./TodoItemShadow";
import Icons from "../TodoIcons/Icons";

import style from "../TodoList.module.css";

const charactersLimit = 80;

const TodoItem = function (prop) {
  const {
    toggle: { enableDrag, enableModify, enableComplete },
    delete: { enableDelete },
  } = useContext(TodoContext);

  const control = useDragControls();

  const y = useMotionValue(0);
  const boxShadow = TodoItemShadow(y);

  return (
    <Reorder.Item
      className={style.taskList__list}
      drag
      style={{ boxShadow, y }}
      dragListener={enableDrag}
      dragControls={control}
      value={prop.todo}
      data-id={prop.todo.id}
      variants={taskAnimation}
      initial={prop.animationActive ? "hidden" : false}
      animate="visible"
      exit="exit"
    >
      <Icons
        control={(e) => control.start(e)}
        isDrag={enableDrag}
        isModify={enableModify}
        isSavedCompleted={prop.todo.isCompleted}
        isComplete={enableComplete}
        isDelete={enableDelete}
      />

      <p>
        <ReactReadMoreReadLess
          readMoreClassName={style.taskList__listRead}
          readLessClassName={style.taskList__listRead}
          charLimit={charactersLimit}
          readMoreText="read more"
          readLessText="read less"
        >
          {prop.todo.text}
        </ReactReadMoreReadLess>
      </p>

      <span className={style.taskList__listDate}>
        {prop.todo.date || "No Date"}
      </span>
    </Reorder.Item>
  );
};

export default TodoItem;
