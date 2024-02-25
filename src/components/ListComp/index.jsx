import React from "react";

const ListComp = ({ todo, setTodo, input, setInput }) => {
  const handleDelete = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };



  // const handleCheck = (id) => {
  //   setTodo(
  //     todo.map((todo) =>
  //       todo.id === id ? { ...todo, checked: !todo.checked } : todo
  //     )
  //   );
  //   console.log(todo);
  // };

  const handleCheck = (i) => {
    const newTodo = [...todo];
    newTodo[i].checked = !newTodo[i].checked;
    setTodo(newTodo);
  };

  return (
    <div>
      {todo.map((item) => (
        <li key={item.id}>
          {item.title}
          <button onClick={() => handleDelete(item.id)}>Delete</button>
          {/* <button onClick={() => handleComplete(item.id)}>Complete */}
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => handleCheck(item.id)}
          ></input>
          <span
            style={{ textDecoration: item.checked ? "line-through" : "none" }}
          >
                        {item.title}

          </span>
        </li>
        
      ))}
    </div>
  );
};

export default ListComp;
