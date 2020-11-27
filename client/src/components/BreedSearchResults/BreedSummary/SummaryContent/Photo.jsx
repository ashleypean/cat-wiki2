import React from 'react'

export default function Photo(props) {
  return (
    <div className="photo-container">
      <img src={props.photo[0]} alt="Placeholder" className="photo"/>
    </div>

  )
}
