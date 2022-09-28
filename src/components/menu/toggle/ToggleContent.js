import ReactSwitch from "react-switch";

const ToggleContent = function (prop) {
  return (
    <div
      className={`${prop.headerSettingContent} ${
        prop.isActive && prop.headerSettingActive
      }`}
    >
      <div className={prop.toggleContainer}>
        <ReactSwitch /> <span>Drag & Drop</span>
      </div>

      <div className={prop.toggleContainer}>
        <ReactSwitch /> <span>Theme</span>
      </div>

      <div className={prop.toggleContainer}>
        <input type="number" /> <span>Todos Shown</span>
      </div>
    </div>
  );
};

export default ToggleContent;
