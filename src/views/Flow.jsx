import React from 'react';
import { useNavigate } from 'react-router-dom';
import FlowBox from '../componenets/FlowBox';
import Button from '../componenets/Button';
import './Flow.css';

const Flow = ({ notes, deleteNote }) => {
  const navigate = useNavigate();

  return (
    <div className='wrapper'>
      {notes.length === 0 ? (
        <div>
          <h1 className='h1'>There are no messages to read.</h1>
          <Button onClick={() => navigate('/write')} />
          <figure id='waves'></figure>
        </div>
      ) : (
        <div className='notes-list'>
          {notes.map((note) => <FlowBox key={note.id} note={note} deleteNote={deleteNote} />)}
          <Button onClick={() => navigate('/write')} />
        </div>
      )}
      <figure className='logo' onClick={() => navigate('/')} ></figure>
    </div>
  );
};

export default Flow;