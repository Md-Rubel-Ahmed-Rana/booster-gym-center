import React from 'react';
import "./Header.css"
import logo from "./logo.jfif";
const Header = () => {
    return (
        <div>
            <div className='header'>
                <img className='logo' src={logo} alt="" />
                <h2>Booster Gym Center</h2>
            </div>
            <h3 className='ms-4'>Select Your Steps</h3>
        </div>
    );
};

export default Header;