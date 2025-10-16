import React from 'react'
import { useParams } from 'react-router-dom'

const ComParam = () => {
    const {id} = useParams(); 
  return (
    <div>
      <h1>Route Parameter id: {id}</h1>
    </div>
  )
}

export default ComParam
