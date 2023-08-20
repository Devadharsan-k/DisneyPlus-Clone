import React from 'react'
import GenereList from '../Services/GenereList'
import MovieList from './MovieList';

const GenereMovieList = () => {

  return (
    <div>
      {GenereList.genere.map((item, index) =>index<=4 && (
        <div>
            <h2>{item.name}</h2>
            <MovieList genereId={item.id}/>
        </div>
      ))}
    </div>
  )
}

export default GenereMovieList
