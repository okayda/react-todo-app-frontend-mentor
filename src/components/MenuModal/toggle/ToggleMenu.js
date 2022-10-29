import Toggle from "./Toggle";
import { FaArrowRight } from "react-icons/fa";

import style from "./Toggle.module.css";

const ToggleMenu = function (prop) {
  return (
    <div className={style.setting}>
      <button className={style.setting__button} onClick={prop.onClick}>
        <h3>U.I Toggles Settings</h3>
        <FaArrowRight
          className={`${style.setting__icon} ${
            prop.toggleIsActive && style.setting__icon_active
          }`}
        />
      </button>

      <Toggle toggleIsActive={prop.toggleIsActive} />
    </div>
  );
};

export default ToggleMenu;
