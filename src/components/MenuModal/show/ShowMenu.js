import { useContext } from "react";
import { TodoContext } from "../../Methods/Context/TodoContext";

import { FaTimes } from "react-icons/fa";

import ShowMenuForm from "./ShowMenuFom";

const ShowMenu = function (prop) {
  const {
    menu: { hideMenu },
  } = useContext(TodoContext);

  return (
    <div className={prop.header__show}>
      <div className={prop.header__show_title}>
        <h3>Show Specific Todo</h3>

        <button onClick={hideMenu}>
          <FaTimes />
        </button>
      </div>

      <ShowMenuForm header__show_form={prop.header__show_form} />
    </div>
  );
};

export default ShowMenu;
