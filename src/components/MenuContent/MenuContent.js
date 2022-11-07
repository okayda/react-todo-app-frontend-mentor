import { useState, useContext } from "react";
import { TodoContext } from "../Methods/Context/TodoContext";
import Modal from "../Modal/Modal";

import ShowMenu from "./Show/ShowMenu";
import ToggleMenu from "./Toggle/ToggleMenu";
import DeleteMenu from "./Delete/DeleteMenu";

import { modalAnimation } from "../Animation/Animation";

import style from "./MenuContent.module.css";

const MenuContent = function () {
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
    <Modal
      obj={{
        className: style.header,
        onClick: (e) => e.stopPropagation(),
        variants: modalAnimation,
        initial: "hidden",
        animate: "visible",
        exit: "exit",
      }}
      portalElement="menu-container"
      removeModal={hideMenu}
    >
      <div className={style.header__box}>
        <nav className={style.header__nav}>
          <ShowMenu />

          <ToggleMenu onClick={settingDrop} toggleIsActive={toggleIsActive} />

          <DeleteMenu onClick={deleteDrop} deleteIsActive={deleteIsActive} />
        </nav>
      </div>
    </Modal>
  );
};

export default MenuContent;
