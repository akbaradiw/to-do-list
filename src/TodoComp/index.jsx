import React from "react";

const TodoComp = ({ data, editButton, deleteButton, setTodos }) => {
  return (
    <div className="grid justify-center pr-6 ml-6 pt-9 pb-6 mb-1">
      {data.map((todos) => (
        <div className="flex justify-center ">
          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-6"
          >
            <label className="font-normal  text-gray-700 dark:text-gray-400 flex justify-center gap-1">
              <input  type="checkbox"/>
              {todos.task}
            </label>

            <button
                    className="text-white bg-green-600 hover:bg-green-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm mt-4 px-4 py-1 mx-2 "
                    type="button"
                    onClick={() => editButton(todos.id)}
                  >
                    Edit
                  </button>
            <button
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-xl text-sm px-3 py-1"
                    type="button"
                    onClick={() => deleteButton(todos.id)}
                  >
                    Delete
                  </button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default TodoComp;
