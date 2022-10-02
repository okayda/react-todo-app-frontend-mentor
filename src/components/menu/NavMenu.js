import { useState } from "react";

import ShowMenu from "./show/ShowMenu";
import ToggleMenu from "./toggle/ToggleMenu";
import DeleteMenu from "./delete/DeleteMenu";

import style from "./NavMenu.module.css";

const NavMenu = function (prop) {
  const [toggleIsActive, setToggleActive] = useState(false);
  const [deleteIsActive, setDeleteActive] = useState(false);

  const settingDrop = function () {
    setToggleActive((cur) => !cur);
  };

  const deleteDrop = function () {
    setDeleteActive((cur) => !cur);
  };

  return (
    <div className={style.header}>
      <div className={style.header__box}>
        <nav className={style.header__nav}>
          <ShowMenu
            header__show={style.header__show}
            header__show_title={style.header__show_title}
            header__show_list={style.header__show_list}
            active_btn={style.active_btn}
          />

          <ToggleMenu
            header__setting={style.header__setting}
            header__setting_button={style.header__setting_button}
            header__setting_content={style.header__setting_content}
            header__setting_active={style.header__setting_active}
            toggle__container={style.toggle__container}
            onClick={settingDrop}
            icon={style.icon}
            icon_active={style.icon_active}
            toggleIsActive={toggleIsActive}
          />

          <DeleteMenu
            header__delete={style.header__delete}
            header__delete_button={style.header__delete_button}
            header__delete_content={style.header__delete_content}
            header__delete_active={style.header__delete_active}
            switch__container={style.switch__container}
            radio__container={style.radio__container}
            button__container={style.button__container}
            onClick={deleteDrop}
            icon={style.icon}
            icon_active={style.icon_active}
            deleteIsActive={deleteIsActive}
          />
        </nav>
      </div>
    </div>
  );
};

export default NavMenu;
