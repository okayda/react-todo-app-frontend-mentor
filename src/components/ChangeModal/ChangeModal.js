import { FaTimes } from "react-icons/fa";

import { useState, useContext } from "react";
import { TodoContext } from "../Methods/TodoContext";

import style from "./ChangeModal.module.css";

const ChangeModal = function () {
  const [textInput, setTextInput] = useState("LOL");

  const {
    change: { hideChange },
  } = useContext(TodoContext);

  const storedTextInput = function (e) {
    setTextInput(e.target.value);
  };

  return (
    <div className={style.change}>
      <div className={style.change__box}>
        <div className={style.change__title}>
          <h2>Replacing</h2>

          <button className={style.change__exit} onClick={hideChange}>
            <FaTimes />
          </button>
        </div>

        <form className={style.change__form}>
          <textarea onChange={storedTextInput} value={textInput} />

          <div className={style.change__form_date}>
            <input
              type="submit"
              value="1 / 20 / 2022"
              className={style.change__button}
            />
          </div>

          <div className={style.change__form_edit}>
            <input
              type="submit"
              value="Turn in"
              className={style.change__button}
            />
            <input
              type="submit"
              value="Cancel"
              className={style.change__button}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangeModal;
