import ReactDOM from "react-dom";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { TodoContext } from "./components/Methods/Context/TodoContext";

import Todo from "./components/Todo";
import Footer from "./components/Footer/Footer";

import Backdrop from "./components/Backdrop/Backdrop";
import MenuModal from "./components/MenuModal/MenuModal";
import ReplaceModal from "./components/ReplaceModal/ReplaceModal";

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

  return (
    <>
      {/*
      //*  I tried to used AnimatePresence but is not working
      //*  when the create Portal is used to the <MenuModal /> & <ReplaceModal />
      //*  target rendered "menu-modal" & "replace-modal"

      //* AnimatePresence is working when I tried to used <MenuModal /> & <ReplaceModal /> only.
      //* create portal is not attached 
      //* it will not render to the "menu-modal" & "replace-modal" container
       */}

      {/*  <AnimatePresence >
       {activeMenu &&
       ReactDOM.createPortal(<MenuModal />, document.querySelector(".menu-modal"))}

       {activeReplace &&
         ReactDOM.createPortal(
          <ReplaceModal />,
           document.querySelector(".replace-modal")
         )}
      </AnimatePresence> */}

      {/* this calendar is only for form  */}
      {activeCalendar ? <Backdrop onClick={setActiveCalendar} /> : null}

      <AnimatePresence>
        {activeReplace ? <ReplaceModal /> : null}
        {activeMenu ? <MenuModal /> : null}
      </AnimatePresence>
      <Todo />

      {ReactDOM.createPortal(<Footer />, document.querySelector("footer"))}
    </>
  );
}

export default Main;
