import React, { useState, useEffect } from 'react'
import {ReactComponent as Logo} from '../../img/logo.svg'
import Header from './Header/Header.jsx'
import Article from './Article/Article.jsx'
import MostSearched from './MostSearched/MostSearched.jsx'
import PhotoGrid from './PhotoGrid/PhotoGrid.jsx'
import LoadingPage from '../Loading/Loading.jsx'

export default function Homepage() {
  const [isLoading, setIsLoading] = useState([true, true])
  const [names, setNames] = useState(['', ''])
  const [top4, setTop4] = useState([{}])

  const divStyle={
    height: "100%", 
    width: "100%"
  }
  useEffect( () => {
    fetch('/api')
      .then(res => res.json())
      .then(data => {
        setNames(data.names)
        setTop4(data.top4)
      })
      .then(setTimeout(() => setIsLoading(false), 7000))
  }, [])

  return  isLoading? <LoadingPage />: (
    <div className="homepage" style={divStyle}>
      <Logo />
      <Header names={names} />
      <MostSearched top4={top4} />
      <Article />
      <PhotoGrid />
    </div>
  )
}
