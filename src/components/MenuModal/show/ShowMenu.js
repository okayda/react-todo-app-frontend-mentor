import { useContext } from "react";
import { TodoContext } from "../../Methods/Context/TodoContext";
import { FaTimes } from "react-icons/fa";

import style from "./ShowMenu.module.css";
import ShowMenuForm from "./ShowMenuFom";

const ShowMenu = function () {
  const {
    menu: { hideMenu },
  } = useContext(TodoContext);

  return (
    <div className={style.show}>
      <div className={style.show__header}>
        <h3>Show Specific Todo</h3>

        <button onClick={hideMenu}>
          <FaTimes />
        </button>
      </div>

      <ShowMenuForm header__show_form={style.show__form} />
    </div>
  );
};

export default ShowMenu;
