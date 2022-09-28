import ToggleContent from "./ToggleContent";
import { FaArrowRight } from "react-icons/fa";

const ToggleMenu = function (prop) {
  return (
    <div className={prop.headerSetting}>
      <button className={prop.headerSettingBtn} onClick={prop.onClickBtn}>
        <h3>U.I Toggles Settings</h3>
        <FaArrowRight
          className={`${prop.icon} ${prop.isActive && prop.activeIcon}`}
        />
      </button>

      <ToggleContent
        headerSettingContent={prop.headerSettingContent}
        isActive={prop.isActive}
        headerSettingActive={prop.headerSettingActive}
        toggleContainer={prop.toggleContainer}
      />
    </div>
  );
};

export default ToggleMenu;
