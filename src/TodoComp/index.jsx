import React from 'react'
const TodoComp = ( { data, editButton, deleteButton }) => {
    return (
        <div className="list-group">
            {data.map((todos) => (
                    <div className="list-group-item list-group-item-action">
                    <div className="flex justify-center">
                      <h5 className="mb-1">{todos.name}</h5>
                      <div>
                        <button  onClick={() => editButton(todos.id)}>Edit</button>
                        <button onClick={() => deleteButton(todos.id)} >Del</button>
                      </div>
                    </div>
                    <p className="mb-1">{todos.telp}</p>
                  </div>
                
            ))}

      </div>
    );
};

export default TodoComp