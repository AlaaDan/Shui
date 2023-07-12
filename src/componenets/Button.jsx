import './Button.css'
import {useNavigate} from "react-router-dom"

function Button(){
    const navigate = useNavigate()

    return(
        <div className='button' onClick={()=>{navigate("/write")}}> <figure className='pencil'></figure></div>
    )
}


export default Button