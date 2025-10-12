import React from 'react'

const Card = (props) => {
  return (
    <div>
        <h1>That is for you My Student {props.name} you are Enhance your skills</h1>
      {props.children}
    </div>
  )
}

export default Card
