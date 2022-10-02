import {
  FaRegEdit,
  FaRegCheckCircle,
  FaRegHandPaper,
  FaTimes,
} from "react-icons/fa";

import style from "./Icon.module.css";

const Icons = function () {
  return (
    <div className={style.icons}>
      <FaRegHandPaper className={style.icons__icon} />
      <FaRegEdit className={style.icons__icon} />
      <FaRegCheckCircle className={style.icons__icon} />
      <FaTimes className={style.icons__icon} />
    </div>
  );
};

export default Icons;
