import React from 'react'
import { useParams, Link } from 'react-router-dom';

const Number = () => {
    const { num } = useParams();
  return (
    <div>
        <h1> Here is your number: {num}</h1>
        <Link to={'/'}>Home</Link>
    </div>
  )
}

export default Number