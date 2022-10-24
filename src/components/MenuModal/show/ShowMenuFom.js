import { useContext } from "react";
import { TodoContext } from "../../Methods/Context/TodoContext";

const ShowMenuForm = function (prop) {
  const {
    show: { showTask, setShowTask, ALL_TODO, ACTIVE_TODO, COMPLETED_TODO },
  } = useContext(TodoContext);

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
  };

  return (
    <form className={prop.header__show_form}>
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
    </form>
  );
};

export default ShowMenuForm;
