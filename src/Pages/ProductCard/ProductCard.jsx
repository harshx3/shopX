import React, { useState } from 'react';
import {  useParams } from 'react-router-dom';
import './ProductCard.css'
import { useAuth } from '../../components/Authenticator/Authenticator';

const ProductCard = (props) => {



    const data = props.data;
    const {goBack} = useAuth();

    const  {productID} = useParams();
    const selectedProduct = data.find(product=> product.id === parseInt(productID,10));
    console.log('productCard', data);

    const totalItem = selectedProduct.rating.count;
    const [itemCount, setItemCount] = useState(totalItem);

    const addToCartHandler = () => {
        setItemCount( (totalItem)=> totalItem > 0 ? totalItem - 1 : 0);
  
    }


    if(!selectedProduct) {
        return<div>No Product Found</div>
    }

    return (
            <div className="selectedProduct">
            <div className='productDisplayDiv'>
              <img className='selectedProductImg' src={selectedProduct.image} alt='' />
              <p className='selectedProductPara'><b>{selectedProduct.title}</b></p>
              <p className='selectedProductPara'><b>$ {selectedProduct.price}</b></p>
              </div>
              <div className='productDisplayDetails'><p className='description'>{selectedProduct.description}</p>
              <p className='selectedProductPara'><b>Rating:</b> {selectedProduct.rating.rate}</p>
              <p className='selectedProductPara'><b>In Stock:</b> {itemCount}</p>
              <button className='productDisplayCartBtn' onClick={addToCartHandler}>Add To Cart</button>
              </div>
              <button onClick={goBack} className='backBtn'>Go Back</button>
            </div>
      )
}

export default ProductCard