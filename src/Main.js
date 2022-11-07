import ReactDOM from "react-dom";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { TodoContext } from "./components/Methods/Context/TodoContext";

import Todo from "./components/Todo";
import Footer from "./components/Footer/Footer";

import Backdrop from "./components/Backdrop/Backdrop";
import MenuContent from "./components/MenuContent/MenuContent";
import ReplaceContent from "./components/ReplaceContent/ReplaceContent";

import "./scss/global.css";

function Main() {
  const {
    menu: { activeMenu },
    replace: { activeReplace },
    calendar: { activeCalendar, setActiveCalendar },
  } = useContext(TodoContext);

  // if the specific modal is displayed the vertical scroll bar will be disabled
  const root = document.documentElement.classList;
  activeMenu || activeReplace || activeCalendar
    ? root.add("disable-scroll")
    : root.remove("disable-scroll");

  // this backdrop is only for form
  const CalendarBackdropPortal = function () {
    return activeCalendar
      ? ReactDOM.createPortal(
          <Backdrop onClick={setActiveCalendar} />,
          document.getElementById("calendar-container")
        )
      : null;
  };

  const FooterPortal = function () {
    return ReactDOM.createPortal(
      <Footer />,
      document.getElementById("footer-container")
    );
  };

  return (
    <>
      <CalendarBackdropPortal />

      <AnimatePresence>
        {activeReplace ? <ReplaceContent /> : null}
        {activeMenu ? <MenuContent /> : null}
      </AnimatePresence>

      <Todo />

      <FooterPortal />
    </>
  );
}

export default Main;
