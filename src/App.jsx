import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";

import NoteFeature from "./NoteFeature";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  return (
    <div>
      <Header/>
    <NoteFeature/>
    </div>
  );
}

export default App;
