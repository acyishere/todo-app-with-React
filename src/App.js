import { useState } from "react";
import "./app.css";

// Components

import List from "./components/ListPart";
import Inputs from "./components/MyInput";

function App() {
  const [inputMessage, setInputMessage] = useState("");
  const [todoParts, setTodoParts] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>TO-DO LIST</h1>
      </header>
      <Inputs
        inputMessage={inputMessage}
        todoParts={todoParts}
        setTodoParts={setTodoParts}
        setInputMessage={setInputMessage}
      />
      <List todoParts={todoParts} setTodoParts={setTodoParts} />
    </div>
  );
}

export default App;
