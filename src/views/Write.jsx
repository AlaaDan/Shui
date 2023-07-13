import '../App.css'
import './Write.css'
import WritemsgBox from '../componenets/WriteMsgBox'


function Write (){
    return(
        <div className='wrapper'>
            <figure className='logo'></figure>
            <WritemsgBox />
            <input type="text" placeholder='Your username' className='usernamePlaceHolder'/>
            <button className='publishButton'>Publish</button>

            
        </div>
    )
}

export default Write