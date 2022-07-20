import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const OneProduct = (props) => {
    const {id} = useParams();
    const [oneProduct, setOneProduct] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            console.log(res.data);
            setOneProduct(res.data);
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [id])
  return (
    <div>
        <div className='oneItem'>
            <h3>{oneProduct.title}</h3>
            <p>{oneProduct.price}</p>
            <p>{oneProduct.description}</p>
        </div>
    </div>
  )
}

export default OneProduct;