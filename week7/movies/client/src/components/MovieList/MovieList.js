import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './MovieList.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:8000/api/movies')
    .then((res) => {
      console.log(res.data)
      setMovies(res.data.movies)
    })
    .catch((err) => console.log(err));
  }, [])

  const deleteMovie = (movieId) => {
    axios
      .delete(`http://localhost:8000/api/movies/${movieId}`)
      .then((res) => {
        const newMovies = movies.filter((movie) => movie._id !== movieId);
        setMovies(newMovies);
      })
      .catch((err) => console.log(err));
  };

  const counter = () => {
    setCount((count) => count + 1)
    console.log('button clicked', count)
  }

  return (
    <div className='container'>
      {movies.map((movie) => (
        <div key={movie._id} className="card">
          <h2>{movie.title}</h2>
          <img src={movie.boxArt} alt={movie.title}/>
          <br />
          <Link to={`/movie/${movie._id}`}>Details</Link>
          <span> | </span>
          <Link to={`/movie/edit/${movie._id}`}>Edit</Link>
          <br />
          <button style={{ marginTop: '1rem' }} onClick={() => deleteMovie(movie._id)}>
            Delete
          </button>
          <button style={{ marginTop: '1rem' }} onClick={(e) => counter(e)}>
            Like {count}
          </button>
        </div>
      ))}

    </div>
  )
}

export default MovieList