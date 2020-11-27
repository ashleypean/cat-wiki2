import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Header from './Header/Header.jsx'
import Logo from 'client/src/img/logo.svg'
import Description from './Description/Description.jsx'
import LoadingPage from '../Loading/Loading.jsx'

function Top10() {
  const [isLoading, setIsLoading] = useState(true)
  const [top10, setTop10] = useState([{
    name: '', 
    url: '', 
    description: ''
  }])

  useEffect(() => {
    fetch('/top-10')
      .then(res => res.json())
      .then(data => setTop10(data))
      .then(setTimeout(() => {setIsLoading(false)}, 6000))
  }, [])

  return isLoading? <LoadingPage />: (
    <div className="top-10">
      <Link to="/">
        <img src={Logo} alt="Home Page"/>
      </Link>
      <Header />
      <Description top10={top10} />
    </div>
  );
}

export default Top10