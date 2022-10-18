import { useContext } from "react";
import { TodoContext } from "../../Methods/Context/TodoContext";

import { FaTimes } from "react-icons/fa";

import ShowMenuForm from "./ShowMenuFom";

const ShowMenu = function (prop) {
  const {
    show: { setShowTask },
    menu: { hideMenu },
  } = useContext(TodoContext);

  const allBtn = function (e) {
    setShowTask("all-todo");
  };

  const activeBtn = function () {
    setShowTask("active-todo");
  };

  const completedBtn = function () {
    setShowTask("completed-todo");
  };

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
