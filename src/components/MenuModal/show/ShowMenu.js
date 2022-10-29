import { motion } from "framer-motion";
import { useContext } from "react";
import { TodoContext } from "../../Methods/Context/TodoContext";
import { FaTimes } from "react-icons/fa";

import { specificMenuAnimation } from "../../Animation/Animation";
import style from "./ShowMenu.module.css";
import ShowMenuForm from "./ShowMenuFom";

const ShowMenu = function () {
  const {
    menu: { hideMenu },
  } = useContext(TodoContext);

  return (
    <motion.div
      className={style.show}
      variants={specificMenuAnimation}
      initial={"hidden"}
      animate="visible"
    >
      <div className={style.show__header}>
        <h3>Show Specific Todo</h3>

        <button onClick={hideMenu}>
          <FaTimes />
        </button>
      </div>

      <ShowMenuForm header__show_form={style.show__form} />
    </motion.div>
  );
};

export default ShowMenu;
