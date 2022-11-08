import { useContext } from "react";
import { TodoContext } from "../../../Methods/Context/TodoContext";

import style from "../ReplaceForm.module.css";

const TextInput = function () {
  const {
    replace: {
      focusTextArea,

      currentReplaceText,
      setCurrentReplaceText,

      replaceTextEmpty,
    },
  } = useContext(TodoContext);

  const textAreaValue = function (e) {
    setCurrentReplaceText(e.target.value);
  };

  return (
    <textarea
      className={`${style.replaceForm__textarea} ${
        replaceTextEmpty ? style.replaceForm__textareaInvalid : null
      }`}
      onChange={textAreaValue}
      value={currentReplaceText}
      ref={focusTextArea}
    />
  );
};

export default TextInput;
