import { GoGrabber } from "react-icons/go";
import { useContext } from "react";
import { TodoContext } from "../Methods/Context/TodoContext";

const Nav = function (prop) {
  const {
    menu: { showMenu },
  } = useContext(TodoContext);

  return (
    <div className={prop.todo__title}>
      <h2>todo</h2>
      <button onClick={showMenu}>
        <GoGrabber />
      </button>
    </div>
  );
};

export default Nav;
