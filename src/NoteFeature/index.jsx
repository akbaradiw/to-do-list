import React, { useState } from "react";

const NoteFeature = () => {
  const [notes, setNotes] = useState([]);
  const [createNote, setCreateNote] = useState("");
  const [updateNote, setUpdateNote] = useState({});

  const handleAddNote = () => {
    if (createNote.trim() !== "") {
      setNotes([...notes, { text: createNote.trim(), checked: false }]);
      setCreateNote("");
    }
  };

  const handleDeleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  const handleCheckNote = (index) => {
    const newNotes = [...notes];
    newNotes[index].checked = !newNotes[index].checked;
    setNotes(newNotes);
  };





  return (
    <div>
      <div className="flex justify-center pr-6 ml-6 pt-9 pb-6 mb-1 items-center">
      <input className=" px-7 pr-11"
        type="text"
        value={createNote}
        onChange={(e) => setCreateNote(e.target.value)}
      />
      <button className="ml-3 px-4 py-1  rounded bg-cyan-600 ring-1 ring-stone-200	text-white cursor-pointer" onClick={handleAddNote}>Add</button>
      </div>
      <ul className="grid justify-center ml-2" >
        {notes.map((item, index) => (
          <li className="list"
            key={index}
          >
            <div>
              <input  style={{ marginLeft: "8px" }}
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheckNote(index)}
              />
              <span
                style={{
                  marginLeft: "8px",
                  textDecoration: item.checked ? "line-through" : "none",
                }}
              >
                {item.text}
              </span>
            </div>
            <button  style={{ marginRight: "9px" }}
              onClick={() => handleDeleteNote(index)}
            >
              X
            </button>
          
          </li>
      
        ))}
      </ul>
    </div>
  );
};


export default NoteFeature;
