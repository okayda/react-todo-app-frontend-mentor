import { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
import "./Overlay.css";

const Overlay = function () {
  const {
    overlay: { removeModals },
  } = useContext(TodoContext);

  return (
    <div className="overlay" onClick={removeModals}>
      &nbsp;
    </div>
  );
};

export default Overlay;
