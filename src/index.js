import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";

import { TodoProvider } from "./components/Methods/Context/TodoContext";

const main = ReactDOM.createRoot(document.getElementById("main-container"));

main.render(
  <React.StrictMode>
    <TodoProvider>
      <Main />
    </TodoProvider>
  </React.StrictMode>
);
