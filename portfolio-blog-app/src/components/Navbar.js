import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/blog">Blog</Link>
    <Link to="/portfolio">Portfolio</Link>
  </nav>
);

export default Navbar;
