import React from 'react'

const Box = (props) => {
    const {box} = props;
  return (
    <div className='box' style={{background:box.background, width:'100px', height:'100px'}}>

    </div>
  )
}

export default Box