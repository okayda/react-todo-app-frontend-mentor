import ReactSwitch from "react-switch";

const DeleteContent = function (prop) {
  return (
    <div
      className={`${prop.header__delete_content} ${
        prop.deleteIsActive && prop.header__delete_active
      }`}
    >
      <div className={prop.switch__container}>
        <ReactSwitch />
        <span>Show Delete Todo</span>
      </div>

      <div className={prop.radio__container}>
        <label htmlFor="activeDelete">Active</label>
        <input type="radio" name="delete" id="activeDelete" />
      </div>

      <div className={prop.radio__container}>
        <label htmlFor="completedDelete">Completed</label>
        <input type="radio" name="delete" id="completedDelete" />
      </div>

      <div className={prop.button__container}>
        <button>Delete</button>
        <button>Clear All</button>
      </div>
    </div>
  );
};

export default DeleteContent;
