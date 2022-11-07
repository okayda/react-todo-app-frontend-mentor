import { motion } from "framer-motion";
import Delete from "./Delete";
import { FaArrowRight } from "react-icons/fa";

import { specificMenuAnimation } from "../../Animation/Animation";
import style from "./DeleteMenu.module.css";

const DeleteMenu = function (prop) {
  return (
    <motion.div
      className={style.delete}
      variants={specificMenuAnimation}
      initial={prop.animationAllowed ? "hidden" : false}
      animate="visible"
    >
      <button className={style.delete__button} onClick={prop.onClick}>
        <h3>Delete Todos</h3>
        <FaArrowRight
          className={`${style.delete__icon} ${
            prop.deleteIsActive ? style.delete__icon_active : null
          }`}
        />
      </button>

      <Delete deleteIsActive={prop.deleteIsActive} />
    </motion.div>
  );
};

export default DeleteMenu;
