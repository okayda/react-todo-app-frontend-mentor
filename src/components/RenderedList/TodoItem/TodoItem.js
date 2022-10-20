import { useContext } from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { useMotionValue, Reorder } from "framer-motion";
import { TodoContext } from "../../Methods/Context/TodoContext";

import { taskAnimation } from "../../Animation/Animation";
import TodoItemShadow from "./TodoItemShadow";
import Icons from "../TodoIcons/Icons";

const charactersLimit = 100;

const TodoItem = function (prop) {
  const {
    toggle: { isAllowDrag },
  } = useContext(TodoContext);

  const y = useMotionValue(0);
  const boxShadow = TodoItemShadow(y);

  return (
    <Reorder.Item
      style={{ boxShadow, y }}
      dragListener={isAllowDrag}
      value={prop.todo}
      data-id={prop.todo.id}
      className={prop.todo__task_list}
      variants={taskAnimation}
      initial={prop.animationActive ? "hidden" : false}
      animate="visible"
      exit="exit"
    >
      <Icons isDrag={isAllowDrag} />

      <p>
        <ReactReadMoreReadLess
          charLimit={charactersLimit}
          readMoreText="read more"
          readLessText="read less"
          readMoreClassName={prop.todo__task_read}
          readLessClassName={prop.todo__task_read}
        >
          {prop.todo.text}
        </ReactReadMoreReadLess>
      </p>

      <span className={prop.todo__task_date}>
        {prop.todo.date || "No Date"}
      </span>
    </Reorder.Item>
  );
};

export default TodoItem;
