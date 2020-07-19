import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';


const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="Website Logo" />
            <nav>
                <ul>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/review">Review Order</a></li>
                    <li><a href="/manage">Manage Inventory</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;