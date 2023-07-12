import '../App.css'
import './Write.css'


function Write (){
    return(
        <div className='wrapper'>
            <figure className='logo'></figure>
            <input type="text" placeholder='Your username' className='usernamePlaceHolder'/>
            <button className='publishButton'>Publish</button>

            
        </div>
    )
}

export default Write