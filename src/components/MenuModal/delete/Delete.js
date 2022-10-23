import { useContext } from "react";
import { TodoContext } from "../../Methods/Context/TodoContext";
import ReactSwitch from "react-switch";

const Delete = function (prop) {
  const {
    delete: { isAllowDelete, setAllowDelete },
  } = useContext(TodoContext);

  const toggleDelete = function () {
    setAllowDelete((cur) => (cur ? false : true));
  };

  return (
    <div
      className={`${prop.header__delete_content} ${
        prop.deleteIsActive && prop.header__delete_active
      }`}
    >
      <div className={prop.header__delete_switches}>
        <ReactSwitch onChange={toggleDelete} checked={isAllowDelete} />
        <span>Show Delete Todo</span>
      </div>

      <div className={prop.header__delete_radios}>
        <label htmlFor="activeDelete">Active</label>
        <input type="radio" name="delete" id="activeDelete" />
      </div>

      <div className={prop.header__delete_radios}>
        <label htmlFor="completedDelete">Completed</label>
        <input type="radio" name="delete" id="completedDelete" />
      </div>

      <div className={prop.header__delete_buttons}>
        <button>Delete</button>
        <button>Clear All</button>
      </div>
    </div>
  );
};

export default Delete;
