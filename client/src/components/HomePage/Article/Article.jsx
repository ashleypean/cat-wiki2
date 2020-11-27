import React from 'react'
import './Article.css'
import Arrow from '/Users/ashley/Library/Mobile Documents/com~apple~CloudDocs/Coding/Projects/cat-wiki/src/img/read-more-arrow.png'

export default function Article() {
  return (
    <div className="article">
      <div className="line-break"></div>
      <h2 className="article-title">Why should you have a cat?</h2>
      <p className="article-subtitle">
      Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety levels
      </p>
      <div className="read-more">
        <a href="https://www.lifehack.org/285000/14-reasons-why-you-should-have-cat-home" target="_blank" rel="noopener noreferrer">
          <p> READ MORE </p>
          <img src={Arrow} alt='Click link to read more'/>
        </a>

      </div>

    </div>
  )
}
