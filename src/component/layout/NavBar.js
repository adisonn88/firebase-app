import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-bar grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Mój plan</Link>
            </div>
        </nav> 
    )
}

export default Navbar;