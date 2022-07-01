import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Color = () => {
    const {str,textColor,bgColor} = useParams();
  return (
    <div style={{backgroundColor: bgColor}}>
        <h2 style={{color: textColor}}>{str}</h2>
        <Link to={'/'}>Home</Link>
    </div>
  )
}

export default Color