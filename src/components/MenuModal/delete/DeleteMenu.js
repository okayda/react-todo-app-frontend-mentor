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
        header__delete_switches={prop.header__delete_switches}
        header__delete_radios={prop.header__delete_radios}
        header__delete_buttons={prop.header__delete_buttons}
        deleteIsActive={prop.deleteIsActive}
      />
    </div>
  );
};

export default DeleteMenu;
