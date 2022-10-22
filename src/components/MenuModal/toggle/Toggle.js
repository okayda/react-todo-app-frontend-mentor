import { useContext } from "react";
import { TodoContext } from "../../Methods/Context/TodoContext";
import ReactSwitch from "react-switch";

const Toggle = function (prop) {
  const {
    toggle: { isAllowDrag, setAllowDrag, isAllowModify, setAllowModify },
  } = useContext(TodoContext);

  const toggleDrag = function () {
    setAllowDrag((cur) => (cur ? false : true));
  };

  const toggleModify = function () {
    setAllowModify((cur) => (cur ? false : true));
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
        <ReactSwitch onChange={toggleModify} checked={isAllowModify} />
        <span>Modify Todo</span>
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

export default Toggle;
