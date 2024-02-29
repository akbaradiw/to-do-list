import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoPage from "./TodoPage";
import NoteFeature from "./NoteFeature";
import Header from "./Header";


function App() {


  return (
    <div>
      <Header />
      <NoteFeature />
      <TodoPage />
    </div>
  );
}

export default App;
