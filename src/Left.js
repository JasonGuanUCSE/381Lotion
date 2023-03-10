import './index.css';
import React, { useState, useEffect } from 'react';
function Left({notes, addNote, showNoNotes, selectedNote,setSelectedNote}) {


    return (
        <div className="Left">
            <div className="LeftTop">
                <h1>Notes</h1>
                <button onClick = {addNote}>+</button>
            </div>
            <div className="NotesContainer">
                {showNoNotes &&
                 <p>No Notes Yet</p>}
            {notes.map((note) => (
                <div className='Note' key={note.id} id={note.id===selectedNote ? "Chosen" : ""} onClick={()=>setSelectedNote(note.id)}>
                    <div className='NoteTitle'>
                        <h2>{note.title && note.title.substr(0,15)}</h2>
                        <p>{note.lastModified}</p>
                        <p>{note.content && note.content.substr(0,50).substring(0, 30).replace(/(<([^>]+)>)/gi, '')+ "..."}</p>
                    </div>
                </div>
            ))}

            </div>
        </div>
    );
}

export default Left;
