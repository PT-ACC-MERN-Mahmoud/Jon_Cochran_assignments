import './App.css';

import PersonCard from '../src/components/Personcard/Personcard';


function App() {

  const person = 
  { 
    id: 1,
    firstName: "Steph",
    lastName: "Curry",
    age: " ",
    hairColor: "black",
  }

  const person2 =  { 
    id: 2,
    firstName: "Klay",
    lastName: "Thompson",
    age: 32,
    hairColor: "black",
  }
  
  return (
    <div className="App">
      
        <PersonCard key={person.id}
          firstName={person.firstName}
          lastName={person.lastName}
          age={person.age}
          hairColor={person.hairColor} 
        />  

        <PersonCard key={person2.id}
          firstName={person2.firstName}
          lastName={person2.lastName}
          age={person2.age}
          hairColor={person2.hairColor} 
        /> 
     
    </div>
  );
}

export default App;
