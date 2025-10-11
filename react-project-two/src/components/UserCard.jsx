import React from 'react'
// import MyPhotoGzb from "../assets/My_photo.jpg"
import "./UserCard.css"
const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
        <p id='user-tittle'>{props.name}</p>
        <img id='user-img' src= {props.image} alt={props.name} />
        <p id='user-description'>{props.desc} </p>
      
    </div>
  )
}

export default UserCard
