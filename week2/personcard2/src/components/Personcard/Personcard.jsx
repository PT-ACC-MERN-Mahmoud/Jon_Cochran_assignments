import React, {useState} from 'react';
import '../Personcard/Personcard.css';

const Personcard = (props) => {
    const [personAge, setAge] = useState({
        age: 28
    })

    const {firstName, lastName, age, hairColor } = props;

    const handleClick = () => {
        setAge({
            age: personAge.age + 1
        });
    }

  return (
    <div className='card'>
        <h1 className='bold-text'>{lastName}, {firstName}</h1>
        <p className='p-text'>Age: {personAge.age}</p>
        <p className='p-text'>Hair Color: {hairColor}</p>
        <button className='btn' onClick={e => handleClick()}>Birthday button for : {props.firstName} {props.lastName}</button>
    </div>
  )
}

export default Personcard