import './Movies.css';
import React, { useEffect, useState } from 'react';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [allApi, setAllApi] = useState([]);
  let filter = [];

  const getAll = async () => {
      await fetch(
        'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json',
      )
        .then((res) => res.json())
        .then((res) => setAllApi(res.entries));}
        
        const filterMovies = allApi.filter((movie) => movie.programType === 'movie' && movie.releaseYear >= 2010,);
        filterMovies.splice(21)
      
        const sortMovies = filterMovies.sort((a,b) => (a.title > b.title ? -1 : 1));

        useEffect(() => {
          getAll();
        },)

  return (
      <div className= "movie_container">
        <div className="movies_title">
          <h3>Popular Movies</h3>
        </div>
        <div className="movies_card">
          { filterMovies.map((movie) => (
              <div key={movie.title}>
                <img src={movie.images['Poster Art'].url} alt={movie.title} />
                <h4>{movie.title}</h4>
              </div> 
              ))}
        </div>
      </div>
    );
  };

export default Movies 