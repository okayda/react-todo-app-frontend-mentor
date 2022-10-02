import { useState } from "react";

import ShowMenu from "./show/ShowMenu";
import ToggleMenu from "./toggle/ToggleMenu";
import DeleteMenu from "./delete/DeleteMenu";

import style from "./NavMenu.module.css";

const NavMenu = function (prop) {
  const [isActive, setActive] = useState(false);
  const [deleteIsActive, setDeleteActive] = useState(false);

  const settingDrop = function () {
    setActive((cur) => (cur ? false : true));
  };

  const deleteDrop = function () {
    setDeleteActive((cur) => (cur ? false : true));
  };

  return (
    <div className={style.header}>
      <div className={style.header__box}>
        <nav className={style.header__nav}>
          <ShowMenu
            classShow={style.header__show}
            showTitle={style.header__show_title}
            showList={style.header__show_list}
            active={style.active_btn}
            deactivateMenu={prop.deactivateMenu}
          />

          <ToggleMenu
            headerSetting={style.header__setting}
            headerSettingBtn={style.header__setting_button}
            onClickBtn={settingDrop}
            icon={style.icon}
            activeIcon={style.active_icon}
            headerSettingContent={style.header__setting_content}
            isActive={isActive}
            headerSettingActive={style.header__setting_active}
            toggleContainer={style.toggle__container}
          />

          <DeleteMenu
            headerDelete={style.header__delete}
            headerDeleteButton={style.header__delete_button}
            onClickBtn={deleteDrop}
            icon={style.icon}
            deleteIsActive={deleteIsActive}
            activeIcon={style.active_icon}
            headerDeleteContent={style.header__delete_content}
            headerDeleteActive={style.header__delete_active}
            switchContainer={style.switch__container}
            radioContainer={style.radio__container}
            buttonContainer={style.button__container}
          />
        </nav>
      </div>
    </div>
  );
};

export default NavMenu;
