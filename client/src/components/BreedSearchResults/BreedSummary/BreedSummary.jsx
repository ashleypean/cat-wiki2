import React from 'react'
import Stats from './SummaryContent/Stats.jsx'
import Photo from './SummaryContent/Photo.jsx'
import Text from './SummaryContent/Text.jsx'
import './BreedSummary.css'

export default function BreedSummary(props) {
  return (
    <div className="breed-summary">
      <Photo photo={props.breedInfo.photos}/>
      <div className="right">
        <Text name={props.breedName} description={props.breedInfo.description}/>
        <Stats stats={props.breedInfo}/>
      </div>
    </div>
  )
}
