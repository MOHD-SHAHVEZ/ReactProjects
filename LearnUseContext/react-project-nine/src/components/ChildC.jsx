import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const ChildC = () => {
    // const user = useContext(UserContext)
    const {theme, setTheme} = useContext(ThemeContext); 
    console.log(theme); 

    function toggleTheme() {
      if(theme === 'light') 
        setTheme("dark")
      else 
        setTheme("light")
    }
  return (
    <div>
      <button onClick={toggleTheme}>
        Change Theme
      </button>
    </div>
  )
}

export default ChildC
