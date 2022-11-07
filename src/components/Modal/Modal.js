import { Fragment } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

import Backdrop from "../Backdrop/Backdrop";

const ModalAnimate = function ({ props }) {
  return (
    <Backdrop onClick={props.removeModal}>
      <motion.div {...props.obj}>{props.children}</motion.div>
    </Backdrop>
  );
};

const Modal = function (props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalAnimate props={props}>{props.children}</ModalAnimate>,
        document.getElementById(props.portalElement)
      )}
    </Fragment>
  );
};

export default Modal;
