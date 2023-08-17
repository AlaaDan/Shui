import './Button.css'
import {useNavigate} from "react-router-dom"

function Button(props){
    

    return(
        <div className='button' onClick={props.onClick}> <figure className='pencil'></figure></div>
    )
}


export default Button