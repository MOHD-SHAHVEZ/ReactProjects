import { useCallback, useState } from 'react'
import './App.css'
import ChildComponents from './components/ChildComponents';
import ExpensiveComponent from './components/ExpensiveComponent';

function App() {
  const [count, setCount] = useState(0); 
  const handleClick = useCallback(() => {
    setCount(count + 1)
  }, [count]);
  const resetBtn = () => setCount(0); 

  return (
    <>
     {/* <button onClick={handleClick}>Increment</button>
     <h2>Count is: {count} </h2>
     <button onClick={resetBtn}>Reset</button>
     <br />
     <br />
     
     <div>
      <ChildComponents buttonName = "Click me" handleClick = {handleClick} />
     </div>

     <br />
     <br />
     <br /> */}

     <div>
      <ExpensiveComponent />
     </div>

    </>
  )
}

export default App
