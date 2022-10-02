import ReactSwitch from "react-switch";

const ToggleContent = function (prop) {
  return (
    <div
      className={`${prop.header__setting_content} ${
        prop.toggleIsActive && prop.header__setting_active
      }`}
    >
      <div className={prop.header__setting_toggles}>
        <ReactSwitch /> <span>Drag & Drop</span>
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
