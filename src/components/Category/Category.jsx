import React from "react";
import './Category.css';


const Category = (props)=> {

    return(
   <div className="shop">
   <h2 className="title">Welcome to shopX</h2>
       <div className="category">
        <button>Men's Clothing</button>
        <button>Women's Clothing</button>
        <button>Electronics</button>
        <button>Jewelery</button>
       </div>
   </div>
    )
}

export default Category;