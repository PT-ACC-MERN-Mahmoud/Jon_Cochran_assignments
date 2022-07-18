import React, {useState} from 'react';
import axios from 'axios';
import '../ProductForm/ProductForm.css';



const ProductForm = (props) => {
    const {products, setProducts} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    //handler 
    const onSubmitHandler = (e) => {
        //prevent default behavior
        e.preventDefault();
        //fetch goes here
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
        .then((res) =>{
            console.log(res);
            console.log(res.data);

            setTitle("");
            setPrice("");
            setDescription("");
            setProducts([...products, res.data])
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div>
        <form onSubmit={onSubmitHandler}>
            <div className='form-bg'>
            <div className='input-grp'>
                <label>Title: </label>
                <input onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text" 
                name="title" 
                placeholder='title goes here' />
            </div>
            <div className='input-grp'>
                <label>Price: </label>
                <input onChange={(e) => setPrice(e.target.value)}
                value={price} 
                type="text" name="Price" placeholder='price goes here' />
            </div>
            <div className='input-grp'>
                <label>Description: </label>
                <input onChange={(e) => setDescription(e.target.value)}
                value={description}
                type="text" name="Description" placeholder='Description goes here' />
            </div>
            <button className="btn" type='submit'>Create</button>
            </div>
        </form>
    </div>
  )
}

export default ProductForm