import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=807&offset=0';
    axios.get(url)
    .then(res=>{setPokemons(res.data)})
    .catch(err => console.log(err))
  }, []);

  return (
    <div className="App">
      {pokemons.map((pokemon, idx)=>(
        <div key={idx}>
          {pokemon.name}
        </div>
      ))}
    </div>
  );
}

export default App;
