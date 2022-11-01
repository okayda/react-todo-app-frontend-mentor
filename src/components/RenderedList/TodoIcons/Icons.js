import {
  FaRegEdit,
  FaRegCheckCircle,
  FaRegHandPaper,
  FaTimes,
} from "react-icons/fa";

import style from "./Icon.module.css";

const Icons = function (prop) {
  return (
    <ul className={style.icons}>
      <li
        className={!prop.isDrag ? style.iconDisabled : null}
        onPointerDown={prop.control}
      >
        <FaRegHandPaper className={style.icons__move} />
      </li>

      <li className={`replace ${!prop.isModify ? style.iconDisabled : null}`}>
        <FaRegEdit />
      </li>

      {/*
        !prop.isSavedCompleted is the responsible for preventing the execution
        again if the user click the completed icon again if it is already
        mark as completed 
        */}
      <li
        className={`complete ${
          prop.isSavedCompleted
            ? style.iconCompleted
            : !prop.isComplete && style.iconDisabled
        } 
        ${!prop.isSavedCompleted}`}
      >
        <FaRegCheckCircle />
      </li>

      <li className={`remove ${!prop.isDelete ? style.iconDisabled : null}`}>
        <FaTimes />
      </li>
    </ul>
  );
};

export default Icons;
