import React  from 'react'
import { Link } from 'react-router-dom' 
import './MostSearched.css'
import Arrow from '/Users/ashley/Library/Mobile Documents/com~apple~CloudDocs/Coding/Projects/cat-wiki/src/img/read-more-arrow.png'

export default function MostSearched(props) {

  return (
    <div className="most-searched">
      <h5>Most Searched Breeds</h5>
      <div className="line-break"></div>
      <div className="titles">
        <h3>66+ Breeds For you to discover</h3>
        <Link to="/top-10">
         <p>SEE MORE <img src={Arrow} alt="See more"/></p>
        </Link>
      </div>
      <div className="article-images">
       {props.top4.map((cat, i)=> (
         <div key={i} className={`image-${i+1}`}>
           <Link to={`/breeds/search/${cat.name}`}>
            <img src={cat.url} alt={cat.name}/>
            <p>{cat.name}</p>
           </Link>
         </div>
       ))}
      </div>
    </div>
  )
}
