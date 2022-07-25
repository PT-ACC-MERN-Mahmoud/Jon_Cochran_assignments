import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Movie = () => {
    const [movie, setMovie] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=> {
    axios.get(`http://localhost:8000/api/movies/${id}`)
    .then((res) => {
      console.log(res.data)
      setMovie(res.data.movie)
    })
    .catch((err) => console.log('Get Movie By ID error', err));

    }, [id]);

    const deleteMovie = (movieId) => {
      axios.delete(`http://localhost:8000/api/movies/${id}`)
      .then((res) => {
        navigate('/')
      })
      .catch((err) => console.log('Get Movie By ID error', err));
    };

    const counter = () => {
      setCount((count) => count + 1)
      console.log('button clicked', count)
    }

  return (
    <div>
        <h2>{movie.title}</h2>
        <img src={movie.boxArt} alt={movie.title} />
        <p>Length: {movie.duration}</p>
        <p>Rating: {movie.rating}</p>
        <p>Actors: {movie.actors && movie.actors.join(', ')}</p>
        <p>{movie.isKidFriendly ? "okay for kiddos" : "No"}</p>
        <p>released: {movie.releaseYear}</p>
        <button onClick={deleteMovie}>Delete</button>
        <button onClick={(e) => counter(e)}>
            Like {count}
        </button>
    </div>
  )
}

export default Movie