import { use, useEffect, useRef, useState } from 'react'
import './App.css'
import WatchTimer from './components/watchTimer';

function App() {
  const[count, setCount] = useState(0);
  let val = useRef(0); 
  function handleClickbtn() {
    val.current = val.current + 1; 
    console.log("Value of Val is: ", val.current); 
    setCount(count + 1);
  }
  // It's run on Every Render: 
  useEffect(() => {
    // console.log("mein fersa Render ho gaya hu"); 
  })
  // handle change color function: 
  let btnRef = useRef(); 
  function handleChangeColor() {
    btnRef.current.style.backgroundColor = "blue"; 
  }

  return (

    <>
    {/* // watch timer component insert:  */}
      <WatchTimer />

      <div>
        
        <button
        // {/* Link this btn to btnRef Variable for performing changes  */}
        ref={btnRef}
        onClick={handleClickbtn} >Increament</button>

      </div>
      <br />
      <div>
        Count: {count}
      </div>
      <br />
      <div>
        <button onClick={handleChangeColor}>ColorChange of 1st Btn</button>
      </div>
    </>

  )
}

export default App
