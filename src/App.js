import { useState, useEffect, useContext } from "react";
import { TodoContext } from "./components/Methods/TodoContext";

import ChangeModal from "./components/ChangeModal/ChangeModal";
import Todo from "./components/Todo";

import "./scss/global.css";

function App() {
  const {
    menu: { isActiveMenu, menuModal },
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
      {isActiveMenu && menuModal}
      <div className="change-container">
        <ChangeModal />
      </div>
      <Todo />
    </>
  );
}

export default App;
