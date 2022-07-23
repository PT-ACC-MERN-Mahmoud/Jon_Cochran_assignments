import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './MovieList.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/movies')
    .then((res) => {
      console.log(res.data)
      setMovies(res.data.movies)
    })
    .catch((err) => console.log(err));
  }, [])

  return (
    <div className='container'>
      {movies.map((movie) => (
        <div key={movie._id} className="card">
          <h2>{movie.title}</h2>
          <img src={movie.boxArt} alt={movie.title}/>
          <br />
          <Link to={`/movie/${movie._id}`}>Details</Link>
        </div>
      ))}

    </div>
  )
}

export default MovieList