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
    <div>
      <h1>NOTE</h1>
      <input
        type="text"
        value={createNote}
        onChange={(e) => setCreateNote(e.target.value)}
      />
      <button onClick={handleAddNote}>Add Note</button>
      <ul>
        {notes.map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheckNote(index)}
              />
              <span
                style={{
                  marginRight: "10px",
                  textDecoration: item.checked ? "line-through" : "none",
                }}
              >
                {item.text}
              </span>
            </div>
            <button
              style={{ marginTop: "5px", marginBottom: "5px" }}
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
