import { useContext } from "react";
import { TodoContext } from "../../Methods/Context/TodoContext";
import ReactSwitch from "react-switch";
import style from "./Toggle.module.css";

const Toggle = function (prop) {
  const {
    setting: { setSettings },
    toggle: {
      enableDrag,
      setEnableDrag,

      enableModify,
      setEnableModify,

      enableComplete,
      setEnableComplete,
    },
  } = useContext(TodoContext);

  const toggleDrag = function () {
    setEnableDrag((cur) => (cur ? false : true));

    setSettings((cur) => ({ ...cur, allowDrag: cur.allowDrag ? false : true }));
  };

  const toggleModify = function () {
    setEnableModify((cur) => (cur ? false : true));

    setSettings((cur) => ({
      ...cur,
      allowModify: cur.allowModify ? false : true,
    }));
  };

  const toggleComplete = function () {
    setEnableComplete((cur) => (cur ? false : true));

    setSettings((cur) => ({
      ...cur,
      allowComplete: cur.allowComplete ? false : true,
    }));
  };

  return (
    <div
      className={`${style.setting__content} ${
        prop.toggleIsActive && style.setting__active
      }`}
    >
      <div className={style.setting__container}>
        <ReactSwitch onChange={toggleDrag} checked={enableDrag} />
        <span>Drag & Drop</span>
      </div>

      <div className={style.setting__container}>
        <ReactSwitch onChange={toggleModify} checked={enableModify} />
        <span>Modify Todo</span>
      </div>

      <div className={style.setting__container}>
        <ReactSwitch onChange={toggleComplete} checked={enableComplete} />
        <span>Completed Todo</span>
      </div>
    </div>
  );
};

export default Toggle;
