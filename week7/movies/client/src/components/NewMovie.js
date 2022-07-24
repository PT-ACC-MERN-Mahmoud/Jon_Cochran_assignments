import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewMovie = () => {
  const [title, setTitle] = useState('');
  const [boxArt, setBoxArt] = useState('');
  const [duration, setDuration] = useState('');
  const [rating, setRating] = useState('');
  const [actors, setActors] = useState('');
  const [isKidFriendly, setIsKidFriendly] = useState(false);
  const [releaseYear, setReleaseYear] = useState(0);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  //handle submit 
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/movies', {
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
    .catch((err) => setErrors(err.response.data.errors.message));
  }
  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <label>Title</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      {errors.title && <span className="text-danger">{errors.title.message}</span>}
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

      <button>Add Movie</button>

    </form>
  )
}

export default NewMovie