import React from "react";
import TodoComp from "../TodoComp";
import { uid } from "uid";
import { useState } from "react";
const TodoPage = () => {
  const [todos, setTodos] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    telp: "",
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
          todos.name = formData.name;
          todos.telp = formData.telp;
        }
      });
    } else {
      data.push({ id: uid(), name: formData.name, telp: formData.telp });
    }
    setEditData({ id: null, status: false });
    setTodos(data);
    setFormData({ name: "", telp: "" });
  };

  const editButton = (id) => {
    let data = [...todos];
    let foundData = data.find((todos) => todos.id === id);
    setEditData({ id: id, status: true });
    setFormData({ name: foundData.name, telp: foundData.telp });
  };

  const deleteButton = (id) => {
    let data = [...todos];
    let filterdData = data.filter((todos) => todos.id !== id);
    setTodos(filterdData);
  };

  return (
    <div>
        <h1>ini coba lagi</h1>
      <form onSubmit={addSubmit} className="px-3 py-4">
        <div className="form-group">
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={submitHandler}
            value={formData.name}
            name="name"
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="">No. Telp</label>
          <input
            type="text"
            className="form-control"
            onChange={submitHandler}
            value={formData.telp}
            name="telp"
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary w-100 mt-3">
            Save
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
