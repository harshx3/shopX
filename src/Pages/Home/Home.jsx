import React from 'react'
import Category from '../../components/Category/Category'
import Product from '../../components/Product/Product'

const Home = ({data}) => {
    
  return (
    <div>
   <Category to='category' />
        <Product productsData={data} />
    </div>
  )
}

export default Home;