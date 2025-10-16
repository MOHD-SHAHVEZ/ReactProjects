import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';
import ChildB from './components/ChildB';
import ChildC from './components/ChildC';

// < --- Steps to create and use UserContext. 
// Step 1. Create Context: 
// Step 2. wrap all the child inside a provider
// Step 3. Pass Value
// Step 4. Consumer ke andar jaake consume karlo.
// < --- Khatam hua Game --- >

// export const UserContext = createContext(); // we can export at declaratino time and also at the end 
// const UserContext = createContext();

// For Theme Project: 
export const ThemeContext = createContext(); 


function App() {
  // Step 3: State to pass
  // const [user, setUser] = useState({ name: "Backend - Engineer" });

  const [theme, setTheme] = useState('light'); 



  return (
    <ThemeContext.Provider value = {{theme, setTheme}}>
      <div id='container' style={{backgroundColor:theme === 'light' ? 'beige' : "black"}}>
      <ChildA/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App;
// export {UserContext};
// export {ThemeContext}; 