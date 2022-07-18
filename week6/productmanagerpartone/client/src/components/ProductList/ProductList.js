import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
const ProductList = (props) => {
    
    const {products, setProducts} = props;
    
    useEffect(()=>{
    	axios.get("http://localhost:8000/api/products")
    	.then((res)=>{
	    console.log(res.data);
            setProducts(res.data.product);
	    })
    	.catch((err)=>{
            console.log(err);
    	})
    }, [])
    
    return (
        <>
        {products.map((product, idx) => {
            return <p key={idx}>{product.title}</p>
                
            })
        }
        </>
    )
}
export default ProductList;

