import React from 'react'

export default function Text({name, description}) {
  
  //Name is currently written in all lowerase
  //Capitalize the first letter of the cat's name
  const upperCaseName = () => {
    const arr = name.split('')
    arr[0] = arr[0].toUpperCase()
    name = arr.join('')
    return name
  }

  return (
    <div className="text">
      <h4>{upperCaseName()}</h4>
      <p>{description}</p>
    </div>
  )
}
