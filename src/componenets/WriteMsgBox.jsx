import './WriteMsgBox.css'

function WriteMsgBox({ setInputText, inputText }) {
    return (
      <div className='box'>
        <figure className='edge'></figure>
        <textarea
          name="text"
          value={inputText}
          cols="30"
          rows="10"
          wrap='soft'
          onChange={(e) => setInputText(e.target.value)} // Use an arrow 
          className='msg'
          placeholder='Write your message here'
        />
      </div>
    )
  }
  
  export default WriteMsgBox;