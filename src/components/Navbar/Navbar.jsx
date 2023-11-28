import React from 'react';
import './Navbar.css';
import logo  from '../../assets/logo.jpeg';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='navbar'>
    <div className='logoDiv'>
    <img src={logo} />
    </div>
        
        <ul>
         <li><Link className='link' to='/'>Home</Link></li>
         <li><Link className='link' to='/contact-us'>ContactUs</Link></li>
         <li><Link className='link' to='/login'>Login</Link></li>
         <li><Link className='link' to='/signup'>SignUp</Link></li>
         <li><Link className='link' to='/cart'>Cart</Link></li>

        </ul>
    </div>
  )
}

export default Navbar