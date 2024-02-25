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
    setTodo([...todo, { id: uuidv4(), title: input, completed: false }]);
    setInput("");
  };

  const handleCheck = (id) => {
    setTodo(
      todo.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
    console.log(todo);
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
        <input
            type="checkbox"
            checked={todo.checked}
            // onChange={() => handleCheck(item.id)}
          ></input>
        {/* <span
          style={{ textDecoration: todo.text ? "line-through" : "none" }}
        ></span> */}

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default FormComp;
