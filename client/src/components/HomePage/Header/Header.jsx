import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import HeaderLogo from '../../../img/logo-white.svg'
import './Header.css'

export default function Header(props) {
  const [tempNames, setTempNames] = useState(['', ''])
  const [constNames, setConstNames] = useState(['', ''])
  // const [isOpen, setIsOpen] = useState(false)
  //Keep track of our browser history so we can redirect to search results
  const history = useHistory()

 useEffect( () => {
  setTempNames(props.names)
  setConstNames(props.names)
 }, [props])


  // const handleSelect = (e) => {
  //   const selection = e.target.innerText
  //   const searchString = `breeds/search/${selection}`
  //   return <Link to={searchString} />
  // } 

  const handleSubmit = (e) => {
    e.preventDefault()
    //Store user value in search bar
    const userInput = document.querySelector('input.search').value.toLowerCase()

    //check if user input is valid name 
    if(constNames.find(el => el.toLowerCase() === userInput)) {
      //Search for user selected breed
    history.push(`/breeds/search/${userInput}`)
    }else {
      //else redirect to 404 not found page
      history.push('/404')
    }
  }

  //Change list items as user types
  const handleChange = (e) => {
    e.preventDefault()
    const userInput = document.querySelector('input.search').value.toLowerCase()
    
    //When user begins to type generate a new list view with options that match user input
    generateNamesList(userInput)
  }

  const generateNamesList = (userInput) => {
    if(userInput === '' || !userInput) {
      setTempNames(constNames)
    }else {
      setTempNames(constNames.filter(name => name.toLowerCase().startsWith(userInput)))
    }
  }

  const handleFocus = () => {
    //Store the input field, the div.names-list and ul.names-list elements
    const input = document.querySelector('input.search')
    const namesDiv  = document.querySelector('div.names-list')
    const namesList = document.querySelector('ul.names-list')

    //If input list is active, show the div and ul, if not - hide them
    if(document.activeElement === input) {
      namesDiv.classList.remove('hidden')
      namesList.classList.remove('hidden')
      
    } else {
      namesDiv.classList.add('hidden')
      namesList.classList.add('hidden')
    }
    
  }

  return (  
    <div className="header">
      <img src={HeaderLogo} alt="" className="logo"/>
      <p className="subtitle">Get to know more about your cat breed</p>
        <form action="" className="search" onSubmit={handleSubmit}>
          <input type="text" 
          className="search" 
          onSubmit={handleSubmit} 
          onChange={handleChange} 
          placeholder="Search" 
          onFocus={handleFocus} 
          onBlur={handleFocus}/>

          <div className="names-list hidden">
            <ul className="names-list hidden">
              {tempNames.map((name, index) => (
                <li key={index}>
                  <Link to={`/breeds/search/${name}`}>
                   {name} 
                  </Link>
                </li>  
                ))}
            </ul>
          </div>
        </form>
    </div>
  )
}
