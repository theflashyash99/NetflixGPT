import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
  const gpt = useSelector(store => store.gpt);
  const {movieName , movieResults} = gpt;
  if(!movieName) return null; 
 
  return (
    <div className="p-4 m-4 text-white bg-black opacity-90">
      {movieName.map((movie, index) => (
        <MovieList 
          key={index} 
          title={movie} 
          movies={movieResults[index]} 
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestion
//now
