import './index.css';
import { useEffect, useState } from 'react';

function Right({ showNoteEditor, ReactQuill, deleteNote, currentNote, notes, setNotes }) {
    const [noteTitle, setNoteTitle] = useState('Untitled');
    const [noteContent, setNoteContent] = useState('');
    const [isPreviewMode, setIsPreviewMode] = useState(false);
    const [datetime, setDatetime] = useState('');


    

    const saveNote = () => {
      console.log('Save Button Clicked');
      console.log(currentNote);
  
      const updatedNotes = notes.map((note) => {
        if (note.id === currentNote) {
        const updatedNote = { ...note };
        updatedNote.title = noteTitle;
        console.log('Saved Title:', updatedNote.title);
        updatedNote.content = noteContent;
        console.log('Saved Content:', updatedNote.content);
        updatedNote.lastModified = datetime;
        console.log('Saved Date:', updatedNote.lastModified);
        return updatedNote;
    }
    return note;
    });

      setNotes(updatedNotes);
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      setIsPreviewMode(true);
    };
  
    const handleNoteChange = (content) => {
      setNoteContent(content);
    };
  
    useEffect(() => {
      const savedNotes = JSON.parse(localStorage.getItem('notes'));
      if (savedNotes) {
        const note = savedNotes.find((note) => note.id === currentNote);
        if (note) {
          setNoteTitle(note.title);
          setNoteContent(note.content);
        }
      }
    }, [currentNote]);

    return (
      <div className="Right">
        {showNoteEditor ? (
          <>
            {isPreviewMode ? (
              <div className="previewContainer">
                <div className="previewTop">
        
                    <div>{noteTitle}</div>
                    <div>
                        <button onClick={() => setIsPreviewMode(false)}>Edit</button>
                        <button onClick={deleteNote}>Delete</button>
                    </div>
                    
                
                </div>
                <div className="calenderContainer">
                {datetime}
                </div>

                <div className="previewBottom" dangerouslySetInnerHTML={{ __html: noteContent }}></div>
              </div>
            ) : (
              <div className="editorContainer">
                <div className="editorTop">
                  <div>
                    <input
                      id="notetitle"
                      type="text"
                      value={noteTitle}
                      onChange={(e) => setNoteTitle(e.target.value)}
                    />
                  </div>
                  <div>
                    <button id="save" onClick={saveNote}>
                      Save
                    </button>
                    <button onClick={deleteNote}>Delete</button>
                  </div>
                </div>
                <div className='calenderContainer'>
                <input id = "calender" type="datetime-local" value={datetime} onChange={(e) => setDatetime(e.target.value)} />
                </div>
                <div className="editorBottom">
                  <ReactQuill
                    className="editor"
                    placeholder={'Your text here..'}
                    value={noteContent}
                    onChange={handleNoteChange}
                  />
                </div>
              </div>
            )}
          </>
        ) : (
          <p id="empty">Select a note, or create a new one</p>
        )}
      </div>
    );
  }
  

export default Right;
