import "./index.css";

import Left from "./Left";
import Right from "./Right";
import React, { useState } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from "react-router-dom";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";




function App() {

  //show no notes
  const [showNoNotes, setShowNoNotes] = useState(true);



  //side Bar button toggle
  const[sideBar, setSideBar] = useState(true);

  const toggleSideBar = () => {
    console.log("Side Bar Button Clicked");
    setSideBar(!sideBar);
  };

  //add note function
  const [notes, setNotes] = useState([]);
  const [showNoteEditor, setShowNoteEditor] = useState(false);
  const [notePage, setNotePage] = useState(1);



  const [currentNote, setCurrentNote] = useState(0);
  const addNote = () => {
    console.log("Add Note Button Clicked");
    setShowNoNotes(false);
  
    const newNote = {
      noteNum: notePage,
      id: uuidv4(),
      title: "Untitled",
      content: "",
      lastModified: null,
      //lastModified: Date.now(),
    };

    if(notes.length === 0){
      setCurrentNote(newNote.id);
    }

    //add new note to notes array
    setNotes([...notes, newNote]);
     //increment note id
     setNotePage(notePage + 1);

    //create editor for new node
    setShowNoteEditor(true);

    //set the current note
    //setCurrentNote(newNote.id);    
  };

  //select note function
  const [selectedNote, setSelectedNote] = useState(0);

  //delete note function
  const deleteNote = () => {
    console.log("Delete Button Clicked");

    const index = notes.findIndex((note) => note.id === currentNote);
  
    // Remove the selected note from the notes array
    const updatedNotes = [...notes.slice(0, index), ...notes.slice(index + 1)];
    setNotes(updatedNotes);
  
    // If there are no more notes, hide the editor
    if (updatedNotes.length === 0) {
      setShowNoteEditor(false);
      setShowNoNotes(true);
    } else {
      //select the first note
      setCurrentNote(updatedNotes[0].id);
    }
  };
  
  

  


  return (

   
    <div className="App">

      <div className = "Top">
        <button onClick={toggleSideBar}>☰</button>
        <div id = "title">
          <h1>Lotion</h1>
          <p>Like Notion, but worse.</p>
        </div>
        <div></div>
      </div>

      <div className = "Bot">

        {sideBar && (
          <div id="Left">
            <Left notes={notes} addNote={addNote} showNoNotes={notes.length === 0} selectedNote={currentNote} setSelectedNote={setCurrentNote} />
          </div>
        )}

        <div id = "Right">
            <Right showNoteEditor = {showNoteEditor} ReactQuill={ReactQuill} useState = {useState} 
            deleteNote = {deleteNote} notes = {notes} currentNote={currentNote} setNotes={setNotes}/>
        </div>
      </div>

    </div>

          
  );
}




export default App;

