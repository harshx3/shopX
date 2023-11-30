import React from "react";
import { Link } from "react-router-dom";
import './Product.css';

const Product = ({productsData}) => {

     const data = productsData;
    //  console.log('data in products',data);

     const truncateTitle = (title, maxLength)=> {
        return title.length > maxLength ? title.substring(0, maxLength) : title;
     }

  return (
    <div className='products'>
      {data.map((data) => (
        <Link to={`/product/${data.id}`} key={data.id} className="productLink">
        <div key={data.id} className="productDiv">
          <img src={data.image} />
          <p className='para'><b>{truncateTitle(data.title, 19)}</b></p>
          <p className='para'><b>$ {data.price}</b></p>

          <div className='ratingCount'>
          <p className='para'><b>Rating:</b> {data.rating.rate}</p>
          <p className='para'><b>In Stock:</b> {data.rating.count}</p>
          </div>
        
        </div>
        </Link>
      ))}
    </div>
  )
}

export default Product