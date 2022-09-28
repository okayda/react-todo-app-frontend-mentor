import ReactSwitch from "react-switch";

const DeleteContent = function (prop) {
  return (
    <div
      className={`${prop.headerDeleteContent} ${
        prop.deleteIsActive && prop.headerDeleteActive
      }`}
    >
      <div className={prop.switchContainer}>
        <ReactSwitch />
        <span>Show Delete Todo</span>
      </div>

      <div className={prop.radioContainer}>
        <label htmlFor="activeDelete">Active</label>
        <input type="radio" name="delete" id="activeDelete" />
      </div>

      <div className={prop.radioContainer}>
        <label htmlFor="completedDelete">Completed</label>
        <input type="radio" name="delete" id="completedDelete" />
      </div>

      <div className={prop.buttonContainer}>
        <button>Delete</button>
        <button>Clear All</button>
      </div>
    </div>
  );
};

export default DeleteContent;
