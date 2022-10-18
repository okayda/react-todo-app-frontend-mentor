import { animate, useMotionValue } from "framer-motion";
import { useEffect } from "react";
const inActiveShadow = "rgba(0, 0, 0, 0.09) 0px 3px 12px";

const TodoItemShadow = function (value) {
  const boxShadow = useMotionValue(inActiveShadow);

  useEffect(() => {
    let isActive = false;
    value.onChange((latest) => {
      const wasActive = isActive;
      if (latest !== 0) {
        isActive = true;
        if (isActive !== wasActive) {
          animate(
            boxShadow,
            "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
          );
        }
      } else {
        isActive = false;
        if (isActive !== wasActive) {
          animate(boxShadow, inActiveShadow);
        }
      }
    });
  }, [value, boxShadow]);

  return boxShadow;
};

export default TodoItemShadow;
