import { useContext } from "react";
import { TodoContext } from "../../Methods/Context/TodoContext";

import style from "./ShowMenu.module.css";

const ShowMenuForm = function () {
  const {
    show: {
      showTask,
      setShowTask,
      ALL_TODO,
      ACTIVE_TODO,
      COMPLETED_TODO,
      COUNTED_TODO,
    },
  } = useContext(TodoContext);

  // if the user in the mobile and the visualization is enabled
  // and the user transit to tablet, desktop or turn their device to horizontal
  // the show specific todos will be back to default show.
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 700) setShowTask(ALL_TODO);
  });

  // show specific todos functionalities
  const handleSelected = function (e) {
    const value = e.target.value;

    if (value === ALL_TODO) {
      setShowTask(ALL_TODO);
      return;
    }

    if (value === ACTIVE_TODO) {
      setShowTask(ACTIVE_TODO);
      return;
    }

    if (value === COMPLETED_TODO) {
      setShowTask(COMPLETED_TODO);
      return;
    }

    if (value === COUNTED_TODO) {
      setShowTask(COUNTED_TODO);
      return;
    }
  };

  return (
    <form className={style.show__form}>
      <div>
        <input
          name="show-todo"
          type="radio"
          id={ALL_TODO}
          value={ALL_TODO}
          checked={showTask === ALL_TODO && true}
          onChange={handleSelected}
        />
        <label htmlFor={ALL_TODO}>All</label>
      </div>

      <div>
        <input
          name="show-todo"
          type="radio"
          id={ACTIVE_TODO}
          value={ACTIVE_TODO}
          checked={showTask === ACTIVE_TODO && true}
          onChange={handleSelected}
        />
        <label htmlFor={ACTIVE_TODO}>Active</label>
      </div>

      <div>
        <input
          name="show-todo"
          type="radio"
          id={COMPLETED_TODO}
          value={COMPLETED_TODO}
          checked={showTask === COMPLETED_TODO && true}
          onChange={handleSelected}
        />
        <label htmlFor={COMPLETED_TODO}>Completed</label>
      </div>

      <div className={style.visual}>
        <input
          name="show-todo"
          type="radio"
          id={COUNTED_TODO}
          value={COUNTED_TODO}
          checked={showTask === COUNTED_TODO && true}
          onChange={handleSelected}
        />
        <label htmlFor={COUNTED_TODO}>Visualization</label>
      </div>
    </form>
  );
};

export default ShowMenuForm;
