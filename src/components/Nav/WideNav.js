import style from "./WideNav.module.css";

const WideNav = function () {
  return (
    <ul className={style.wideNav}>
      <li>
        <button>Show</button>
      </li>
      <li>
        <button>Setting</button>
      </li>
      <li>
        <button>Delete</button>
      </li>
    </ul>
  );
};

export default WideNav;
