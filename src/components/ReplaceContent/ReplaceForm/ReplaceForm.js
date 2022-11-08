import { useContext, useEffect } from "react";
import { TodoContext } from "../../Methods/Context/TodoContext";

import TextInput from "./FormComponents/TextInput";
import TextDescription from "./FormComponents/TextDescription";
import ClearCalendar from "./FormComponents/ClearCalendar";
import SaveCancel from "./FormComponents/SaveCancel";

import style from "./ReplaceForm.module.css";

const ReplaceForm = function () {
  const {
    todo: { dispatch },
    replace: {
      hideChange,

      taskId,
      setTaskId,

      replaceTextEmpty,
      setReplaceTextEmpty,

      currentReplaceText,

      currentReplaceDate,
      setCurrentReplaceDate,
    },

    calendar: { flatpickr, FlatpickrConfigReplace },
  } = useContext(TodoContext);

  const resetReplaceCalendarValue = function () {
    setCurrentReplaceDate("");
  };

  const submitReplace = function (e) {
    e.preventDefault();

    // guard clause
    const submitter = e.nativeEvent.submitter.name;
    if (submitter !== "save") return;
    if (currentReplaceText.trim() === "") {
      setReplaceTextEmpty(true);
      return;
    }

    // it will changed the specific task in the localStorage using the id
    dispatch({
      type: "replace-text",
      payload: {
        id: taskId,
        text: currentReplaceText,
        date: currentReplaceDate,
      },
    });
    setTaskId(null);
    resetReplaceCalendarValue();
    hideChange();
  };

  // is used for executing the calendar library to the calendar input
  useEffect(() => {
    const calendar = flatpickr(`#replaceCalendar`, FlatpickrConfigReplace);

    // it will execute only this if the date on the specific task is existed
    if (currentReplaceDate) calendar.setDate(currentReplaceDate);
  }, []);

  return (
    <form onSubmit={submitReplace} className={style.replaceForm}>
      <TextInput />

      <TextDescription
        addClass={replaceTextEmpty ? style.replaceForm__errorMsg : null}
      >
        The text area should not be empty
      </TextDescription>

      <ClearCalendar />
      <SaveCancel />
    </form>
  );
};

export default ReplaceForm;
