import {
  FaRegEdit,
  FaRegCheckCircle,
  FaRegHandPaper,
  FaTimes,
} from "react-icons/fa";

import style from "./Icon.module.css";

// prop.onPointerDown
const Icons = function (prop) {
  return (
    <ul className={style.icons}>
      <li className={`move ${!prop.isDrag && style.moveDisabled}`}>
        <FaRegHandPaper className={style.icons__move} />
      </li>
      <li className="replace">
        <FaRegEdit />
      </li>
      <li className="complete">
        <FaRegCheckCircle />
      </li>
      <li className="remove">
        <FaTimes />
      </li>
    </ul>
  );
};

export default Icons;
