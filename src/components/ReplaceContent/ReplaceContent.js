import { useState, useContext, useEffect, useRef } from "react";
import { TodoContext } from "../Methods/Context/TodoContext";
import { FaTimes } from "react-icons/fa";

import { modalAnimation } from "../Animation/Animation";
import Modal from "../Modal/Modal";

import ReplaceForm from "./ReplaceForm/ReplaceForm";

import style from "./ReplaceContent.module.css";

const ReplaceContent = function () {
  const {
    replace: { hideChange },
  } = useContext(TodoContext);

  return (
    <Modal
      obj={{
        className: style.change,
        onClick: (e) => e.stopPropagation(),
        variants: modalAnimation,
        initial: "hidden",
        animate: "visible",
        exit: "exit",
      }}
      portalElement="replace-container"
      removeModal={hideChange}
    >
      <div className={style.change__box}>
        <div className={style.change__title}>
          <h2>Replacing</h2>

          <button className={style.change__exit} onClick={hideChange}>
            <FaTimes />
          </button>
        </div>

        <ReplaceForm />
      </div>
    </Modal>
  );
};

export default ReplaceContent;
