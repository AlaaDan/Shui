import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Flow from './views/Flow';
import Write from './views/Write';
import Edit from './views/Edit';
import Error from './views/Error';
import './index.css';



const Main = () => {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");
  const [inputUsernameText, setInputUsernameText] = useState("");
  

  const deleteNote = (id) => setNotes(notes.filter((note) => note.id !== id));




  useEffect(() => {
    const savedNotes = localStorage.getItem('Notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('Notes', JSON.stringify(notes));

  }, [notes]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Flow notes={notes} deleteNote={deleteNote} />} />
        <Route path="/write" element={<Write inputText={inputText} inputUsernameText={inputUsernameText} setInputText={setInputText} setInputUsernameText={setInputUsernameText} notes={notes} setNotes={setNotes}  />} />
        <Route path="/edit/:id" element={<Edit notes={notes} setNotes={setNotes} />} /> 
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);