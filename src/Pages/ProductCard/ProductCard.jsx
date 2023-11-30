import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductCard.css'

const ProductCard = (props) => {
    const data = props.data;
    // console.log('productCard', data);

    const  {productID} = useParams();
    const selectedProduct = data.find(product=> product.id === parseInt(productID,10));

    if(!selectedProduct) {
        return<div>No Product Found</div>
    }
    return (
            <div className="selectedProduct">
              <img className='selectedProductImg' src={selectedProduct.image} />
              <p className='selectedProductPara'><b>{selectedProduct.title}</b></p>
              <p className='selectedProductPara'><b>$ {selectedProduct.price}</b></p>
              <div><p>{selectedProduct.description}</p></div>
              <div className='ratingCount'>
              <p className='selectedProductPara'><b>Rating:</b> {selectedProduct.rating.rate}</p>
              <p className='selectedProductPara'><b>In Stock:</b> {selectedProduct.rating.count}</p>
              </div>
            
            </div>
      )
}

export default ProductCard