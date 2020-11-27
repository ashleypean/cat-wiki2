import React from 'react'
import Image1 from '/Users/ashley/Library/Mobile Documents/com~apple~CloudDocs/Coding/Projects/cat-wiki/src/img/grid-image-1.png'
import Image2 from '/Users/ashley/Library/Mobile Documents/com~apple~CloudDocs/Coding/Projects/cat-wiki/src/img/grid-image-3.png'
import './PhotoGrid.css'
import Image3 from '/Users/ashley/Library/Mobile Documents/com~apple~CloudDocs/Coding/Projects/cat-wiki/src/img/grid-image-2.png'



export default function PhotoGrid() {
  return (
    <div className="photo-grid" >
      <div className="column-1">
        <img className = "grid-image-1" src={Image1} alt=""/>
        <img className = "grid-image-2" src={Image2}  alt=""/>
      </div>
      <div className="column-2">
        <img className = "grid-image-3" src={Image3} alt=""/>
      </div>
    </div>
  )
}
