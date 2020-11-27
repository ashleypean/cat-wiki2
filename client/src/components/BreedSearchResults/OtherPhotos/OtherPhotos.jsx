import React  from 'react'
import './OtherPhotos.css'

export default function OtherPhotos(props) {

  return (
    <div className="other-photos">
      <h3>Other photos</h3>
      <div className="photos">
        {props.photos.map((photo, index) => <img src={photo} alt={props.breedName} key={index} />)}
      </div>
    </div>
  )
}
