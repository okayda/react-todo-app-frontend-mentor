import DeleteContent from "./DeleteContent";
import { FaArrowRight } from "react-icons/fa";

const DeleteMenu = function (prop) {
  return (
    <div className={prop.header__delete}>
      <button className={prop.header__delete_button} onClick={prop.onClick}>
        <h3>Delete Todos</h3>
        <FaArrowRight
          className={`${prop.icon} ${prop.deleteIsActive && prop.icon_active}`}
        />
      </button>

      <DeleteContent
        header__delete_content={prop.header__delete_content}
        header__delete_active={prop.header__delete_active}
        switch__container={prop.switch__container}
        radio__container={prop.radio__container}
        button__container={prop.button__container}
        deleteIsActive={prop.deleteIsActive}
      />
    </div>
  );
};

export default DeleteMenu;
