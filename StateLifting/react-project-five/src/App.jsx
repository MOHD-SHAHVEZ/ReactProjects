import './App.css'
import Card from './components/Card'
import { useState } from 'react';

function App() {
  // Create State
  // Manage State
  // Change State
  // sabhi state ko child ma sync karwa dunga. 
  // Create the usestate hook and also remember to import: 
  const[name, setName] = useState(' ')
  return (
    <div>
    <Card tittle = 'Card 1' name={name} setName = {setName}/>
    <Card tittle = 'Card 2' name={name} setName = {setName}/>
    <p>I am inside Parent Component and Value of name is: {name} </p>
    </div>
  )
}

export default App
