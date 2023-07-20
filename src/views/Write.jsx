import '../App.css'
import './Write.css'
import WritemsgBox from '../componenets/WriteMsgBox'
import { useNavigate } from 'react-router-dom'

function Write (){
    const navigate = useNavigate()
    return(
        <div className='wrapper'>
            <figure className='logo'></figure>
            <WritemsgBox />
            <input type="text" placeholder='Your username' className='usernamePlaceHolder'/>
            <button className='publishButton' onClick={()=>{navigate("/flow")}}>Publish</button>

            
        </div>
    )
}

export default Write