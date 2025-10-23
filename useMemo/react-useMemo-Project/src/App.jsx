import { useMemo, useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0); 
  const [input, setInput] = useState(0); 

  function incrementCount() {
    setCount(count + 1);
  }

  const resetCount = () => setCount(0);

  function expensiveTask(num) {
     console.log("Inside Expensive...")
    for(let i = 0; i < 1000000000; i++) {
     // for only testing purpose.
    }
    return num * 2; 
  }

  // let doubleValue = expensiveTask(input); 
  let doubleValue = useMemo(() => expensiveTask(input), [input])

  return (
    <>
      <button onClick={incrementCount}>Count Btn</button>
      <h2>Count is: {count}</h2>
      <button onClick={resetCount}>Reset</button>
      
      <div>
        <input type="number"
        placeholder='Enter Number: '
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div>
        Double Value is: {doubleValue}
      </div>


    </>
  )
}

export default App
