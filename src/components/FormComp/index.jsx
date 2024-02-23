import React from "react";
import { v4 as uuidv4 } from "uuid";

const FormComp = ({
  input,
  setInput,
  todo,
  setTodo,
  editTodo,
  setEditTodo,
}) => {


  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodo([...todo, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Enter a Todo"
          value={input}
          required
          onChange={onInputChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default FormComp;
