import React, {useEffect, useState} from 'react';
import axios from 'axios'; 
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = (props) => {
    const {id} = useParams;
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [])
    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products' + id, {
            title,
            price,
            description,
        })
            .then(res => {
                console.log(res);
                navigate('/home');
            })
            .catch(err => console.log(err))
    }
  return (
    <div>
        <h2>Update product</h2>

        <form onSubmit={updateProduct}>
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

export default UpdateProduct