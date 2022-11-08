import { useContext } from "react";
import { TodoContext } from "../../../Methods/Context/TodoContext";

import style from "../ReplaceForm.module.css";

const SaveCancel = function () {
  const {
    replace: { hideChange },
  } = useContext(TodoContext);

  return (
    <div className={style.replaceForm__editContainer}>
      <button type="submit" className={style.replaceForm__button} name="save">
        Save
      </button>

      <button
        type="button"
        name="cancel"
        onClick={hideChange}
        className={style.replaceForm__button}
      >
        Cancel
      </button>
    </div>
  );
};

export default SaveCancel;
