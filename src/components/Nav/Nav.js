import { GoGrabber } from "react-icons/go";
import { useContext } from "react";
import { TodoContext } from "../Methods/Context/TodoContext";
import WideNav from "./WideNav";
const Nav = function (prop) {
  const {
    menu: { showMenu },
  } = useContext(TodoContext);

  return (
    <div className={prop.todo__title}>
      <h2>todo</h2>
      <button onClick={showMenu} className={prop.todo__title_menu}>
        <GoGrabber />
      </button>
      <WideNav />
    </div>
  );
};

export default Nav;
