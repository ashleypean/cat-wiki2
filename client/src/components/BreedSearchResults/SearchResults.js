
import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import {ReactComponent as Logo} from '../../img/logo.svg'
import BreedSummary from './BreedSummary/BreedSummary.jsx'
import OtherPhotos from './OtherPhotos/OtherPhotos.jsx'
import LoadingPage from '../Loading/Loading.jsx'
import NotFound from '../404/404.jsx'

export default function SearchResults() {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const { breedName } = useParams()
  const [photos, setPhotos] = useState(['', ''])
  const [breedInfo, setBreedInfo] = useState({
    photos: ['', ''], 
    name: '', 
    description: '', 
    temperament: '', 
    origin: '', 
    life_span: '', 
    adaptability: '', 
    affection_level: '', 
    child_friendly: '', 
    grooming: '', 
    intelligence: '', 
    health_issues: '', 
    social_needs: '', 
    stranger_friendly: '', 
  })

  useEffect( () => {
    fetch(`/breeds/search/${breedName}`)
      .then(res => res.json())
      .then(data => {
        setBreedInfo(data)
        //Remove the first photo. First photo will be set as main breed photo
        data.photos.shift()
    
        //Only return photos in multiples of 4 so that all of the photos are even
        const permPhotos = data.photos
        setPhotos(permPhotos)
      })
      .then(setTimeout( () => {setIsLoading(false)}, 4000))
      .catch((err) => {
        console.log(err)
        setIsError(true)
      })
  }, [breedName])


  //Check if there is an error
  //If error (cat does not exist), show error page
  //If not error, show cat info 
  return isLoading? <LoadingPage />: isError? <NotFound />: (
    <div className="search-results">
      <Link to="/">
        <img src={Logo} alt="Cat Wiki Logo. Click to go back to home page" />
      </Link>
      <BreedSummary breedInfo={breedInfo} breedName={breedName}/>
      <OtherPhotos photos={photos} breedName={breedName}/>
    </div>
  )
}