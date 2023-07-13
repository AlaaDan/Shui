import './WriteMsgBox.css'

function WritemsgBox (){

    return (
        <div className='box'>
            <figure className='edge'></figure>
            <textarea name="text" cols="30" rows="10" wrap='soft' className='msg' placeholder='Write your message here'></textarea>

            
        </div>
    )
}

export default WritemsgBox