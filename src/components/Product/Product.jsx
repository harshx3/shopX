import React from "react";
import './Product.css';

const Product = ({productsData}) => {

     const data = productsData;
     console.log('data in products',data);

     const truncateTitle = (title, maxLength)=> {
        return title.length > maxLength ? title.substring(0, maxLength) : title;
     }

  return (
    <div className='products'>
      {data.map((data) => (
        <div key={data.id} className="productDiv">
          <img src={data.image} />
          <p className='para'><b>{truncateTitle(data.title, 19)}</b></p>
          <p className='para'><b>$ {data.price}</b></p>

          <div className='ratingCount'>
          <span className='para'><b>Rating</b> {data.rating.rate}</span>
          <span className='para'><b>Left</b> {data.rating.count}</span>
          </div>

          <div><button className="addToCart">Add to Cart</button></div>
        </div>
      ))}
    </div>
  )
}

export default Product