import {
  FaRegEdit,
  FaRegCheckCircle,
  FaRegHandPaper,
  FaTimes,
} from "react-icons/fa";

import style from "./Icon.module.css";

const Icons = function () {
  return (
    <ul className={style.icons}>
      <li className="move">
        <FaRegHandPaper />
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
