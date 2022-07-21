import React, { useState } from 'react'
import CreateProduct from '../components/CreateProduct';
import AllProducts from '../components/AllProducts';

const Main = (props) => {
    
    const [productList, setProductList] = useState([]);

    const removeFromDb = productId => {
        setProductList(productList.filter(product => product._id != productId)); //We could also write this in our PersonList component
    }
    
    return (
        <div>
           <CreateProduct productList={productList} setProductList={setProductList} />
           <AllProducts productList={productList} setProductList={setProductList} removeFromDb={removeFromDb}/>
        </div>
    )
}
export default Main;
