import React from 'react';
import './Edit.css'
import { useNavigate, useParams } from 'react-router-dom';
import WritemsgBox from '../componenets/WriteMsgBox'

const Edit = ({ notes, setNotes }) => {
  const { id } = useParams();
  const noteToEdit = notes.find((note) => note.id === id);
  const [inputText, setInputText] = React.useState(noteToEdit.text);
  const [inputUsernameText, setInputUsernameText] = React.useState(noteToEdit.username);
  const navigate = useNavigate();

  const handleEditSubmit = () => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, text: inputText, username: inputUsernameText } : note)));
    navigate('/');
  };

  return (
    <div className='wrapper'>
      <figure className='logo'></figure>
      <WritemsgBox
         setInputText={setInputText}
         inputText={inputText}
      />
      <input
        type="text"
        onChange={(e) => setInputUsernameText(e.target.value)}
        value={inputUsernameText}
        placeholder='Your username'
        className='usernamePlaceHolder'
      />
      <button className='publishButton' onClick={handleEditSubmit}>Save</button>
    </div>

    
  );
};

export default Edit;