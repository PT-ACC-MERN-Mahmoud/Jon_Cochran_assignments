import React, {useState} from 'react';
import '../Form/Form.css';

const Form = (props) => {
    //state for color 
    //array of boxes
    const [box, setBox] = useState({background:'#333'});
    const {boxArray, setBoxArray} = props;
    

    //functions to handle clicks
  const handleSubmit = (e) => {
    e.preventDefault();
    setBoxArray([...boxArray, box]);
    setBox({background:'#333'});
  };

  const handleChange = (e) =>{
    setBox({...box, [e.target.name]: e.target.value})
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Color</label>
            <input type="color" name="background" value={box.background} onChange={handleChange}/>
            <button className='btn'>Add</button>
        </form>
    </div>
  )
}

export default Form