import React, {useState} from 'react'

const Form = () => {
    //state for color
    

    //box style
    const boxStyle = {
        padding: '10px 15px',
        height: '100px',
        weight: '100px',
        backgroundColor: 'grey'
    }

    //functions to handle clicks
    


  return (
    <div>
        <form>
            <label htmlFor="color">Color</label>
            <input type="text" name="color" />
            <button className='btn'>Submit</button>
            <div className="box" style={boxStyle}>1</div>
        </form>
    </div>
  )
}

export default Form