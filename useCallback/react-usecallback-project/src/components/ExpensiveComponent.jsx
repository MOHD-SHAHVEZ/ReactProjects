import { useCallback, useEffect, useMemo, useState, useRef } from 'react'
// import './App.css'

function ExpensiveComponent() {

  const [count, setCount] = useState(0); 
  const [text, setText] = useState("");
  const previousFunction = useRef(null); 

  function incrementCount() {
    setCount(count + 1);
  }

  const resetCount = () => setCount(0);

  const expensiveTask = useCallback(() => {
     console.log("Running Expensive Calculation.")
     let result = 0; 
    for(let i = 0; i < 100000000; i++) {
     // for only testing purpose.
     result += i; 
    }
    return result; 
  }, [count])

  //  use effect use for checking reference. 
  useEffect(() => {
    if(previousFunction.current) {
      if(previousFunction.current === expensiveTask) {
        console.log("Function not re-created")
      } else {
        console.log("Function got re-created")
      }
    } 
    else {
      previousFunction.current = expensiveTask; 
    }
  }, [expensiveTask])

  return (
    <>  
      <div>
        <input type="text"
        placeholder='Type something...'
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
      </div>

      <p>Expensive Calulation Result: {expensiveTask()} </p>
      <button onClick={incrementCount}>Count Btn</button>
      <h2>Count is: {count}</h2>
      <button onClick={resetCount}>Reset</button>

    </>
  )
}

export default ExpensiveComponent
