import React, {useState} from 'react';
import axios from 'axios';



const CreateProduct = (props) => {
    const {productList, setProductList} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description,
        })
        .then((res) => {
            console.log(res);
            console.log(res.data.products);

            setProductList([...productList, res.data])
            setTitle("");
            setPrice("");
            setDescription("");

        })
        .catch((err) => {
            console.log(err);
        })
    };
  return (
    <div>
        <h2>Create product</h2>

        <form onSubmit={submitHandler}>
            <div className='form-grp'>
            <label>title</label>
            <input onChange={(e) => setTitle(e.target.value)}
            value={title}
            name="title"
            type="text"
            /> 
            </div>

            <div className='form-grp'>
            <label>title</label>
            <input onChange={(e) => setTitle(e.target.value)}
            value={price}
            name="price"
            type="number"
            /> 
            </div>

            <div className='form-grp'>
            <label>Description</label>
            <input onChange={(e) => setTitle(e.target.value)}
            value={description}
            name="description"
            type="text"
            /> 
            </div>
            <br/>
            <button className='btn' type="submit">Create</button>

        </form>

    </div>
  )
}

export default CreateProduct