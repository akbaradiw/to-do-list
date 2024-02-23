import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoWrapper from "./components/TodoWrapper";
import FormComp from "./components/FormComp";
import ListComp from "./components/ListComp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  return (
    <div>
      <p>To Do List</p>
      {/* <TodoWrapper/> */}
      <FormComp
        input={input}
        setInput={setInput}
        todo={todo}
        setTodo={setTodo}
      />
      <ListComp 
      todo={todo} 
      setTodo={setTodo}
    />
    </div>
  );
}

export default App;