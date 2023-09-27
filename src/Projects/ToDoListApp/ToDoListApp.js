import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import "./ToDoListApp.css";
import "../../CommunCss.css";

function ToDoListApp() {
  const [noteList, setNoteList] = useState([]);
  const [note, setNote] = useState({ noteId: 0, txt: "", noteState: false });
  function addToList(e) {
    e.preventDefault();
    if (noteList.length === 0) {
      const newNote = { noteId: 0, txt: note.txt, noteState: false };
      setNote(newNote);
      setNoteList([...noteList, newNote]);
    } else {
      const newNote = {
        noteId: noteList[noteList.length - 1].noteId + 1,
        txt: note.txt,
        noteState: false,
      };
      setNote(newNote);
      setNoteList([...noteList, newNote]);
    }
    const emptyInput = { noteId: 0, txt: "", noteState: false };
    setNote(emptyInput);
  }
  function deleteItemFromList(e, id) {
    setNoteList(noteList.filter((note) => note.noteId !== id));
    console.log(noteList.length);
  }
  function handleTheNoteTxt(e) {
    e.preventDefault();
    setNote({
      ...note,
      txt: e.target.value,
    });
  }

  const notesDiplay = noteList.map((note) => (
    <Stack
      key={note.noteId}
      direction="row"
      className="note-styling bg1"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
    >
      <p>{note.txt} </p>

      <Button
        onClick={(e) => deleteItemFromList(e, note.noteId)}
        variant="outlined"
        size="small"
      >
        X
      </Button>
    </Stack>
  ));
  return (
    <div>
      <Stack
        className="note-section bg1"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          className="note-app-container bg1"
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          <div className="notes-input bg2">
            <TextField
              autoFocus
              label="Add your ToDo"
              variant="standard"
              value={note.txt}
              onChange={handleTheNoteTxt}
            />
            <Button variant="outlined" size="medium" onClick={addToList}>
              Add
            </Button>
          </div>
          <div className="notes-container bg2">
            {noteList.length === 0 ? <p>Add your note</p> : notesDiplay}
          </div>
        </Stack>
      </Stack>
    </div>
  );
}

export default ToDoListApp;
