import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      .then(res => setPokemons(res.data.results) )
      .catch(err => console.log(err))
  }, []);

  return (
    <div className="App">
      <h1> Axios Pokemon API </h1>
      {pokemons.map((pokemon, idx)=>(
        <div key={idx}>
          {pokemon.name}
        </div>
      ))}
    </div>
  );
}

export default App;
