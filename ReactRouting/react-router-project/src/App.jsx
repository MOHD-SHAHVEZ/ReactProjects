import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home"; 
import About from "./components/about"; 
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar'; 
import LandingPage from './components/LandingPage';
import ComParam from './components/ComParam';
import AllCourses from './components/AllCourses'; 
import AllMockTest from './components/AllMockTest';
import AllReports from './components/AllReports';



function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element:
        <div>
          <NavBar/>
          <LandingPage/>
        </div>
      },

      {
        path: "/home", 
        element:
        <div>
          <NavBar/>
          <Home/>
        </div>
      }, 

      {
        path: "/about", 
        element: 
         <div>
          <NavBar/>
          <About/>
        </div>
      }, 

      {
        path: "/Dashboard", 
        element:
         <div>
          <NavBar/>
          <Dashboard/>
        </div>, 
        children: [
          {
            path: 'courses', 
            element: <AllCourses/>
          },
          {
            path: 'mockTest', 
            element: <AllMockTest/>
          },
          {
            path: 'reports', 
            element: <AllReports/>
          },
        ]
      },

      {
        path: '/student/:id', 
        element: 
        <div>
          <NavBar/>
          <ComParam/>
        </div>
      },

    ]

  )

  return (
    <>
    <div>
      <RouterProvider router = {router}/>
    </div>
    </>
  )
}

export default App
