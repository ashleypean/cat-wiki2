import React from 'react'
import TransparentLoadingIcon from '../../img/loading-icon-transparent.svg'
import './Loading.css'

export default function Loading() {
  return (
    <div className="loading">
      <h1>Loading...</h1>
      <img src={TransparentLoadingIcon} alt="Cat swaying"/>
    </div>
  )
}
