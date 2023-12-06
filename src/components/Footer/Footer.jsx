import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
      <div class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum.</p>
      </div>
      <div class="footer-section">
        <h2>Quick Links</h2>
        <ul>
          <li><Link>Home</Link></li>
          <li><Link>Services</Link></li>
          <li><Link>Contact</Link></li>
          <li><Link>Privacy Policy</Link></li>
        </ul>
      </div>
      <div class="footer-section">
        <h2>Contact Us</h2>
        <p>Email: info@example.com</p>
        <p>Phone: +1 123 456 7890</p>
      </div>
      <div class="footer-section social-icons">
        <h2>Follow Us</h2>
        <Link>Facebook</Link>
        <Link>Twitter</Link>
        <Link>Instagram</Link>
      </div>
    </div>
  </div>

  )
}

export default Footer