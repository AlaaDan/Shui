import '../App.css'
import './Error.css'

import Button from '../componenets/Button'
function Error () {
    return(
        <div className='wrapper'>

            <h1 className='h1'>404 Wrong endpoint</h1>
            <p className='p'>If you want to write a note click on the button down to right hand side</p>
            <figure className='logo'></figure>
            <Button/>
        </div>
        
    )
}


export default Error