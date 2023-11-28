import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    
  }, []); // Empty dependency array means this effect runs once after the initial render
  console.log(products);

  


  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home data={products} />} />
    <Route path='cart' element={<Cart />} />
    </Routes>
    </BrowserRouter>
    </>
  );
};


export default App;
