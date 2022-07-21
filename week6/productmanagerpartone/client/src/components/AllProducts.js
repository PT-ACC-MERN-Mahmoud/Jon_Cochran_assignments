import React, {useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllProducts = (props) => {
    const {removeFromDb, productList, setProductList} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res)=>{
                console.log(res.data);
                setProductList(res.data.products);
            })
            .catch((err)=>{
                console.log(err);
            })
    }, []);

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDb(productId)
            })
            .catch(err => console.log(err))
    }

  return (
    <div>
        <h2>All Products</h2>
        {
            productList.map((product, index) => (
                <div key={index}>
                <Link to={`api/products/` + product._id}>
                    {product.title}
                </Link>
                |
                <Link to={`api/products/` + product._id}>Edit</Link>
                |
                <button onClick={(e)=>{deleteProduct(product._id)}}>
                    Delete
                </button>
                </div>
            ))
        }
    </div>
  )
}

export default AllProducts;