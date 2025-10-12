import React from 'react'

const Button = (props) => {
  return (
    <div>
        
        {props.children}
        <button onClick={props.incrementValue}>{props.textName}</button>
    </div>
      
  )
}

export default Button
