import React from "react";

const ListComp = ({ todo, setTodo }) => {
  const handleDelete = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  const handleComplete = (id) => {
    setTodo(
      todo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    console.log(todo);
  };


  return (
    <div>
      {todo.map((item) => (
        <li key={item.id}>
          {item.title}
          <button onClick={() => handleDelete(item.id)}>Delete</button>
          <button onClick={() => handleComplete(item.id)}>Complete</button>
        </li>
      ))}
    </div>
  );
};

export default ListComp;
