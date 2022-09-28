import ReactDOM from "react-dom";
import { useEffect } from "react";
import "./scss/global.css";
import NavMenu from "./components/menu/NavMenu";
import Todo from "./components/Todo";

function App() {
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
      {ReactDOM.createPortal(
        <NavMenu />,
        document.querySelector(".header-container")
      )}
      <Todo />;
    </>
  );
}

export default App;
