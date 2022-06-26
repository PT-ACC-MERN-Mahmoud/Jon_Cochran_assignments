import React from 'react';
import Box from '../Box/Box';
import '../List/List.css';

const List = (props) => {
    const {boxArray} = props;
  return (
    <div className='list'>
        {boxArray.map((box, i)=>(
        <Box className='box' key={i} box={box}/>
        ))}
    </div>
  )
}

export default List