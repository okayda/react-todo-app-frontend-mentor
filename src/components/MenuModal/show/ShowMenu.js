import { useContext } from "react";
import { TodoContext } from "../../Methods/Context/TodoContext";

import { FaTimes } from "react-icons/fa";

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

      <ul className={prop.header__show_list}>
        <li>
          <button className={prop.active_btn}>All</button>
        </li>
        <li>
          <button>Active</button>
        </li>
        <li>
          <button>Completed</button>
        </li>
      </ul>
    </div>
  );
};

export default ShowMenu;
