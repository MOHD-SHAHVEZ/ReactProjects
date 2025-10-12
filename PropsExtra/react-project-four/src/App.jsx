import './App.css'
import Button from './components/Button'
import Card from './components/Card'
import { useState } from 'react'; 

function App() {
  const [count, setCount] = useState(0); 

  function handleClick() {
    setCount(count + 1); 
  }

  return (
    <div>
      <Button incrementValue = {handleClick} textName = "Click Me"> 
        <h1>{count}</h1>
      </Button>

      {/* <Card name="MOHD SHAHVEZ">
        <h1>Best WEB DEV course</h1>
        <p>Trying to be consistent in this</p>
        <p>Will complete the course soon.</p>
      </Card>
      <Card name="Neha My Love">
        <h1>Name: Moti</h1>
        <p>Trying to be consistent in this</p>
        <p>Will complete the Bsc Nursing soon.</p>
      </Card>
      <Card children = "Hey I'm Children Ok...">
        <p>My Name is Neha Gaur & I'm a Student of Bsc Nursing 2nd Year.</p>
      </Card> */}


    </div>
  )
}

export default App
