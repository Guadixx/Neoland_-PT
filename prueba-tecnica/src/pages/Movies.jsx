import './Movies.css';
import React, { useEffect, useState } from 'react';


import Spinner from '../ui/Spinner';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const getAll = async () => {
    await fetch(
      'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json',
    )
      .then((res) => res.json())
      .then((res) => setMovies(res.entries)
      );
    }
  const filterMov = (keyword) => {
    const filter = movies.filter((mov) =>
      mov.title.toLowerCase().includes(keyword.toLowerCase()),
    );
    setFilteredMovies(filter);
  }
  useEffect(() => {
    getAll();
  })
  

   return (
    <div className="movies">
      <div
        className="filter">
          <img
            src="https://res.cloudinary.com/dnb4ujbgr/image/upload/v1677347391/magnifying-glass_pi3wxw-white_qq12kv.svg"
            alt="Magnifying Glass"
          />
        <input
          type="text"
          placeholder="ex: Nemo.."
          onChange={(ev) => filterMov(ev.target.value)}
        />
      </div>
      <div className="movies-container">
      {movies.map((mov)=> (<div className="cartasMovies" key={mov.title}>
                    <h1>{mov.name}</h1>
                    <h2>title: {mov.title} </h2>
                    <h2>sinopsis: {mov.description} </h2>
                    <h2>program type: {mov.programType} </h2>
                    <img src={mov.images['Poster Art'].url} alt={mov.title}/>
                    <h2>released: {mov.releasedYear} </h2>
                    </div>)
                    )}
        <Spinner />
      </div>
    </div>
   )
}


export default Movies