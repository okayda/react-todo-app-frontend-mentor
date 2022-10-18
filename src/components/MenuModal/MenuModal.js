import { motion } from "framer-motion";
import { useState, useContext } from "react";
import { TodoContext } from "../Methods/Context/TodoContext";

import ShowMenu from "./Show/ShowMenu";
import ToggleMenu from "./Toggle/ToggleMenu";
import DeleteMenu from "./Delete/DeleteMenu";

import { modalAnimation } from "../Animation/Animation";
import Backdrop from "../Backdrop/Backdrop";

import style from "./MenuModal.module.css";

const MenuModal = function () {
  const {
    menu: { hideMenu },
  } = useContext(TodoContext);

  const [toggleIsActive, setToggleActive] = useState(false);
  const [deleteIsActive, setDeleteActive] = useState(false);

  const settingDrop = function () {
    setToggleActive((cur) => !cur);
  };

  const deleteDrop = function () {
    setDeleteActive((cur) => !cur);
  };

  return (
    <Backdrop onClick={hideMenu}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={style.header}
        variants={modalAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className={style.header__box}>
          <nav className={style.header__nav}>
            <ShowMenu
              header__show={style.header__show}
              header__show_title={style.header__show_title}
              // header__show_list={style.header__show_list}
              header__show_form={style.header__show_form}
              active_btn={style.active_btn}
            />

            <ToggleMenu
              header__setting={style.header__setting}
              header__setting_button={style.header__setting_button}
              header__setting_content={style.header__setting_content}
              header__setting_active={style.header__setting_active}
              header__setting_toggles={style.header__setting_toggles}
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
              header__delete_switches={style.header__delete_switches}
              header__delete_radios={style.header__delete_radios}
              header__delete_buttons={style.header__delete_buttons}
              onClick={deleteDrop}
              icon={style.icon}
              icon_active={style.icon_active}
              deleteIsActive={deleteIsActive}
            />
          </nav>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default MenuModal;
