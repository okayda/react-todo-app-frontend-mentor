import { FaTimes } from "react-icons/fa";

const ShowMenu = function (prop) {
  return (
    <div className={prop.classShow}>
      <div className={prop.showTitle}>
        <h3>Show Specific Todo</h3>
        <button onClick={prop.deactivateMenu}>
          <FaTimes />
        </button>
      </div>

      <ul className={prop.showList}>
        <li>
          <button className={prop.active}>All</button>
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
