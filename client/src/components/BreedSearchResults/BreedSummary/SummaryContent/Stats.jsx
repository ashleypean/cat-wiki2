import React from 'react'

export default function Stats(props) {
  const { stats } = props

  //Function will updates className to determine if the div has a brown or white fill 
  const colorRatings = num => {
    const ratingsArr = []
    for(let i = 0; i < 5; i++) {
      if(num > 0) {
        ratingsArr.push(<div className="brown-bg" key={i}/>)
      }else {
        ratingsArr.push(<div className="no-bg" key={i}/>)
      }
      --num
    }
    return ratingsArr
  }

  return (
    <div className="stats">
      <p>
        <span>Temperament: </span>
        {stats.temperament}
      </p>
      <p>
        <span>Origin: </span>
        {stats.origin}
      </p>
      <p>
        <span>Life Span: </span>
        {stats.life_span + ' years'} 
      </p>

      <br/>

      <div className="rating">
        <span className="stat">Adaptability: </span>
        <div className="rating-container">
          {colorRatings(stats.adaptability).map((x, index)=> x)}
        </div>
      </div>

      <div className="rating">
        <span className="stat">Affection level: </span>
        <div className="rating-container">
          {colorRatings(stats.affection_level).map((x, index)=> x)}
        </div>
      </div>

      <div className="rating">
        <span className="stat">Child friendly: </span>
        <div className="rating-container">
         {colorRatings(stats.child_friendly).map((x, index)=> x)}
        </div>
      </div>

      <div className="rating">
        <span className="stat">Grooming: </span>
        <div className="rating-container">
         {colorRatings(stats.grooming).map((x, index)=> x)}  
        </div>
      </div>

      <div className="rating">
        <span className="stat">Intelligence: </span>
        <div className="rating-container">
          {colorRatings(stats.intelligence).map((x, index)=> x)} 
        </div>
      </div>

      <div className="rating">
        <span className="stat">Health issues: </span>
        <div className="rating-container">
         {colorRatings(stats.health_issues).map((x, index)=> x)} 
        </div>
      </div>

      <div className="rating">
        <span className="stat">Social needs: </span>
        <div className="rating-container">
         {colorRatings(stats.social_needs).map((x, index)=> x)} 
        </div>
      </div>

      <div className="rating">
        <span className="stat">Stranger friendly: </span>
        <div className="rating-container">
         {colorRatings(stats.stranger_friendly).map((x, index)=> x)} 
        </div>
      </div>

    </div>
  )
}
