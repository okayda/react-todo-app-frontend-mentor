import { motion } from "framer-motion";
import "./Backdrop.css";

const Backdrop = function (prop) {
  return (
    <motion.div
      className="backdrop"
      onClick={prop.onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {prop.children}
    </motion.div>
  );
};

export default Backdrop;
