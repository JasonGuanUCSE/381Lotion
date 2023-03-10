import "./index.css";

import Left from "./Left";
import Right from "./Right";
import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { v4 as uuidv4 } from 'uuid';
import { redirect } from "react-router-dom";


function Notes({status}) {

    
    
    //side Bar button toggle
    const[sideBar, setSideBar] = useState(true);
    const toggleSideBar = () => {
        console.log("Side Bar Button Clicked");
        setSideBar(!sideBar);
    };

    const[noteStatus, setNoteStatus] = useState(status);
    var i =0;
    //add note function
    const addNote = () => {
        console.log("Add Note Button Clicked");
        i++;
        

    }
    useEffect(() => {
        console.log(i);
        console.log(<Left addNote={addNote}/>);


    },i)

    if(status === "Notes"){
        return(
            <div className="NoteContaine">

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
                            <div className="LeftTop">
                                <h1>Notes</h1>
                                <button onClick = {addNote}>+</button>
                            </div>
                            <div className="NotesContainer">
                                <p>No Notes Yet</p>
                            </div>
                        </div>
                    )}
                    <div id = "Right">
                        <p id = "empty">Select a note, or create a new one</p>
                    </div>
                </div>

            </div>
            
        )

    }


  //show no notes
  //const [showNoNotes, setShowNoNotes] = useState(true);

/*

  //side Bar button toggle
  const[sideBar, setSideBar] = useState(true);

  const toggleSideBar = () => {
    console.log("Side Bar Button Clicked");
    setSideBar(!sideBar);
  };

  //add note function
  const [notes, setNotes] = useState([]);
  const [showNoteEditor, setShowNoteEditor] = useState(false);

  const [currentNote, setCurrentNote] = useState(null);

  const addNote = () => {
    console.log("Add Note Button Clicked");
    setShowNoNotes(false);

    const newNote = {
      id: uuidv4(),
      title: "Untitled",
      content: "...",
      //lastModified: Date.now(),
    };


    //add new note to notes array
    setNotes([...notes, newNote]);

    //create editor for new node
    setShowNoteEditor(true);

    //set the current note
    setCurrentNote(newNote.id);
    

  };


  //delete note function
  const deleteNote = () =>{
    //if no notes, return
    if(notes.length === 0){
      return
    }
    const lastNoteId = notes[notes.length - 1].id;
    console.log("Delete Button Clicked");
    console.log(lastNoteId);
    //if id of note to delete matches id of note in notes array, delete note
    setNotes(notes.filter((note) => note.id !== lastNoteId));

    if(notes.length === 1){
      setShowNoteEditor(false);
      setShowNoNotes(true);
    }
  }
  
  */

  /*return (

   
    /*<div className="App">

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
            <Left notes={notes} addNote={addNote} showNoNotes={notes.length === 0} />
          </div>
        )}

        <div id = "Right">
            <Right showNoteEditor = {showNoteEditor} ReactQuill={ReactQuill} useState = {useState} 
            deleteNote = {deleteNote} notes = {notes} currentNote={currentNote} showNoNotes={showNoNotes}/>
        </div>
      </div>

    </div>

          
  ); */

}


export default Notes;