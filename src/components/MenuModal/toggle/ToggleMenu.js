import { motion } from "framer-motion";
import Toggle from "./Toggle";
import { FaArrowRight } from "react-icons/fa";

import { specificMenuAnimation } from "../../Animation/Animation";
import style from "./Toggle.module.css";

const ToggleMenu = function (prop) {
  return (
    <motion.div
      className={style.setting}
      variants={specificMenuAnimation}
      initial={"hidden"}
      animate="visible"
    >
      <button className={style.setting__button} onClick={prop.onClick}>
        <h3>U.I Toggles Settings</h3>
        <FaArrowRight
          className={`${style.setting__icon} ${
            prop.toggleIsActive && style.setting__icon_active
          }`}
        />
      </button>

      <Toggle toggleIsActive={prop.toggleIsActive} />
    </motion.div>
  );
};

export default ToggleMenu;
