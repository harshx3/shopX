import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Category from '../../components/Category/Category'
import Product from '../../components/Product/Product'
import Footer from '../../components/Footer/Footer'

const Home = ({data}) => {
    
  return (
    <div>
        <Navbar />
        <Category />
        <Product productsData={data} />
        <Footer />
    </div>
  )
}

export default Home;