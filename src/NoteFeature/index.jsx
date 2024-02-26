import React, { useState } from "react";

const NoteFeature = () => {
  const [notes, setNotes] = useState([]);
  const [createNote, setCreateNote] = useState("");

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
    setNotes(newNotes);s
  };



  return (
    <div className="todo-body">
      <div className="flex justify-center px-3 py-8 items-center ">
      <input className="border-2 border-black"
        type="text"
        value={createNote}
        onChange={(e) => setCreateNote(e.target.value)}
      />
      <button className="ml-3 px-3 py-1  rounded bg-amber-700	text-white" onClick={handleAddNote}>Add</button>
      </div>
      <ul  >
        {notes.map((item, index) => (
          <li className="list"
            key={index}
          >
            <div>
              <input style={{ marginLeft: "8px" }}
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
            <button style={{ marginRight: "9px" }}
              onClick={() => handleDeleteNote(index)}
            >
              Delete
            </button>
          </li>
      
        ))}
      </ul>
    </div>
  );
};

export default NoteFeature;
