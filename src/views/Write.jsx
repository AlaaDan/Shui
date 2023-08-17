import '../App.css'
import './Write.css'
import WritemsgBox from '../componenets/WriteMsgBox'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid';

const Write = ({
    inputText,
    inputUsernameText,
    setInputText,
    setInputUsernameText,
    notes,
    setNotes,

}) => {

    const navigate = useNavigate();
    const savePublishHandler = () => {

        setNotes([
            ...notes,
            { id: uuid(), username: inputUsernameText, text: inputText }
        ]);
        setInputText('');
        setInputUsernameText('');
        navigate('/');
    };

    return (
        <div className='wrapper'>
            <figure className='logo' onClick={() => navigate('/')}  ></figure>
            <WritemsgBox
                setInputText={setInputText}
                inputText={inputText}
            />
            <input
                type="text"
                onChange={(e) => setInputUsernameText(e.target.value)} // Use an arrow function here
                value={inputUsernameText}
                placeholder='Your username'
                className='usernamePlaceHolder'
            />
            <button className='publishButton' onClick={savePublishHandler} >Publish</button>


        </div>
    );
};

export default Write;