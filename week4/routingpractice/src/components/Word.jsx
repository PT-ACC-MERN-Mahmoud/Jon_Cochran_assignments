import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Word = () => {
    const { word } = useParams();
  return (
    <div>
        <h1>The word is: {word}</h1>
        <Link to={'/'}>Home</Link>
    </div>
  )
}

export default Word