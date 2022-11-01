import { useContext } from "react";
import { TodoContext } from "../Methods/Context/TodoContext";
import style from "./WideNav.module.css";

const WideNav = function () {
  const {
    wideNav: { activeNav, setActiveNav },
  } = useContext(TodoContext);

  // only for table & desktop
  const displayShow = function () {
    if (activeNav === "show") return;
    setActiveNav("show");
  };

  const displaySetting = function () {
    if (activeNav === "setting") return;
    setActiveNav("setting");
  };

  const displayDelete = function () {
    if (activeNav === "delete") return;
    setActiveNav("delete");
  };

  return (
    <ul className={style.wideNav}>
      <li>
        <button
          className={activeNav === "show" ? style.active : null}
          onClick={displayShow}
        >
          Show
        </button>
      </li>
      <li>
        <button
          className={activeNav === "setting" ? style.active : null}
          onClick={displaySetting}
        >
          Setting
        </button>
      </li>
      <li>
        <button
          className={activeNav === "delete" ? style.active : null}
          onClick={displayDelete}
        >
          Delete
        </button>
      </li>
    </ul>
  );
};

export default WideNav;
