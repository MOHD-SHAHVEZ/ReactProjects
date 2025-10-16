import React from 'react'
import { useNavigate } from 'react-router-dom'

const about = () => {
  const navigate = useNavigate(); 

  function handleClickHome() {
    navigate('/home')
  } 
  function handleClickDashboard() {
    navigate('/Dashboard'); 
  }

  return (
    <div>
      <h1>Hey I'm a About Page. </h1>
      <button onClick={handleClickHome}>move to Home</button>
      <br />
      <br />
      <button onClick={handleClickDashboard}>move to Dashboard</button>
    </div>
  )
}

export default about
