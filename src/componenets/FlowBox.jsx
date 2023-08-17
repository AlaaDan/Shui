import { Link } from 'react-router-dom';
import './Flowbox.css';

function FlowBox(props) {
  return (
    <div className="box2" key={props.note.id}>
      <figure className='edge2'></figure>
      <Link to={`/edit/${props.note.id}`} className="editText">
        <h4>{props.note.text}</h4>
      </Link>
      <small className='userName'>{"~ " + props.note.username}</small>
      <small className='delete' onClick={() => props.deleteNote(props.note.id)}>Delete</small>
    </div>
  );
}

export default FlowBox;