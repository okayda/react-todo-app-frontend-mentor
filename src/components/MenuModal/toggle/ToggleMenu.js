import Toggle from "./Toggle";
import { FaArrowRight } from "react-icons/fa";

const ToggleMenu = function (prop) {
  return (
    <div className={prop.header__setting}>
      <button className={prop.header__setting_button} onClick={prop.onClick}>
        <h3>U.I Toggles Settings</h3>
        <FaArrowRight
          className={`${prop.icon} ${prop.toggleIsActive && prop.icon_active}`}
        />
      </button>

      <Toggle
        header__setting_content={prop.header__setting_content}
        header__setting_active={prop.header__setting_active}
        header__setting_toggles={prop.header__setting_toggles}
        toggleIsActive={prop.toggleIsActive}
      />
    </div>
  );
};

export default ToggleMenu;
