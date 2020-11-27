import React from 'react'
import "./Footer.css"
import FooterLogo from '/Users/ashley/Library/Mobile Documents/com~apple~CloudDocs/Coding/Projects/cat-wiki/src/img/logo-white.svg'

export default function Footer() {
  return (
    <div className="footer" >
      <img className="footer-logo" src={FooterLogo} alt="Footer Logo" />
      <p>
        &copy; Ashley Pean - devchallenges.io 2020 - Icons8
      </p>
    </div>
  )
}
