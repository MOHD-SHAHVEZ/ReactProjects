import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate(); 

  function handleClickHome() {
    navigate('/home')
  } 
  function handleClickAbout() {
    navigate('/about'); 
  }
  return (
    <div>
      <h1>Hey Welcome to Dashboard Page. </h1>

      <button onClick={handleClickAbout}>
        move to About.
      </button>

      <br />
      <br />

      <button onClick={handleClickHome}>
        move to home
      </button>
      <br />

{/* use for showing child Route inside the parent route without this tag cannot show any thing */}
    <Outlet/> 
    </div>
  )
}

export default Dashboard
