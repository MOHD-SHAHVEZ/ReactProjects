import { useState } from 'react'
import './App.css'
import Login from "./components/LoginBtn"
import Logout from './components/LogoutBtn'

function App() {
  const[IsLoggedIn, setLoggedIn] = useState(true); 

  return(
    <>

    <div>
      <h1>Welcome to the Skill Development Program.</h1>
      <div>
        {IsLoggedIn ? <Logout/> : <Login/>}
      </div>
    </div>
    
    </>
  )

  // Ternary Operator! 
  // return (
  //   <div>
  //     {IsLoggedIn ? <Login/> : <Logout/>}
  //   </div>
  // )

    // if(IsLoggedIn) {
    //     return <Login/>
    //   }else {
    //     return <Logout/>
    //     }
}

export default App
