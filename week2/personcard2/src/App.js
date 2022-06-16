import './App.css';

import PersonCard from '../src/components/Personcard/Personcard';


function App() {

  const personArr = [
  { 
    id: 1,
    firstName: "Steph",
    lastName: "Curry",
    age: 30,
    hairColor: "black",
  },
  { 
    id: 2,
    firstName: "Klay",
    lastName: "Thompson",
    age: 32,
    hairColor: "black",
  }
  ]
  
  return (
    <div className="App">
        {personArr.map((person) => (
          <PersonCard key={person.id}
          firstName={person.firstName}
          lastName={person.lastName}
          age={person.age}
          hairColor={person.hairColor} 
        />  
        ))}
    </div>
  );
}

export default App;
