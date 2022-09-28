import DeleteContent from "./DeleteContent";
import { FaArrowRight } from "react-icons/fa";

const DeleteMenu = function (prop) {
  return (
    <div className={prop.headerDelete}>
      <button className={prop.headerDeleteButton} onClick={prop.onClickBtn}>
        <h3>Delete Todos</h3>
        <FaArrowRight
          className={`${prop.icon} ${prop.deleteIsActive && prop.activeIcon}`}
        />
      </button>

      <DeleteContent
        headerDeleteContent={prop.headerDeleteContent}
        headerDeleteActive={prop.headerDeleteActive}
        deleteIsActive={prop.deleteIsActive}
        switchContainer={prop.switchContainer}
        radioContainer={prop.radioContainer}
        buttonContainer={prop.buttonContainer}
      />
    </div>
  );
};

export default DeleteMenu;
