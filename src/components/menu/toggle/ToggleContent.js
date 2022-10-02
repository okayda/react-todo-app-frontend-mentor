import ReactSwitch from "react-switch";

const ToggleContent = function (prop) {
  return (
    <div
      className={`${prop.header__setting_content} ${
        prop.toggleIsActive && prop.header__setting_active
      }`}
    >
      <div className={prop.toggle__container}>
        <ReactSwitch /> <span>Drag & Drop</span>
      </div>

      <div className={prop.toggle__container}>
        <ReactSwitch /> <span>Modify Todo</span>
      </div>

      <div className={prop.toggle__container}>
        <ReactSwitch /> <span>Theme</span>
      </div>

      <div className={prop.toggle__container}>
        <input type="number" /> <span>Todos Shown</span>
      </div>
    </div>
  );
};

export default ToggleContent;
