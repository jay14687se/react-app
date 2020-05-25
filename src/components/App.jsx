import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){
    const [notes, addNote] = useState([]);
    function addNewNote(note){
        addNote(prevValues => {
            return [...prevValues, note]
        })
    }
    function deleteNote(id){
        addNote(prevValues => {
            return prevValues.filter((note, index) => {
                return index !== id;
            });
        });
    }
    return (
        <div>
            <Header />
            <CreateArea 
                onClick={addNewNote}
            />
            {notes.map( (note, index) => (
                <Note 
                    key={index}
                    id={index}
                    title={note.title}
                    content={note.content}
                    deleteNote={deleteNote}
                />
            ))}
            <Footer />
        </div>
    );   
}

export default App;