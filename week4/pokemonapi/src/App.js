import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    let url = "https://pokeapi.co/api/v2/pokemon?limit=807&offset=0";

    fetch(url)
      .then(response => response.json())
      .then(response => setPokemons(response.results)).catch(err => {
        console.log(err);
      })
  })
  return (
    <div className="App">
      {pokemons.map((pokemon, idx) => {
        return <div key={idx}>
          {pokemon.name}
        </div>
      })}
    </div>
  );
}

export default App;
