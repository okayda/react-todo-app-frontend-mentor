import { useContext } from "react";
import { TodoContext } from "../../Methods/Context/TodoContext";
import toast, { Toaster } from "react-hot-toast";
import ReactSwitch from "react-switch";

import style from "./DeleteMenu.module.css";

const Delete = function (prop) {
  const {
    todo: { dispatch },
    setting: { setSettings },
    delete: {
      enableDelete,
      setEnableDelete,

      selectedDelete,
      setSelectedDelete,
    },
  } = useContext(TodoContext);

  // Toast pop notification
  const notifySelectedDelete = function () {
    let str;
    if (selectedDelete === "delete-active") str = "Active";

    if (selectedDelete === "delete-completed") str = "Completed";

    toast.success(`${str} todos Successfully deleted`, { duration: 2500 });
  };

  const notifyClearTodos = function () {
    toast.success("todos storage successfully deleted", { duration: 2500 });
  };

  // specific delete functionalities
  const toggleDelete = function () {
    setEnableDelete((cur) => (cur ? false : true));

    setSettings((cur) => ({
      ...cur,
      allowDelete: cur.allowDelete ? false : true,
    }));
  };

  const chooseDelete = function (e) {
    setSelectedDelete(e.target.value);
  };

  const clickedDeleteSelected = function () {
    if (selectedDelete === "delete-active") {
      dispatch({ type: "delete-active" });
    }

    if (selectedDelete === "delete-completed") {
      dispatch({ type: "delete-completed" });
    }

    setSelectedDelete(null);
    notifySelectedDelete();
  };

  const clickedClearTodos = function () {
    dispatch({ type: "delete-all" });
    notifyClearTodos();
  };

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontWeight: "bold",
            fontSize: "15px",
          },
        }}
        containerStyle={{
          top: -70,
        }}
      />

      <div
        className={`${style.delete__content} ${
          prop.deleteIsActive && style.delete__active
        }`}
      >
        <div className={style.delete__switches}>
          <ReactSwitch onChange={toggleDelete} checked={enableDelete} />
          <span>Show Delete Todo</span>
        </div>

        <div className={style.delete__radios}>
          <label htmlFor="activeDelete">Active</label>
          <input
            type="radio"
            name="delete"
            id="activeDelete"
            value="delete-active"
            onChange={chooseDelete}
            checked={selectedDelete === "delete-active"}
          />
        </div>

        <div className={style.delete__radios}>
          <label htmlFor="completedDelete">Completed</label>
          <input
            type="radio"
            name="delete"
            id="completedDelete"
            value="delete-completed"
            onChange={chooseDelete}
            checked={selectedDelete === "delete-completed"}
          />
        </div>
        <div className={style.delete__buttons}>
          <button disabled={!selectedDelete} onClick={clickedDeleteSelected}>
            Delete
          </button>
          <button onClick={clickedClearTodos}>Clear All</button>
        </div>
      </div>
    </>
  );
};

export default Delete;
