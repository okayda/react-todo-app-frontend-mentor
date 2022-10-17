import ReactReadMoreReadLess from "react-read-more-read-less";
import { useMotionValue, Reorder, useDragControls } from "framer-motion";
import TodoItemShadow from "./TodoItemShadow";
import Icons from "./TodoIcons/Icons";

const charactersLimit = 100;

const TodoItem = function (prop) {
  const y = useMotionValue(0);
  const boxShadow = TodoItemShadow(y);
  const control = useDragControls();

  return (
    <Reorder.Item
      style={{ boxShadow, y }}
      dragListener={false}
      dragControls={control}
      value={prop.todo}
      data-id={prop.todo.id}
      className={prop.todo__task_list}
    >
      <Icons onPointerDown={(e) => control.start(e)} />

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
