import { useState } from 'react'
import './App.css'

function App() {
  // const[count, setCount] = useState(0); 

  function handleClick() {
  alert("I'm Clicked on Btn. ");
  }

  function handleMouseOver() {
    alert("Para ke Upper Mouse lekar aai ho wow. "); 
  }

  function handleInputChange(e) {
    // console.log("Input me value hui hai. ")
    console.log(e.target.value)
  }

  function submitHandler(e) {
    e.preventDefault(); // Form ka default behavior mat hona do usha rok do ma khud logic likku ga
                        // default behav means -> service ko request, page ko refresh karna.
    // I'm Writing custom behaviour. 
    alert("Form Submit kardu ka");

  }

  return (
    <>
     <div>

      {/* Aasa likna sa immidiate invoke or Render hoga. */ }
      <button onClick={alert("Btn Click Hua hai.")}>Immidiate Invoke Func. </button>  {/*Function ka ander direct aasa likna ko kahta hai - immidiate Invocation.*/}
      <button onClick={() => alert("Btn Pe Click hua hai Bro.")}> Not Immidiate Invoke Func. </button>

{/* 
      <form onSubmit={submitHandler}>
        <input type="text" onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>

      <button onClick={handleClick}>
        Click me.
      </button>

      <p onMouseOver={handleMouseOver} style={{marginTop: "10px", paddingTop:"10px", color: "cyan", border: "3px solid darkgreen"}}>
        I'am a Para.
      </p> */}
      
     </div>
    </>
  )
}

export default App
