import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import {  BG_IMG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div >
      <div className="fixed inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src={BG_IMG_URL}
        />
      </div>
      <div className=''> 
    <GptSearchBar/>
    <GptMovieSuggestion/>
    </div>



    </div>
  )
}

export default GptSearch
//now
