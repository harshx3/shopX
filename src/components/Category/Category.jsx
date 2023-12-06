import React from "react";
import './Category.css';
import { Link } from "react-router-dom";


const Category = ()=> {

    return(
   <div className="category-container">
   <h2 className="title">Welcome to shopX</h2>
       <div className="category">
        <Link to={`category/${encodeURIComponent("men's clothing")}`} className="category-btn">Men's Clothing</Link>
        <Link to={`category/${encodeURIComponent("women's clothing")}`} className="category-btn">Women's Clothing</Link>
        <Link to={`category/${encodeURIComponent("electronics")}`} className="category-btn">Electronics</Link>
        <Link to={`category/${encodeURIComponent("jewelery")}`} className="category-btn">Jewelery</Link>
       </div>
   </div>
    )
}
export default Category;