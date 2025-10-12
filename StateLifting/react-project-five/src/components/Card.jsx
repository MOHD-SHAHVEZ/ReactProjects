import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div id='Cards'>
     <h2>I'm {props.tittle} </h2>
     <input type="text" onChange={(e) => props.setName(e.target.value) } />
     <p>Name state ki value inside Card: {props.name}</p>
    </div>
  )
} 

export default Card
