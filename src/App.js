import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import { AuthProvider } from './components/Authenticator/Authenticator';
import ProductCard from './Pages/ProductCard/ProductCard';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SelectedCat from './Pages/SelectedCategory/SelectedCat';

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
    
  }, []); 
  // Empty dependency array means this effect runs once after the initial render
  // console.log(products);

  // console.log('app.js data',products[0]);


  return (
    <>
    <BrowserRouter>
    <AuthProvider>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home data={products} />} />
    <Route path='cart' element={<Cart />} />
    <Route path='login' element={<Login />} />
    <Route path='signup' element={<SignUp />} />
    <Route path='product/:productID' element={<ProductCard data={products} />} />
    <Route path='category/:categoryName/*' element={<SelectedCat data={products} />} />
    </Routes>
    <Footer />
    </AuthProvider>
    </BrowserRouter>
    </>
  );
};


export default App;
