import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate(); 
  function handleClickAbout() {
    navigate('/about'); 
  }
  function handleClickDashboard() {
    navigate('/Dashboard'); 
  }

  return (
    <div>
      <h1>Hey. That is the HOME PAGE. </h1>
      <button onClick={handleClickAbout}>
        move to About page.
      </button>
      <br />
      <br />
      <button onClick={handleClickDashboard}>
        move to Dashboard.
      </button>
    </div>
  )
}

export default Home
