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

  // const [items, setItems] = useState([1, 2, 3, 4, 5, 6]);
  // const [animate, noAni] = useState(true);

  // const deleteTarget = function (e) {
  //   const val = items.filter((el, i) => {
  //     if (el != e.target.textContent) {
  //       return el;
  //     }
  //   });

  //   setItems(val);
  // };

  // useEffect(() => {
  //   noAni(false);
  // });

  // console.log("test");

  // return (
  //   <div className="App">
  //     <Reorder.Group
  //       axis="y"
  //       values={items}
  //       onReorder={setItems}
  //       onClick={deleteTarget}
  //     >
  //       <AnimatePresence>
  //         {items.map((item, i) => (
  //           <Reorder.Item
  //             key={item}
  //             value={item}
  //             initial={{ y: 100, opacity: 0 }}
  //             animate={{ y: 0, opacity: 1 }}
  //             transition={{ duration: animate ? 0.4 * i : 0.4 }}
  //             exit={{ scale: 0.4, opacity: 0 }}
  //           >
  //             {item}
  //           </Reorder.Item>
  //         ))}
  //       </AnimatePresence>
  //     </Reorder.Group>
  //   </div>
  // );

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
      {activeCalendar && <Backdrop onClick={setActiveCalendar} />}

      <AnimatePresence>
        {activeReplace && <ReplaceModal />}
        {activeMenu && <MenuModal />}
      </AnimatePresence>
      <Todo />

      {ReactDOM.createPortal(<Footer />, document.querySelector("footer"))}
    </>
  );
}

export default Main;
