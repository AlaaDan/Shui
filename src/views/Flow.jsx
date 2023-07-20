import '../App.css'
import './Flow.css'
import Flowbox from '../componenets/FlowBox'
import Button from '../componenets/Button'

function Flow(){


    return(
        <div className='wrapper'>
            <Flowbox/>
            <figure className='logo'></figure>
            <Button/>
        </div>
        
    )
}

export default Flow