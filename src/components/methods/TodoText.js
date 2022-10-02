import { useState } from "react";

const TodoText = function (prop) {
  const [isReadMoreShown, setReadMoreShown] = useState(false);

  const toggleBtn = function () {
    return setReadMoreShown((prev) => !prev);
  };

  const readBtn = (
    <button onClick={toggleBtn} className={prop.todo__read_button}>
      {isReadMoreShown ? "Read Less" : "Read More"}
    </button>
  );

  const wordsInput = prop.children.split(" ");
  const isManyWords = wordsInput.length > prop.limit;

  const words = [];

  if (isManyWords) {
    for (let i = 0; i < prop.limit; i++) {
      words.push(wordsInput[i]);
    }
  }

  const displayText = function () {
    if (isReadMoreShown) return prop.children;
    if (!isManyWords) return prop.children;

    return words.join(" ");
  };

  return (
    <p>
      {displayText()}
      {isManyWords && readBtn}
    </p>
  );
};

export default TodoText;
