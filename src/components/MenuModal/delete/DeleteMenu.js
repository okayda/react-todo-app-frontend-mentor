import Delete from "./Delete";
import { FaArrowRight } from "react-icons/fa";

import style from "./DeleteMenu.module.css";

const DeleteMenu = function (prop) {
  return (
    <div className={style.delete}>
      <button className={style.delete__button} onClick={prop.onClick}>
        <h3>Delete Todos</h3>
        <FaArrowRight
          className={`${style.delete__icon} ${
            prop.deleteIsActive && style.delete__icon_active
          }`}
        />
      </button>

      <Delete deleteIsActive={prop.deleteIsActive} />
    </div>
  );
};

export default DeleteMenu;
