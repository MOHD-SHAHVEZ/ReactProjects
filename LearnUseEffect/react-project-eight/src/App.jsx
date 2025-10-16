import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {

  const[count, setCount] = useState(0); 
  const[total, setTotol] = useState(1); 

  // First -> side_Effect_Function
  // second -> Clean-up function -> if a event unmount on browser window so they clean the function. 
  // third -> comma seprated value -> here we are mention some entities. 
  // so they run on the bases of these entity. 

  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }

  // }, [third])

  // ------------------------------------------------------------------------------------

  // Variations 1 : Run on every render
  // useEffect(() => {
  //   alert("I'm Run on Each and every Render. ")
  // })

  function handleClick() {
    setCount(count + 1); 
  }

  // ------------------------------------------------------------------------------------------

  // Variation 2: is Run only on First Render: otherwise not run: 
  // comma seprated list syntax only run on first-Render. 

  // useEffect(() => {
  //   alert("I will run only on first Render: "); 
  // }, [])

  // -------------------------------------------------------------------------------------------

  // Variation 3: 

  // useEffect(() => {
  //   alert("I will Run every time when count is updated. ")
  // }, [count]); 

  // ----------------------------------------------------------------------------------------

  // Variation 4: in this case any change on count and total they render the page so this variation run. 

  // useEffect(() => {
  //   alert("I will run every time when count/total is updated."); 
  // }, [count, total])

  
  function handleTotal() {
    setTotol(total+1);
  }

  // ----------------------------------------------------------------------------
  
  // Variation 5: this time with clean-up function. 
  useEffect(() => {
  alert("✅ Effect: Count updated:");
  return () => {
    alert("🧹 Cleanup: old count value:");
  };
}, [count]);


  return (
    <>
      <div>
        <button onClick={handleClick}>Click me</button>
        <br />
        <h2>Count is: {count} </h2>

        {/* // Btn Totol:  */}
        <button onClick={handleTotal}>update Total</button>
        <br />
        <h2>Total is: {total} </h2>

      </div>
    </>
  )
}

export default App
