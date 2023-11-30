import React from "react";
import './Category.css';


const Category = (props)=> {

    return(
   <div className="category-container">
   <h2 className="title">Welcome to shopX</h2>
       <div className="category">
        <button className="category-btn">Men's Clothing</button>
        <button className="category-btn">Women's Clothing</button>
        <button className="category-btn">Electronics</button>
        <button className="category-btn">Jewelery</button>
       </div>
   </div>
    )
}

export default Category;