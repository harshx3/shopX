import React from 'react'
import Product from '../../components/Product/Product';
import { useParams } from 'react-router-dom';
import './SelectedCat.css';
import { useAuth } from '../../components/Authenticator/Authenticator';

const SelectedCat = (props) => {
    const data = props.data;
    console.log('data in cat',data);

    const { categoryName } = useParams();
    const {goBack} = useAuth();

  // Decode the URL parameter
  const decodedCategoryName = decodeURIComponent(categoryName);

  // Filter products based on the decoded category name
  const productsInSelectedCategory = data.filter(product => product.category.toLowerCase() === decodedCategoryName.toLowerCase());
  console.log('products in category:', productsInSelectedCategory);

  return (
    <div className='selectedCat'>
    <h2>{decodedCategoryName.toUpperCase()}</h2>
    <Product productsData={productsInSelectedCategory}/>
    <button onClick={goBack} className='backBtn'>Go back</button>
    </div>
  )
}

export default SelectedCat