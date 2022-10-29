import { GoGrabber } from "react-icons/go";
import { useContext } from "react";
import { TodoContext } from "../Methods/Context/TodoContext";

import style from "./Nav.module.css";
import WideNav from "./WideNav";

const Nav = function (prop) {
  const {
    menu: { showMenu },
  } = useContext(TodoContext);

  return (
    <nav className={style.nav}>
      <h2 className={style.nav__title}>todo</h2>
      <button onClick={showMenu} className={style.nav__menu}>
        <GoGrabber />
      </button>
      <WideNav />
    </nav>
  );
};

export default Nav;
