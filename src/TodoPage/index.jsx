import React from "react";
import TodoComp from "../TodoComp";
import { uid } from "uid";
import { useState } from "react";
import { Modal } from "bootstrap";
const TodoPage = () => {
const [todos, setTodos] = useState([]);
const [formData, setFormData] = useState({
    task: ""
  });

  const [editData, setEditData] = useState({
    id: null,
    status: false,
  });

  const submitHandler = (e) => {
    let data = { ...formData };
    data[e.target.name] = e.target.value;
    setFormData(data);
  };
  const addSubmit = (e) => {
    e.preventDefault();
    let data = [...todos];

    if (editData.status) {
      data.forEach((todos) => {
        if (todos.id === editData.id) {
          todos.task = formData.task;
        }
      });
    } else {
      data.push({ id: uid(), task: formData.task});
    }
    setEditData({ id: null, status: false });
    setTodos(data);
    setFormData({ task: "" });
  };

  const editButton = (id) => {
    let data = [...todos];
    let foundData = data.find((todos) => todos.id === id);
    setEditData({ id: id, status: true });
    setFormData({ task: foundData.task });
    Modal.getOrCreateInstance(document.getElementById("editModal")).show();
  };

  const deleteButton = (id) => {
    let data = [...todos];
    let filterdData = data.filter((todos) => todos.id !== id);
    setTodos(filterdData);
  };


  return (
    <div>
      <form onSubmit={addSubmit} className="flex justify-center pt-7 pl-14">
        <div className="border-1 radius-4">
          <input className="pl-2"
            type="text"
            // className="form-control"
            onChange={submitHandler}
            value={formData.task}
            name="task"
          />
        </div>
        <div>
          <button type="submit" className="text-white bg-cyan-600 hover:bg-cyan-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm ml-2 px-3 py-1">
            Add Task
          </button>
          </div>
      </form>
      <TodoComp
        editButton={editButton}
        data={todos}
        deleteButton={deleteButton}
      />
    </div>
  );
};
export default TodoPage;
