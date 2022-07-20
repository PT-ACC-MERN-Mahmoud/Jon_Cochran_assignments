import React, {useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllProducts = (props) => {
    const {productList, setProductList} = props;

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

  return (
    <div>
        <h2>All Products</h2>
        {
            productList.map((product, index) => (
                <div key={index}>
                <Link to={`api/products/${product._id}`}>
                    {product.title}
                </Link>
                </div>
            ))
        }
    </div>
  )
}

export default AllProducts;