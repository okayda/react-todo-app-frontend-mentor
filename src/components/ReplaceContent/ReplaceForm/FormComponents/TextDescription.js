import style from "../ReplaceForm.module.css";

const TextDescription = function (prop) {
  return (
    <p className={`${style.replaceForm__msg} ${prop.addClass}`}>
      {prop.children}
    </p>
  );
};

export default TextDescription;
