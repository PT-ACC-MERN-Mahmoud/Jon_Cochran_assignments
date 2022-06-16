import React, {useState} from 'react';
import '../Personcard/Personcard.css';

const Personcard = (props) => {
    const {firstName, lastName, age, hairColor } = props;
    const [personAge, setAge] = useState(age)

    

    const handleClick = () => {
        setAge( personAge + 1);
    }

  return (
    <div className='card'>
        <h1 className='bold-text'>{lastName}, {firstName}</h1>
        <p className='p-text'>Age: {personAge}</p>
        <p className='p-text'>Hair Color: {hairColor}</p>
        <button className='btn' onClick={e => handleClick()}>Birthday button for : {firstName} {lastName}</button>
    </div>
  )
}

export default Personcard