import React, {useState} from 'react';
import '../Product/Product.css';



const Product = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");
    //handler 
    const onSubmitHandler = (e) => {
        //prevent default behavior
        e.preventDefault();
        //fetch goes here

    }
  return (
    <div>
        <form>
            <div className='form-bg'>
            <div className='input-grp'>
                <label>Title: </label>
                <input type="text" name="title" placeholder='title goes here' />
            </div>
            <div className='input-grp'>
                <label>Price: </label>
                <input type="text" name="title" placeholder='title goes here' />
            </div>
            <div className='input-grp'>
                <label>Description: </label>
                <input type="text" name="title" placeholder='title goes here' />
            </div>
            <button>Create</button>
            </div>
        </form>
    </div>
  )
}

export default Product