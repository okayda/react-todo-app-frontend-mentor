import { useContext } from "react";
import { TodoContext } from "../../Methods/Context/TodoContext";
import ReactSwitch from "react-switch";

const ToggleContent = function (prop) {
  const {
    toggle: { isAllowDrag, setAllowDrag },
  } = useContext(TodoContext);

  const toggleDrag = function () {
    setAllowDrag((cur) => (cur ? false : true));
  };

  return (
    <div
      className={`${prop.header__setting_content} ${
        prop.toggleIsActive && prop.header__setting_active
      }`}
    >
      <div className={prop.header__setting_toggles}>
        <ReactSwitch onChange={toggleDrag} checked={isAllowDrag} />
        <span>Drag & Drop</span>
      </div>

      <div className={prop.header__setting_toggles}>
        <ReactSwitch /> <span>Modify Todo</span>
      </div>

      <div className={prop.header__setting_toggles}>
        <ReactSwitch /> <span>Theme</span>
      </div>

      <div className={prop.header__setting_toggles}>
        <input type="number" /> <span>Todos Shown</span>
      </div>
    </div>
  );
};

export default ToggleContent;
