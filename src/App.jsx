
import './App.css'
import Button from './componenets/Button'
import { useNavigate } from 'react-router-dom'

function App() {
  
  const navigate = useNavigate()
  const switchToWrite = () => {
    navigate('/flow')
  }
  return (
    <>
      <div className='wrapper'>
        <h1 className='h1'>Welcome to Shui App</h1>
        <figure className='logo'></figure>
        <Button onClick={switchToWrite} />
      </div>
    </>
  )
}

export default App
