import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditMovie = () => {
  const [title, setTitle] = useState('');
  const [boxArt, setBoxArt] = useState('');
  const [duration, setDuration] = useState('');
  const [rating, setRating] = useState('');
  const [actors, setActors] = useState('');
  const [isKidFriendly, setIsKidFriendly] = useState(false);
  const [releaseYear, setReleaseYear] = useState(0);
  const navigate = useNavigate();
  const {id} = useParams();
  //fetch call 
  useEffect(() =>{
    axios.get(`http://localhost:8000/api/movies/${id}`)
    .then((res) =>{
        console.log(res.data);
        setTitle(res.data.title)
        setBoxArt(res.data.boxArt);
        setDuration(res.data.duration);
        setRating(res.data.rating);
        setActors(res.data.actors.join(', '));
        setIsKidFriendly(res.data.isKidFriendly);
        setReleaseYear(res.data.setReleaseYear);
    })
  }, []);

  //handler for submissions
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/movies/${id}`, {
        title,
        boxArt,
        duration,
        rating,
        actors: actors.split(','),
        isKidFriendly,
        releaseYear,
    })
    .then((res)=> {
        console.log(res.data);
        navigate('/');
    })
    .catch((err) => console.log('post error', err));
  };


  return (
    <div>
        <h2> Edit a Movie : </h2>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Box Art</label>
        <input type="text" value={boxArt} onChange={(e) => setBoxArt(e.target.value)} />
        <label>Duration</label>
        <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} />
        <label>Rating</label>
        <select value={rating} name="rating" onChange={(e) => setRating(e.target.value)}>
            <option>Select a Rating</option>
            <option value="G">G</option>
            <option value="PG">PG</option>
            <option value="PG-13">PG-13</option>
            <option value="R">R</option>
            <option value="NC-17">NC-17</option>
        </select>
        <label>Actors</label>
        <input
            type="text"
            value={actors}
            placeholder="enter actors with commas"
            onChange={(e) => setActors(e.target.value)}
        />
        <label> Kid Friendly</label>
        <input
            type="checkbox"
            checked={isKidFriendly}
            onChange={(e) => setIsKidFriendly(e.target.checked)}
        />
        <label> Release Year</label>
        <input type="number" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} />

        <button>Update Movie</button>
        </form>
    </div>
  )
}

export default EditMovie